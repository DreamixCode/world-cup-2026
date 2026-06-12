import classNames from "classnames";

import { useMedia } from "@/hooks";
import { Tooltip } from "react-tooltip";
import { getGroupColorIndex, GROUP_CORNER_CLASSES } from "../../groupColors";
import { getFlag } from "../../utils.jsx";
import ContentContainer from "../ContentContainer";

function Group({
  number,
  teams = [],
  className,
  singleView,
  style,
  colorIndex = 0,
}) {
  const isSmall = useMedia(useMedia.SMALL);
  const sortedTeams = [...teams].sort((a, b) => a.rank - b.rank);
  const cornerColorClass = GROUP_CORNER_CLASSES[getGroupColorIndex(colorIndex)];

  return (
    <ContentContainer className="select-none">
      <div
        className={classNames(
          "relative overflow-hidden rounded-md bg-white shadow-md",
          className,
        )}
        style={style}
      >
        <div
          className={classNames(
            "pointer-events-none absolute top-0 right-0 h-40 w-40 rounded-bl-[99px]",
            cornerColorClass,
          )}
        />
        <div
          className={classNames(
            "pointer-events-none absolute top-0 right-0 h-40 w-41 rounded-tr-[40%] sm:rounded-tr-[50%] bg-white",
          )}
        />

        <table
          className={classNames(
            "relative w-full text-dec-primary font-extrabold tracking-widest",
            "text-xs lg:text-lg",
          )}
        >
          <thead>
            <tr className="text-xs lg:text-lg">
              <td colSpan={7} className="px-6 pt-6 pb-3">
                {`${number.toUpperCase()}`}
              </td>
            </tr>
            {singleView && isSmall && (
              <tr className="opacity-70">
                <th className="pl-6 pr-2 text-left"></th>
                <th className="py-3 px-2 text-left"></th>
                <th
                  className="w-8 text-left cursor-help"
                  data-tooltip-id="group-stats-tooltip"
                  data-tooltip-content="Matches played"
                  data-tooltip-place="top"
                >
                  M
                </th>
                <th
                  className="w-8 text-left cursor-help"
                  data-tooltip-id="group-stats-tooltip"
                  data-tooltip-content="Wins"
                  data-tooltip-place="top"
                >
                  W
                </th>
                <th
                  className="w-8 text-left cursor-help"
                  data-tooltip-id="group-stats-tooltip"
                  data-tooltip-content="Draws"
                  data-tooltip-place="top"
                >
                  D
                </th>
                <th
                  className="w-8 text-left cursor-help"
                  data-tooltip-id="group-stats-tooltip"
                  data-tooltip-content="Losses"
                  data-tooltip-place="top"
                >
                  L
                </th>
                <th
                  className="pr-6 text-right cursor-help"
                  data-tooltip-id="group-stats-tooltip"
                  data-tooltip-content="Points"
                  data-tooltip-place="top"
                >
                  P
                </th>
              </tr>
            )}
          </thead>
          <tbody className="w-full bg-white text-black">
            {sortedTeams?.map((team) => {
              const flag = getFlag(team?.name);

              return (
                <tr className="items-center" key={team?.id}>
                  <td className="pl-6 pr-2 sm:text-dec-h4 text-dec-sm align-middle">
                    {team?.rank}
                  </td>
                  <td className="sm:text-dec-h4 text-dec-xs py-3 px-2">
                    <div className="flex items-center gap-2">
                      <span>{flag}</span>
                      <span>{team?.name.toUpperCase()}</span>
                    </div>
                  </td>
                  {singleView && isSmall && (
                    <>
                      <td className="text-left">{team?.played}</td>
                      <td className="text-left">{team?.win}</td>
                      <td className="text-left">{team?.draw}</td>
                      <td className="text-left">{team?.lose}</td>
                    </>
                  )}
                  <td className="text-right sm:text-dec-h4 text-dec-md pr-6 align-middle">
                    {team?.points}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Tooltip
          id="group-stats-tooltip"
          className="bg-dec-primary! text-white! px-2! py-1! rounded-md! shadow-lg! text-xs!"
          opacity={1}
        />
      </div>
    </ContentContainer>
  );
}

export default Group;
