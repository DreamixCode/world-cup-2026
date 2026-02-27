import classNames from "classnames";

import ContentContainer from "../ContentContainer";
import { useGroups } from "../../api";
import { getFlag } from "../../utils.jsx";

function Group({ number, teams, className, singleView, style }) {
  const { groups } = useGroups();

  const singleGroup = groups?.filter((group) => group.group === number);

  singleGroup?.map(({ teams }) => teams?.sort((a, b) => a.rank - b.rank));

  const colors = {
    "Group A": {
      background: "#01ba5d",
      text: "#ffffff",
    },
    "Group B": {
      background: "#002b93",
      text: "#ffffff",
    },
    "Group C": {
      background: "#fe0000",
      text: "#ffffff",
    },
    "Group D": {
      background: "#ffca00",
      text: "black",
    },
    "Group E": {
      background: "#d4e2eb",
      text: "black",
    },
    "Group F": {
      background: "#1e1e28",
      text: "#ffffff",
    },
    "Ranking of third-placed teams": {
      background: "#01ba5d",
      text: "#ffffff",
    },
  };

  return (
    <ContentContainer className="select-none">
      <table
        className={classNames(
          "items-center w-full text-dec-theme font-extrabold tracking-widest",
          singleView ? "text-lg" : "lg:text-xs",
          className
        )}
        style={style}
      >
        <thead className="bg-dec-background border-2">
          <tr
            className={classNames(
              "text-center col-span-7 text-2xl h-12 border-2"
            )}
            style={{
              color: colors[number].text,
              backgroundColor: colors[number].background,
            }}
          >
            <td colSpan={7}>{`${number.toUpperCase()}`}</td>
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
                  {/* <Tooltip
                    id="Matches"
                    textColor="dec-theme"
                    backgroundColor="white"
                  /> */}
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
                    textColor="dec-theme"
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
                    textColor="dec-theme"
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
                    textColor="dec-theme"
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
                    textColor="dec-theme"
                    backgroundColor="white"
                  /> */}
                  P
                </th>
              </>
            )}
          </tr>
        </thead>
        <tbody className="bg-dec-theme text-white border-2 w-full">
          {singleGroup?.map((group) =>
            group?.teams?.map((team) => {
              const flag = getFlag(team?.name);

              return (
                <tr className="h-10 items-center py-8" key={team?.id}>
                  <td className="px-2 sm:text-dec-h4 text-dec-sm">
                    {team?.rank}
                  </td>
                  <td className="flex items-center sm:text-dec-h4 text-dec-xs py-4 space-x-2 px-2">
                    <span>{flag}</span>
                    <span>{team?.name.toUpperCase()}</span>
                  </td>
                  {singleView && (
                    <>
                      <td className="text-left">{team?.played}</td>
                      <td className="text-left">{team?.win}</td>
                      <td className="text-left">{team?.draw}</td>
                      <td className="text-left">{team?.lose}</td>
                    </>
                  )}
                  <td className="text-left sm:text-dec-h4 text-dec-sm">
                    {team?.points}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
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
