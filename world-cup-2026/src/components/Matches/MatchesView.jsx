import classNames from "classnames";
import { format, isAfter, isEqual, parseISO } from "date-fns";
import Match from "./Match";
import { useMedia } from "../../hooks";
import { useMatches } from "../../api";
import ContentContainer from "../ContentContainer";
import Spinner from "../Spinner";

function MatchesView({ frontPage }) {
  const isMedium = useMedia(useMedia.MEDIUM);
  const isLarge = useMedia(useMedia.LARGE);

  const today = new Date();

  // const { isLoading } = useMatches();
  const isLoading = false;

  matches?.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const todayMatches = matches?.filter((match) =>
    isEqual(
      new Date(format(parseISO(match?.date), "yyyy-MM-dd")),
      new Date(format(parseISO(today.toISOString()), "yyyy-MM-dd"))
    )
  );

  const nextMatches = matches?.filter((match) =>
    isAfter(
      new Date(format(parseISO(match?.date), "yyyy-MM-dd")),
      new Date(format(parseISO(today.toISOString()), "yyyy-MM-dd")) //replace with today
    )
  );

  function selectTitle() {
    if (frontPage && Boolean(todayMatches?.length)) {
      return `Today's matches`;
    } else if (frontPage && !Boolean(todayMatches?.length)) {
      return "Next matches";
    } else {
      return "Matches";
    }
  }

  function selectMatchesShown() {
    if (frontPage && Boolean(todayMatches?.length)) {
      return todayMatches;
    } else if (frontPage && !Boolean(todayMatches?.length)) {
      return nextMatches?.slice(0, 4);
    } else {
      return matches;
    }
  }

  return (
    <div
      className="bg-dec-primary flex grow uppercase"
      style={{
        backgroundImage: !frontPage && "url(/colors-top.png)",
        backgroundRepeat: !frontPage && "no-repeat",
        backgroundSize: !frontPage && "contain",
      }}
    >
      <ContentContainer
        className={classNames("sm:p-4 select-none", frontPage ? "" : "h-full")}
        maxWidthClassName="max-w-5xl px-4"
      >
        {isLoading && (
          <div className={!frontPage ? "sm:mt-24 mt-14 2xl:pt-28" : undefined}>
            <div className="text-center font-extrabold text-dec-primary-darkBlue bg-transparent text-dec-h3 pb-4 md:text-dec-t2">
              <h1>{selectTitle()}</h1>
            </div>
            <div className="flex flex-col border-2 ">
              <div className="grid grid-cols-11 text-dec-primary-darkBlue h-28 w-full bg-dec-background border-b-4 border-dec-primary text-dec-h2.5 font-extrabold px-2 items-center">
                <div className="col-span-7 md:col-span-5 text-dec-h3.5 sm:text-dec-h2.5">
                  Match
                </div>
                {isMedium && <div className="col-span-2">Date</div>}
                {isLarge && <div className="col-span-1">Time</div>}
                <div className="sm:col-span-3 col-span-4 text-dec-h3.5 sm:text-dec-h2.5">
                  Your bet
                </div>
              </div>
              {selectMatchesShown()?.map((match) => {
                return (
                  <Match
                    key={match?.id}
                    hostTeam={match?.teams?.home?.name}
                    guestTeam={match?.teams?.away?.name}
                    date={match?.date}
                    id={match?.id}
                    hostTeamScore={match?.score?.goals?.home}
                    guestTeamScore={match?.score?.goals?.away}
                    hostTeamPen={match?.score?.penalty?.home}
                    guestTeamPen={match?.score?.penalty?.away}
                    hostTeamET={match?.score?.extraTime?.home}
                    guestTeamET={match?.score?.extraTime?.away}
                    longStatus={match?.status?.long}
                    shortStatus={match?.status?.short}
                  />
                );
              })}
            </div>
          </div>
        )}
      </ContentContainer>
    </div>
  );
}

export default MatchesView;

