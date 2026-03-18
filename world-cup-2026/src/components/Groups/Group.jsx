import classNames from "classnames";

import ContentContainer from "../ContentContainer";
import { useGroups } from "../../api";
import { getFlag } from "../../utils.jsx";
import { mockedGroups } from "../../const.js";
import { Tooltip } from "react-tooltip";

function Group({ number, teams, className, singleView, style }) {
  // const { groups } = useGroups();
  const groups = mockedGroups;

  const singleGroup = groups?.filter((group) => group.group === number);

  singleGroup?.map(({ teams }) => teams?.sort((a, b) => a.rank - b.rank));

  const cornerGroupClasses = {
    "Group A": "bg-dec-groupA",
    "Group B": "bg-dec-groupB",
    "Group C": "bg-dec-groupC",
    "Group D": "bg-dec-groupD",
    "Group E": "bg-dec-groupE",
    "Group F": "bg-dec-groupF",
    "Group G": "bg-dec-groupG",
    "Group H": "bg-dec-groupH",
    "Group I": "bg-dec-groupI",
    "Group J": "bg-dec-groupJ",
    "Group K": "bg-dec-groupK",
    "Group L": "bg-dec-groupL",
  };

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
            cornerGroupClasses[number],
          )}
        />
        <div
          className={classNames(
            "pointer-events-none absolute top-0 right-0 h-40 w-41 rounded-tr-[50%] bg-white",
          )}
        />

        <table
          className={classNames(
            "relative w-full text-dec-primary font-extrabold tracking-widest",
            singleView ? "text-lg" : "lg:text-xs",
          )}
        >
          <thead>
            <tr className="text-2xl">
              <td colSpan={7} className="px-6 pt-6 pb-3">
                {`${number.toUpperCase()}`}
              </td>
            </tr>
            <tr>
              {singleView && (
                <>
                  <tr></tr>
                  <th></th>
                  <th
                    className="w-8 text-left"
                    data-tip="Matches"
                    data-for="Matches"
                    data-place="top"
                  >
                    <Tooltip
                      id="Matches"
                      textColor="dec-primary"
                      backgroundColor="red"
                    />
                    M
                  </th>
                  <th
                    className="w-8 text-left"
                    data-tip="Wins"
                    data-for="Wins"
                    data-place="top"
                  >
                    {/* <Tooltip
                    id="Wins"
                    textColor="dec-primary"
                    backgroundColor="white"
                  /> */}
                    W
                  </th>
                  <th
                    className="w-8 text-left"
                    data-tip="Draws"
                    data-for="Draws"
                    data-place="top"
                  >
                    {/* <Tooltip
                    id="Draws"
                    textColor="dec-primary"
                    backgroundColor="white"
                  /> */}
                    D
                  </th>
                  <th
                    className="w-8 text-left"
                    data-tip="Loses"
                    data-for="Loses"
                    data-place="top"
                  >
                    {/* <Tooltip
                    id="Loses"
                    textColor="dec-primary"
                    backgroundColor="white"
                  /> */}
                    L
                  </th>
                  <th
                    className="w-8 text-left"
                    data-tip="Points"
                    data-for="Points"
                    data-place="top"
                  >
                    {/* <Tooltip
                    id="Points"
                    textColor="dec-primary"
                    backgroundColor="white"
                  /> */}
                    P
                  </th>
                </>
              )}
            </tr>
          </thead>
          <tbody className="w-full bg-white text-black">
            {singleGroup?.map((group) =>
              group?.teams?.map((team) => {
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
                    {singleView && (
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
              }),
            )}
          </tbody>
        </table>
      </div>
    </ContentContainer>
  );
}

export default Group;

export const groups = [
  {
    group: "Group F",
    teams: [
      {
        id: 770,
        name: "Czech Republic",
        rank: 1,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 777,
        name: "Turkey",
        rank: 2,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 27,
        name: "Portugal",
        rank: 3,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 1104,
        name: "Georgia",
        rank: 4,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
    ],
  },
  {
    group: "Ranking of third-placed teams",
    teams: [
      {
        id: 2,
        name: "France",
        rank: 1,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 27,
        name: "Portugal",
        rank: 2,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 9,
        name: "Spain",
        rank: 3,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 1108,
        name: "Scotland",
        rank: 4,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 773,
        name: "Slovakia",
        rank: 5,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 10,
        name: "England",
        rank: 6,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
    ],
  },
  {
    group: "Group E",
    teams: [
      {
        id: 774,
        name: "Romania",
        rank: 1,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 1,
        name: "Belgium",
        rank: 2,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 773,
        name: "Slovakia",
        rank: 3,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 772,
        name: "Ukraine",
        rank: 4,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
    ],
  },
  {
    group: "Group B",
    teams: [
      {
        id: 768,
        name: "Italy",
        rank: 1,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 3,
        name: "Croatia",
        rank: 2,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 9,
        name: "Spain",
        rank: 3,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 778,
        name: "Albania",
        rank: 4,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
    ],
  },
  {
    group: "Group A",
    teams: [
      {
        id: 25,
        name: "Germany",
        rank: 1,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 15,
        name: "Switzerland",
        rank: 2,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 1108,
        name: "Scotland",
        rank: 3,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 769,
        name: "Hungary",
        rank: 4,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
    ],
  },
  {
    group: "Group D",
    teams: [
      {
        id: 24,
        name: "Poland",
        rank: 1,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 775,
        name: "Austria",
        rank: 2,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 2,
        name: "France",
        rank: 3,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 1118,
        name: "Netherlands",
        rank: 4,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
    ],
  },
  {
    group: "Group C",
    teams: [
      {
        id: 1091,
        name: "Slovenia",
        rank: 1,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 21,
        name: "Denmark",
        rank: 2,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 10,
        name: "England",
        rank: 3,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
      {
        id: 14,
        name: "Serbia",
        rank: 4,
        played: 0,
        win: 0,
        draw: 0,
        lose: 0,
        points: 0,
        goalsDiff: 0,
      },
    ],
  },
];
