import { useParams } from "react-router-dom";
import Group from "./Group";
import ContentContainer from "../ContentContainer";
import { Match } from "../Matches";
import { matchess, mockedGroups } from "../../const.js";
import { useMedia } from "@/hooks";

const GROUP_MASCOTS = [
  { file: "clutch.jpg", alt: "Clutch" },
  { file: "maple.jpg", alt: "Maple" },
  { file: "zayu.jpg", alt: "Zayu" },
];

function getMascotForGroup(groupId) {
  const letter = String(groupId ?? "")
    .trim()
    .slice(0, 1)
    .toLowerCase();

  const index =
    letter >= "a" && letter <= "z" ? letter.charCodeAt(0) - 97 : 0;

  return GROUP_MASCOTS[index % GROUP_MASCOTS.length];
}

export function GroupDetails({ id, showBackLink: _showBackLink = true }) {
  const isSmall = useMedia(useMedia.SMALL);
  // const { groups = [] } = useGroups() ?? {};
  // const { matches } = useMatches();
  const groups = mockedGroups;
  const matches = matchess;

  const group = groups?.filter(
    (group) => group?.group?.slice(-1)?.toLowerCase() === id,
  );

  const groupTeams = group?.map(({ teams }) => teams.map((team) => team.name));
  const groupMatches = matches?.filter((match) =>
    groupTeams?.find(
      (teams) =>
        teams.includes(match?.teams?.home?.name) &&
        teams.includes(match?.teams?.away?.name),
    ),
  );

  groupMatches?.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  const mascot = getMascotForGroup(id);

  return (
    <ContentContainer className="bg-dec-primary h-full px-8 py-4 space-y-4 flex flex-col justify-center select-none">
      <div className="flex flex-col space-y-4 items-center">
        <div className="flex items-center space-x-1 w-full">
          {isSmall && (
            <img
              src={`${import.meta.env.BASE_URL}images/${mascot.file}`}
              alt={mascot.alt}
              className="h-[200px] w-auto"
            />
          )}
          <div className="w-full items-center flex max-w-xl">
            {group?.map((group) => (
              <Group
                singleView
                number={group?.group}
                teams={group?.teams}
                className="w-full"
              />
            ))}
          </div>
        </div>
        {groupMatches?.map((match) => {
          return (
            <Match
              key={match?.id}
              hostTeam={match?.teams?.home?.name}
              guestTeam={match?.teams?.away?.name}
              date={match?.date}
              id={match?.id}
              hostTeamScore={match?.score?.goals?.home}
              guestTeamScore={match?.score?.goals?.away}
              longStatus={match?.status?.long}
              shortStatus={match?.status?.short}
            />
          );
        })}
      </div>
    </ContentContainer>
  );
}

function GroupView() {
  const { id } = useParams();

  return (
    <div className="bg-dec-primary grow">
      <GroupDetails id={id} />
    </div>
  );
}

export default GroupView;
