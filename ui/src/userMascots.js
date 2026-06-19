export const USER_MASCOTS = [
  { file: "clutch.jpg", alt: "Clutch" },
  { file: "maple.jpg", alt: "Maple" },
  { file: "zayu.jpg", alt: "Zayu" },
];

export function buildMascotByUserId(standings = []) {
  const sortedUserIds = [...standings]
    .map((entry) => String(entry.user?.id ?? "").trim())
    .filter(Boolean)
    .sort();

  const mascotByUserId = new Map();
  sortedUserIds.forEach((userId, index) => {
    mascotByUserId.set(userId, USER_MASCOTS[index % USER_MASCOTS.length]);
  });

  return mascotByUserId;
}

export function getMascotForUser(userId, mascotByUserId) {
  const id = String(userId ?? "").trim();
  const mascot = mascotByUserId?.get(id);
  if (mascot) return mascot;

  const hash = [...id].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return USER_MASCOTS[hash % USER_MASCOTS.length];
}

export function getMascotForGroup(groupKey, groupIndex) {
  const str = String(groupKey ?? "").trim();
  const letterMatch = str.match(/group\s+([a-l])\b/i);

  if (letterMatch) {
    const letterIndex = letterMatch[1].toLowerCase().charCodeAt(0) - 97;
    return USER_MASCOTS[letterIndex % USER_MASCOTS.length];
  }

  const index = Number(groupIndex);
  if (Number.isFinite(index) && index >= 0) {
    return USER_MASCOTS[index % USER_MASCOTS.length];
  }

  if (str) {
    const hash = [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return USER_MASCOTS[hash % USER_MASCOTS.length];
  }

  return USER_MASCOTS[0];
}

export function buildTeamsFromStandings(standings = []) {
  const mascotByUserId = buildMascotByUserId(standings);
  const teamsByMascot = new Map(
    USER_MASCOTS.map((mascot) => [
      mascot.file,
      { mascot, name: mascot.alt, members: [], totalPoints: 0 },
    ]),
  );

  for (const entry of standings) {
    const mascot = getMascotForUser(entry.user?.id, mascotByUserId);
    const team = teamsByMascot.get(mascot.file);
    if (!team) continue;

    team.members.push({
      user: entry.user,
      totalPoints: entry.totalPoints ?? 0,
    });
    team.totalPoints += entry.totalPoints ?? 0;
  }

  return [...teamsByMascot.values()]
    .map((team) => ({
      ...team,
      members: [...team.members].sort(
        (a, b) =>
          b.totalPoints - a.totalPoints ||
          (a.user?.firstName ?? "").localeCompare(b.user?.firstName ?? ""),
      ),
    }))
    .sort(
      (a, b) =>
        b.totalPoints - a.totalPoints || a.name.localeCompare(b.name),
    );
}
