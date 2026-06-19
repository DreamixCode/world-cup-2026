import { useMedia } from "@/hooks";
import { useParams } from "react-router-dom";
import { useGroups, useMatches } from "../../api";
import { getMascotForGroup } from "../../userMascots";
import { getQueryErrorMessage } from "../../utils.jsx";
import ContentContainer from "../ContentContainer";
import { Match } from "../Matches";
import Group from "./Group";

export function GroupDetails({
  id,
  colorIndex,
  groupIndex,
  showBackLink: _showBackLink = true,
}) {
  const isSmall = useMedia(useMedia.SMALL);
  const {
    groups = [],
    isError: isGroupsError,
    error: groupsError,
  } = useGroups();
  const {
    matches = [],
    isError: isMatchesError,
    error: matchesError,
  } = useMatches();

  const resolvedGroupIndex =
    groupIndex ??
    colorIndex ??
    groups.findIndex((group) => group?.group === id);
  const group =
    resolvedGroupIndex >= 0 ? groups[resolvedGroupIndex] : undefined;

  const groupTeams = group ? [group.teams.map((team) => team.name)] : [];
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

  const mascot = getMascotForGroup(group?.group ?? id, resolvedGroupIndex);

  return (
    <ContentContainer className="bg-dec-primary px-8 py-4 space-y-4 flex flex-col select-none">
      <div className="flex flex-col space-y-4 items-center min-h-0">
        {isSmall && (
          <div className="absolute top-20 left-20">
            <img
              src={`${import.meta.env.BASE_URL}images/${mascot.file}`}
              alt={mascot.alt}
              className="h-50 w-auto flex shrink-0"
            />
          </div>
        )}
        <div className="flex items-center justify-center gap-4 w-full">
          <div className="flex-1 flex justify-center items-center min-w-0 max-w-xl">
            {group && (
              <Group
                singleView
                number={group.group}
                teams={group.teams}
                className="w-full"
                colorIndex={resolvedGroupIndex}
                groupIndex={resolvedGroupIndex}
              />
            )}
          </div>
        </div>
        {isGroupsError && (
          <div className="text-white font-bold text-center py-4">
            {getQueryErrorMessage(groupsError, "groups")}
          </div>
        )}
        {!isGroupsError &&
          groupMatches?.map((match) => {
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
                isLink
              />
            );
          })}
        {!isGroupsError && isMatchesError && (
          <div className="text-white font-bold text-center py-4">
            {getQueryErrorMessage(matchesError, "group matches")}
          </div>
        )}
        {!isGroupsError && !isMatchesError && !groupMatches?.length && (
          <div className="text-white font-bold text-center py-4">
            No group matches available yet.
          </div>
        )}
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