export const matches = [
  {
    id: 1145509,
    date: "2024-06-14T19:00:00Z",
    status: {
      elapsed: 90,
      long: "Match Finished",
      short: "FT",
    },
    teams: {
      home: {
        id: 25,
        name: "Germany",
        logo: "https://media.api-sports.io/football/teams/25.png",
        winner: true,
      },
      away: {
        id: 1108,
        name: "Scotland",
        logo: "https://media.api-sports.io/football/teams/1108.png",
        winner: false,
      },
    },
    score: {
      goals: {
        home: 5,
        away: 1,
        symbol: "1",
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group A - 1",
  },
  {
    id: 1145510,
    date: "2024-06-15T13:00:00Z",
    status: {
      elapsed: 90,
      long: "Match Finished",
      short: "FT",
    },
    teams: {
      home: {
        id: 769,
        name: "Hungary",
        logo: "https://media.api-sports.io/football/teams/769.png",
        winner: false,
      },
      away: {
        id: 15,
        name: "Switzerland",
        logo: "https://media.api-sports.io/football/teams/15.png",
        winner: true,
      },
    },
    score: {
      goals: {
        home: 1,
        away: 3,
        symbol: "2",
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group A - 1",
  },
  {
    id: 1145511,
    date: "2024-06-15T16:00:00Z",
    status: {
      elapsed: 90,
      long: "Match Finished",
      short: "FT",
    },
    teams: {
      home: {
        id: 9,
        name: "Spain",
        logo: "https://media.api-sports.io/football/teams/9.png",
        winner: true,
      },
      away: {
        id: 3,
        name: "Croatia",
        logo: "https://media.api-sports.io/football/teams/3.png",
        winner: false,
      },
    },
    score: {
      goals: {
        home: 3,
        away: 0,
        symbol: "1",
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group B - 1",
  },
  {
    id: 1145512,
    date: "2024-06-15T19:00:00Z",
    status: {
      elapsed: 90,
      long: "Match Finished",
      short: "FT",
    },
    teams: {
      home: {
        id: 768,
        name: "Italy",
        logo: "https://media.api-sports.io/football/teams/768.png",
        winner: true,
      },
      away: {
        id: 778,
        name: "Albania",
        logo: "https://media.api-sports.io/football/teams/778.png",
        winner: false,
      },
    },
    score: {
      goals: {
        home: 2,
        away: 1,
        symbol: "1",
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group B - 1",
  },
  {
    id: 1145513,
    date: "2024-06-16T16:00:00Z",
    status: {
      elapsed: 90,
      long: "Match Finished",
      short: "FT",
    },
    teams: {
      home: {
        id: 1091,
        name: "Slovenia",
        logo: "https://media.api-sports.io/football/teams/1091.png",
        winner: null,
      },
      away: {
        id: 21,
        name: "Denmark",
        logo: "https://media.api-sports.io/football/teams/21.png",
        winner: null,
      },
    },
    score: {
      goals: {
        home: 1,
        away: 1,
        symbol: "X",
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group C - 1",
  },
  {
    id: 1145514,
    date: "2024-06-16T19:00:00Z",
    status: {
      elapsed: 90,
      long: "Match Finished",
      short: "FT",
    },
    teams: {
      home: {
        id: 14,
        name: "Serbia",
        logo: "https://media.api-sports.io/football/teams/14.png",
        winner: false,
      },
      away: {
        id: 10,
        name: "England",
        logo: "https://media.api-sports.io/football/teams/10.png",
        winner: true,
      },
    },
    score: {
      goals: {
        home: 0,
        away: 1,
        symbol: "2",
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group C - 1",
  },
  {
    id: 1145515,
    date: "2024-06-17T19:00:00Z",
    status: {
      elapsed: 90,
      long: "Match Finished",
      short: "FT",
    },
    teams: {
      home: {
        id: 775,
        name: "Austria",
        logo: "https://media.api-sports.io/football/teams/775.png",
        winner: false,
      },
      away: {
        id: 2,
        name: "France",
        logo: "https://media.api-sports.io/football/teams/2.png",
        winner: true,
      },
    },
    score: {
      goals: {
        home: 0,
        away: 1,
        symbol: "2",
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group D - 1",
  },
  {
    id: 1145516,
    date: "2024-06-17T16:00:00Z",
    status: {
      elapsed: 90,
      long: "Match Finished",
      short: "FT",
    },
    teams: {
      home: {
        id: 1,
        name: "Belgium",
        logo: "https://media.api-sports.io/football/teams/1.png",
        winner: false,
      },
      away: {
        id: 773,
        name: "Slovakia",
        logo: "https://media.api-sports.io/football/teams/773.png",
        winner: true,
      },
    },
    score: {
      goals: {
        home: 0,
        away: 1,
        symbol: "2",
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group E - 1",
  },
  {
    id: 1145517,
    date: "2024-06-18T19:00:00Z",
    status: {
      elapsed: 72,
      long: "Second Half",
      short: "2H",
    },
    teams: {
      home: {
        id: 27,
        name: "Portugal",
        logo: "https://media.api-sports.io/football/teams/27.png",
        winner: null,
      },
      away: {
        id: 770,
        name: "Czech Republic",
        logo: "https://media.api-sports.io/football/teams/770.png",
        winner: null,
      },
    },
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group F - 1",
  },
  {
    id: 1145518,
    date: "2024-06-19T19:00:00Z",
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1108,
        name: "Scotland",
        logo: "https://media.api-sports.io/football/teams/1108.png",
        winner: null,
      },
      away: {
        id: 15,
        name: "Switzerland",
        logo: "https://media.api-sports.io/football/teams/15.png",
        winner: null,
      },
    },
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group A - 2",
  },
  {
    id: 1145519,
    date: "2024-06-19T16:00:00Z",
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 25,
        name: "Germany",
        logo: "https://media.api-sports.io/football/teams/25.png",
        winner: null,
      },
      away: {
        id: 769,
        name: "Hungary",
        logo: "https://media.api-sports.io/football/teams/769.png",
        winner: null,
      },
    },
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group A - 2",
  },
  {
    id: 1145520,
    date: "2024-06-19T13:00:00Z",
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 3,
        name: "Croatia",
        logo: "https://media.api-sports.io/football/teams/3.png",
        winner: null,
      },
      away: {
        id: 778,
        name: "Albania",
        logo: "https://media.api-sports.io/football/teams/778.png",
        winner: null,
      },
    },
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group B - 2",
  },
  {
    id: 1145521,
    date: "2024-06-20T19:00:00Z",
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 9,
        name: "Spain",
        logo: "https://media.api-sports.io/football/teams/9.png",
        winner: null,
      },
      away: {
        id: 768,
        name: "Italy",
        logo: "https://media.api-sports.io/football/teams/768.png",
        winner: null,
      },
    },
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group B - 2",
  },
  {
    id: 1145522,
    date: "2024-06-20T16:00:00Z",
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 21,
        name: "Denmark",
        logo: "https://media.api-sports.io/football/teams/21.png",
        winner: null,
      },
      away: {
        id: 10,
        name: "England",
        logo: "https://media.api-sports.io/football/teams/10.png",
        winner: null,
      },
    },
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group C - 2",
  },
  {
    id: 1145523,
    date: "2024-06-20T13:00:00Z",
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1091,
        name: "Slovenia",
        logo: "https://media.api-sports.io/football/teams/1091.png",
        winner: null,
      },
      away: {
        id: 14,
        name: "Serbia",
        logo: "https://media.api-sports.io/football/teams/14.png",
        winner: null,
      },
    },
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group C - 2",
  },
  {
    id: 1145524,
    date: "2024-06-21T19:00:00Z",
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1118,
        name: "Netherlands",
        logo: "https://media.api-sports.io/football/teams/1118.png",
        winner: null,
      },
      away: {
        id: 2,
        name: "France",
        logo: "https://media.api-sports.io/football/teams/2.png",
        winner: null,
      },
    },
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group D - 2",
  },
  {
    id: 1145525,
    date: "2024-06-22T19:00:00Z",
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1,
        name: "Belgium",
        logo: "https://media.api-sports.io/football/teams/1.png",
        winner: null,
      },
      away: {
        id: 774,
        name: "Romania",
        logo: "https://media.api-sports.io/football/teams/774.png",
        winner: null,
      },
    },
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group E - 2",
  },
  {
    id: 1145526,
    date: "2024-06-22T16:00:00Z",
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 777,
        name: "Türkiye",
        logo: "https://media.api-sports.io/football/teams/777.png",
        winner: null,
      },
      away: {
        id: 27,
        name: "Portugal",
        logo: "https://media.api-sports.io/football/teams/27.png",
        winner: null,
      },
    },
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group F - 2",
  },
  {
    id: 1145527,
    date: "2024-06-23T19:00:00Z",
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 15,
        name: "Switzerland",
        logo: "https://media.api-sports.io/football/teams/15.png",
        winner: null,
      },
      away: {
        id: 25,
        name: "Germany",
        logo: "https://media.api-sports.io/football/teams/25.png",
        winner: null,
      },
    },
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group A - 3",
  },
  {
    id: 1145528,
    date: "2024-06-23T19:00:00Z",
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1108,
        name: "Scotland",
        logo: "https://media.api-sports.io/football/teams/1108.png",
        winner: null,
      },
      away: {
        id: 769,
        name: "Hungary",
        logo: "https://media.api-sports.io/football/teams/769.png",
        winner: null,
      },
    },
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group A - 3",
  },
  {
    id: 1145529,
    date: "2024-06-24T19:00:00Z",
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 3,
        name: "Croatia",
        logo: "https://media.api-sports.io/football/teams/3.png",
        winner: null,
      },
      away: {
        id: 768,
        name: "Italy",
        logo: "https://media.api-sports.io/football/teams/768.png",
        winner: null,
      },
    },
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group B - 3",
  },
  {
    id: 1145530,
    date: "2024-06-24T19:00:00Z",
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 778,
        name: "Albania",
        logo: "https://media.api-sports.io/football/teams/778.png",
        winner: null,
      },
      away: {
        id: 9,
        name: "Spain",
        logo: "https://media.api-sports.io/football/teams/9.png",
        winner: null,
      },
    },
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group B - 3",
  },
  {
    id: 1145531,
    date: "2024-06-25T19:00:00Z",
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 10,
        name: "England",
        logo: "https://media.api-sports.io/football/teams/10.png",
        winner: null,
      },
      away: {
        id: 1091,
        name: "Slovenia",
        logo: "https://media.api-sports.io/football/teams/1091.png",
        winner: null,
      },
    },
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group C - 3",
  },
  {
    id: 1145532,
    date: "2024-06-25T19:00:00Z",
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 21,
        name: "Denmark",
        logo: "https://media.api-sports.io/football/teams/21.png",
        winner: null,
      },
      away: {
        id: 14,
        name: "Serbia",
        logo: "https://media.api-sports.io/football/teams/14.png",
        winner: null,
      },
    },
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group C - 3",
  },
  {
    id: 1145533,
    date: "2024-06-25T16:00:00Z",
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1118,
        name: "Netherlands",
        logo: "https://media.api-sports.io/football/teams/1118.png",
        winner: null,
      },
      away: {
        id: 775,
        name: "Austria",
        logo: "https://media.api-sports.io/football/teams/775.png",
        winner: null,
      },
    },
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group D - 3",
  },
  {
    id: 1145534,
    date: "2024-06-26T16:00:00Z",
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 773,
        name: "Slovakia",
        logo: "https://media.api-sports.io/football/teams/773.png",
        winner: null,
      },
      away: {
        id: 774,
        name: "Romania",
        logo: "https://media.api-sports.io/football/teams/774.png",
        winner: null,
      },
    },
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group E - 3",
  },
  {
    id: 1145535,
    date: "2024-06-26T19:00:00Z",
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 770,
        name: "Czech Republic",
        logo: "https://media.api-sports.io/football/teams/770.png",
        winner: null,
      },
      away: {
        id: 777,
        name: "Türkiye",
        logo: "https://media.api-sports.io/football/teams/777.png",
        winner: null,
      },
    },
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group F - 3",
  },
  {
    id: 1189846,
    date: "2024-06-16T13:00:00Z",
    status: {
      elapsed: 90,
      long: "Match Finished",
      short: "FT",
    },
    teams: {
      home: {
        id: 24,
        name: "Poland",
        logo: "https://media.api-sports.io/football/teams/24.png",
        winner: false,
      },
      away: {
        id: 1118,
        name: "Netherlands",
        logo: "https://media.api-sports.io/football/teams/1118.png",
        winner: true,
      },
    },
    score: {
      goals: {
        home: 1,
        away: 2,
        symbol: "2",
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group D - 1",
  },
  {
    id: 1189847,
    date: "2024-06-17T13:00:00Z",
    status: {
      elapsed: 90,
      long: "Match Finished",
      short: "FT",
    },
    teams: {
      home: {
        id: 774,
        name: "Romania",
        logo: "https://media.api-sports.io/football/teams/774.png",
        winner: true,
      },
      away: {
        id: 772,
        name: "Ukraine",
        logo: "https://media.api-sports.io/football/teams/772.png",
        winner: false,
      },
    },
    score: {
      goals: {
        home: 3,
        away: 0,
        symbol: "1",
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group E - 1",
  },
  {
    id: 1189848,
    date: "2024-06-18T16:00:00Z",
    status: {
      elapsed: 90,
      long: "Match Finished",
      short: "FT",
    },
    teams: {
      home: {
        id: 777,
        name: "Türkiye",
        logo: "https://media.api-sports.io/football/teams/777.png",
        winner: true,
      },
      away: {
        id: 1104,
        name: "Georgia",
        logo: "https://media.api-sports.io/football/teams/1104.png",
        winner: false,
      },
    },
    score: {
      goals: {
        home: 3,
        away: 1,
        symbol: "1",
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group F - 1",
  },
  {
    id: 1189849,
    date: "2024-06-21T13:00:00Z",
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 773,
        name: "Slovakia",
        logo: "https://media.api-sports.io/football/teams/773.png",
        winner: null,
      },
      away: {
        id: 772,
        name: "Ukraine",
        logo: "https://media.api-sports.io/football/teams/772.png",
        winner: null,
      },
    },
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group E - 2",
  },
  {
    id: 1189850,
    date: "2024-06-21T16:00:00Z",
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 24,
        name: "Poland",
        logo: "https://media.api-sports.io/football/teams/24.png",
        winner: null,
      },
      away: {
        id: 775,
        name: "Austria",
        logo: "https://media.api-sports.io/football/teams/775.png",
        winner: null,
      },
    },
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group D - 2",
  },
  {
    id: 1189851,
    date: "2024-06-22T13:00:00Z",
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1104,
        name: "Georgia",
        logo: "https://media.api-sports.io/football/teams/1104.png",
        winner: null,
      },
      away: {
        id: 770,
        name: "Czech Republic",
        logo: "https://media.api-sports.io/football/teams/770.png",
        winner: null,
      },
    },
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group F - 2",
  },
  {
    id: 1189852,
    date: "2024-06-25T16:00:00Z",
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 2,
        name: "France",
        logo: "https://media.api-sports.io/football/teams/2.png",
        winner: null,
      },
      away: {
        id: 24,
        name: "Poland",
        logo: "https://media.api-sports.io/football/teams/24.png",
        winner: null,
      },
    },
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group D - 3",
  },
  {
    id: 1189853,
    date: "2024-06-26T16:00:00Z",
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 772,
        name: "Ukraine",
        logo: "https://media.api-sports.io/football/teams/772.png",
        winner: null,
      },
      away: {
        id: 1,
        name: "Belgium",
        logo: "https://media.api-sports.io/football/teams/1.png",
        winner: null,
      },
    },
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group E - 3",
  },
  {
    id: 1189854,
    date: "2024-06-26T19:00:00Z",
    status: {
      elapsed: null,
      long: "Not Started",
      short: "NS",
    },
    teams: {
      home: {
        id: 1104,
        name: "Georgia",
        logo: "https://media.api-sports.io/football/teams/1104.png",
        winner: null,
      },
      away: {
        id: 27,
        name: "Portugal",
        logo: "https://media.api-sports.io/football/teams/27.png",
        winner: null,
      },
    },
    score: {
      goals: {
        home: null,
        away: null,
        symbol: null,
      },
      extraTime: null,
      penalty: {
        home: null,
        away: null,
        symbol: null,
      },
    },
    round: "Group F - 3",
  },
];
