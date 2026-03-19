import classNames from "classnames";
import { Link, useParams } from "react-router-dom";
import { isAfter, isBefore } from "date-fns";
import Match from "./Match";
import { useBets } from "../../api";
import { useMedia } from "../../hooks";
import ContentContainer from "../ContentContainer";
import { ChevronLeft, ChevronRight } from "../icons/index.jsx";
import Spinner from "../Spinner";
import { bets2026, matchess, mockedGroups } from "@/const";

function MatchView({ matchId, embedded = false }) {
  const params = useParams();
  const id = matchId ?? params?.id;
  // const { isLoading } = useMatches();
  const isLoading = false;
  // const { groups } = useGroups();
  const groups = mockedGroups;

  const isSmall = useMedia(useMedia.SMALL);
  const today = new Date();
  const matches = matchess;

  const match = matches?.find((match) => match?.id === Number(id));

  let merged = [];
  const { isLoadingBets } = useBets();

  const bets = bets2026;

  const matchBets = bets?.filter((bet) => bet?.matchId === Number(id));

  for (let i = 0; i < matchBets?.length; i++) {
    merged.push({
      ...matchBets[i],
      ...matchBets?.filter((bet) => bet.matchId === matchBets[i].id),
    });
  }

  const shownBets = merged.filter((match) => match.bet);

  let groupName;
  groups?.map(({ group, teams }) =>
    teams.map((team) => {
      if (team.name.includes(match?.teams?.home?.name)) groupName = group;
      return null;
    }),
  );

  return (
    <div
      className="bg-dec-primary grow uppercase"
      style={{
        backgroundImage: "url(/colors-top.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <ContentContainer
        maxWidthClassName="max-w-4xl"
        className={classNames(
          "py-4 grow justify-center select-none h-full",
          embedded && "mt-0",
        )}
      >
        {!embedded && (
          <div className="flex justify-between mt-20 bg-dec-primary-darkBlue text-dec-background">
            <Link to="/matches" className="text-dec-background">
              <div className="flex items-center">
                <ChevronLeft className="w-8 h-8" />
                <span>Back to all matches</span>
              </div>
            </Link>
            <Link
              to={`/groups/${groupName?.slice(-1)?.toLowerCase()}`}
              className="text-dec-background"
            >
              <div className="flex items-center">
                <span>Go to group</span>
                <ChevronRight className="w-8 h-8" />
              </div>
            </Link>
          </div>
        )}
        {!isLoading && (
          <div className="flex flex-col space-y-8 sm:space-y-0">
            <div className="h-full pb-2 sm:pb-4">
              <Match
                hostTeam={match?.teams?.home?.name}
                guestTeam={match?.teams?.away?.name}
                date={match?.date}
                id={match?.id}
                isLink={!embedded}
                hostTeamScore={match?.score?.goals?.home}
                guestTeamScore={match?.score?.goals?.away}
                hostTeamPen={match?.score?.penalty?.home}
                guestTeamPen={match?.score?.penalty?.away}
                hostTeamET={match?.score?.extraTime?.home}
                guestTeamET={match?.score?.extraTime?.away}
                longStatus={match?.status?.long}
                shortStatus={match?.status?.short}
              />
            </div>
            {isLoadingBets && (
              <div className="flex justify-center items-center">
                <Spinner className="h-16 w-16" />
              </div>
            )}
            {isBefore(today, new Date(match?.date)) ? (
              <table className="bg-dec-primary w-full text-dec-background font-extrabold rounded-md">
                <thead>
                  <tr className="border-b-4 border-dec-primary-light h-16 text-dec-h4">
                    <th className="text-left font-extrabold px-2">User</th>
                    <th className="text-left font-extrabold">Bet</th>
                    <th
                      className="text-left font-extrabold"
                      data-tip="Points"
                      data-for="Points"
                      data-place="left"
                    >
                      {isSmall ? "Points" : "P"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {shownBets?.map((bet) => {
                    console.log(bet);
                    return (
                      <tr
                        className=" border-b-4 border-dec-primary-light"
                        key={bet.user.email}
                      >
                        <td className="pl-2">
                          <Link to={`/user/${bet.user.id}`}>
                            <div className="flex sm:space-x-2 items-start sm:items-center sm:flex-row flex-col space-y-2 sm:space-y-0 py-2 sm:py-0">
                              <img
                                src={bet?.user?.picture}
                                alt={bet?.user?.firstName}
                                className="w-8 h-8 rounded-tr-[10px] rounded-bl-[10px]"
                              />
                              <div className="flex space-x-1">
                                <span>{bet?.user?.firstName}</span>
                                <span>{bet?.user?.lastName}</span>
                              </div>
                            </div>
                          </Link>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center sm:space-x-2 space-x-1">
                            <div>{bet?.bet?.home}</div>
                            <div>:</div>
                            <div>{bet?.bet?.away}</div>
                          </div>
                        </td>
                        <td className="pr-4">{bet?.points}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <div className="flex flex-col justify-center text-center text-dec-background text-dec-h3 space-y-4">
                <p>You'll see all the bets when the match starts!</p>
                <img
                  src="/images/trio-mascots.jpg"
                  alt="Match start"
                  className="w-1/2 mx-auto"
                />
              </div>
            )}
          </div>
        )}
      </ContentContainer>
    </div>
  );
}

export default MatchView;

export const bets = [
  {
    matchId: 1145509,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocJ7ssTTsf6YhDSYosN1rtui7xr7jzmXz-dJ9wr7yA2rt1kCLHE=s96-c",
    },
    bet: {
      home: 2,
      away: 1,
      symbol: "1",
    },
    points: null,
  },
  {
    matchId: 1145509,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocI7ybN8BsdRzRgcyTgka6fqeV63soBR-Hug6lL1JBf-nvMjDTk=s96-c",
    },
    bet: {
      home: 2,
      away: 7,
      symbol: "2",
    },
    points: 1,
  },
  {
    matchId: 1145510,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocI7ybN8BsdRzRgcyTgka6fqeV63soBR-Hug6lL1JBf-nvMjDTk=s96-c",
    },
    bet: {
      home: 2,
      away: 7,
      symbol: "2",
    },
    points: null,
  },
  {
    matchId: 1145511,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocI7ybN8BsdRzRgcyTgka6fqeV63soBR-Hug6lL1JBf-nvMjDTk=s96-c",
    },
    bet: {
      home: 1,
      away: 1,
      symbol: "X",
    },
    points: null,
  },
  {
    matchId: 1145512,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocLm6z4WfWsxrvmyNGHFYGL-BRjOQ5gdeTytvn_jndIghJ9r21Y=s96-c",
    },
    bet: {
      home: 2,
      away: 0,
      symbol: "1",
    },
    points: null,
  },
  {
    matchId: 1189847,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocLm6z4WfWsxrvmyNGHFYGL-BRjOQ5gdeTytvn_jndIghJ9r21Y=s96-c",
    },
    bet: {
      home: 1,
      away: 2,
      symbol: "2",
    },
    points: null,
  },
  {
    matchId: 1145512,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocI7ybN8BsdRzRgcyTgka6fqeV63soBR-Hug6lL1JBf-nvMjDTk=s96-c",
    },
    bet: {
      home: 4,
      away: 4,
      symbol: "X",
    },
    points: null,
  },
  {
    matchId: 1145534,
    user: {
      id: "102108675941673090281",
      firstName: "Volen",
      lastName: "Vashev",
      email: "volen.vashev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocI7ybN8BsdRzRgcyTgka6fqeV63soBR-Hug6lL1JBf-nvMjDTk=s96-c",
    },
    bet: {
      home: 5,
      away: 5,
      symbol: "X",
    },
    points: null,
  },
  {
    matchId: 1145510,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocJ7ssTTsf6YhDSYosN1rtui7xr7jzmXz-dJ9wr7yA2rt1kCLHE=s96-c",
    },
    bet: {
      home: 2,
      away: 2,
      symbol: "X",
    },
    points: null,
  },
  {
    matchId: 1145509,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocIb3o_0KaNTkl09eZgy3HP54TtHOlDBqKuTaiWX7HPNTC8XcWK5=s96-c",
    },
    bet: {
      home: 2,
      away: 0,
      symbol: "1",
    },
    points: null,
  },
  {
    matchId: 1145509,
    user: {
      id: "102107052476999637957",
      firstName: "Deyan",
      lastName: "Bozhilov",
      email: "deyan.bozhilov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocK0tcpCYLw5Wv7QKJlMJ1HPXuuMQEnJHY9fUl1xuZl2nso4hbA=s96-c",
    },
    bet: {
      home: 1,
      away: 1,
      symbol: "X",
    },
    points: null,
  },
  {
    matchId: 1145510,
    user: {
      id: "103069009589768100704",
      firstName: "Stefaniya",
      lastName: "Talambazova",
      email: "stefaniya.talambazova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocIb3o_0KaNTkl09eZgy3HP54TtHOlDBqKuTaiWX7HPNTC8XcWK5=s96-c",
    },
    bet: {
      home: 0,
      away: 0,
      symbol: "X",
    },
    points: null,
  },
  {
    matchId: 1145511,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocJ7ssTTsf6YhDSYosN1rtui7xr7jzmXz-dJ9wr7yA2rt1kCLHE=s96-c",
    },
    bet: {
      home: 1,
      away: 3,
      symbol: "2",
    },
    points: null,
  },
  {
    matchId: 1145512,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocJ7ssTTsf6YhDSYosN1rtui7xr7jzmXz-dJ9wr7yA2rt1kCLHE=s96-c",
    },
    bet: {
      home: 2,
      away: 3,
      symbol: "2",
    },
    points: null,
  },
  {
    matchId: 1189846,
    user: {
      id: "108660143969251608578",
      firstName: "Stefan",
      lastName: "Borislavov Stefanov",
      email: "stefan.borislavov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocJ7ssTTsf6YhDSYosN1rtui7xr7jzmXz-dJ9wr7yA2rt1kCLHE=s96-c",
    },
    bet: {
      home: 1,
      away: 1,
      symbol: "X",
    },
    points: null,
  },
  {
    matchId: 1145509,
    user: {
      id: "112529453352592387904",
      firstName: "Tania",
      lastName: "Kasabova",
      email: "tania.kasabova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocLm6z4WfWsxrvmyNGHFYGL-BRjOQ5gdeTytvn_jndIghJ9r21Y=s96-c",
    },
    bet: {
      home: 3,
      away: 1,
      symbol: "1",
    },
    points: 3,
  },
  {
    matchId: 1145509,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocKIRifhJz9x03OQt6CJrXRFR1t9xGtFzJm3CQYuHeXOxhPQoeg=s96-c",
    },
    bet: {
      home: 2,
      away: 0,
      symbol: "1",
    },
    points: null,
  },
  {
    matchId: 1145512,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocKIRifhJz9x03OQt6CJrXRFR1t9xGtFzJm3CQYuHeXOxhPQoeg=s96-c",
    },
    bet: {
      home: 3,
      away: 0,
      symbol: "1",
    },
    points: null,
  },
  {
    matchId: 1145511,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocKIRifhJz9x03OQt6CJrXRFR1t9xGtFzJm3CQYuHeXOxhPQoeg=s96-c",
    },
    bet: {
      home: 1,
      away: 1,
      symbol: "X",
    },
    points: null,
  },
  {
    matchId: 1145510,
    user: {
      id: "109427602538919890177",
      firstName: "Aleksandar",
      lastName: "Sergiev",
      email: "aleksandar.sergiev@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocKIRifhJz9x03OQt6CJrXRFR1t9xGtFzJm3CQYuHeXOxhPQoeg=s96-c",
    },
    bet: {
      home: 3,
      away: 1,
      symbol: "1",
    },
    points: null,
  },
  {
    matchId: 1145509,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocKzY3gn_9EFJJl0eiRU3OgpSM_5jPDL2UzJ-A73r-n6NH0pQg=s96-c",
    },
    bet: {
      home: 2,
      away: 0,
      symbol: "1",
    },
    points: null,
  },
  {
    matchId: 1145510,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocKzY3gn_9EFJJl0eiRU3OgpSM_5jPDL2UzJ-A73r-n6NH0pQg=s96-c",
    },
    bet: {
      home: 1,
      away: 1,
      symbol: "X",
    },
    points: null,
  },
  {
    matchId: 1145511,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocKzY3gn_9EFJJl0eiRU3OgpSM_5jPDL2UzJ-A73r-n6NH0pQg=s96-c",
    },
    bet: {
      home: 2,
      away: 1,
      symbol: "1",
    },
    points: null,
  },
  {
    matchId: 1145512,
    user: {
      id: "115960322353843957863",
      firstName: "Mihail",
      lastName: "Markov",
      email: "mihaill.markov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocKzY3gn_9EFJJl0eiRU3OgpSM_5jPDL2UzJ-A73r-n6NH0pQg=s96-c",
    },
    bet: {
      home: 2,
      away: 0,
      symbol: "1",
    },
    points: null,
  },
  {
    matchId: 1145509,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocKP231c9V4K6hH3wCMJpt6O9do4hERtL8Eqa__sjcBaFfGGugc=s96-c",
    },
    bet: {
      home: 2,
      away: 1,
      symbol: "1",
    },
    points: null,
  },
  {
    matchId: 1145509,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocJa0fnTG92DhmJ_ejtmdEkdo-zHvrAWWnZE1SAdQdE4v1EQpko=s96-c",
    },
    bet: {
      home: 3,
      away: 2,
      symbol: "1",
    },
    points: null,
  },
  {
    matchId: 1145510,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocJa0fnTG92DhmJ_ejtmdEkdo-zHvrAWWnZE1SAdQdE4v1EQpko=s96-c",
    },
    bet: {
      home: 2,
      away: 2,
      symbol: "X",
    },
    points: null,
  },
  {
    matchId: 1145511,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocJa0fnTG92DhmJ_ejtmdEkdo-zHvrAWWnZE1SAdQdE4v1EQpko=s96-c",
    },
    bet: {
      home: 4,
      away: 1,
      symbol: "1",
    },
    points: null,
  },
  {
    matchId: 1145512,
    user: {
      id: "106574676594795310012",
      firstName: "Ivaylo",
      lastName: "Stoyanov",
      email: "ivaylo.stoyanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocJa0fnTG92DhmJ_ejtmdEkdo-zHvrAWWnZE1SAdQdE4v1EQpko=s96-c",
    },
    bet: {
      home: 3,
      away: 0,
      symbol: "1",
    },
    points: null,
  },
  {
    matchId: 1145509,
    user: {
      id: "101571857991952384165",
      firstName: "Elena",
      lastName: "Kyorova",
      email: "elena.kyorova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocJsu2pqUxsbCjXvlxfpbabOUq7dSYQ1bR6o86ZzurH-f67555E=s96-c",
    },
    bet: {
      home: 3,
      away: 1,
      symbol: "1",
    },
    points: null,
  },
  {
    matchId: 1145510,
    user: {
      id: "101571857991952384165",
      firstName: "Elena",
      lastName: "Kyorova",
      email: "elena.kyorova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocJsu2pqUxsbCjXvlxfpbabOUq7dSYQ1bR6o86ZzurH-f67555E=s96-c",
    },
    bet: {
      home: 1,
      away: 2,
      symbol: "2",
    },
    points: null,
  },
  {
    matchId: 1145511,
    user: {
      id: "101571857991952384165",
      firstName: "Elena",
      lastName: "Kyorova",
      email: "elena.kyorova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocJsu2pqUxsbCjXvlxfpbabOUq7dSYQ1bR6o86ZzurH-f67555E=s96-c",
    },
    bet: {
      home: 3,
      away: 3,
      symbol: "X",
    },
    points: null,
  },
  {
    matchId: 1145512,
    user: {
      id: "101571857991952384165",
      firstName: "Elena",
      lastName: "Kyorova",
      email: "elena.kyorova@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocJsu2pqUxsbCjXvlxfpbabOUq7dSYQ1bR6o86ZzurH-f67555E=s96-c",
    },
    bet: {
      home: 2,
      away: 1,
      symbol: "1",
    },
    points: null,
  },
  {
    matchId: 1145510,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocKP231c9V4K6hH3wCMJpt6O9do4hERtL8Eqa__sjcBaFfGGugc=s96-c",
    },
    bet: {
      home: 2,
      away: 0,
      symbol: "1",
    },
    points: null,
  },
  {
    matchId: 1145511,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocKP231c9V4K6hH3wCMJpt6O9do4hERtL8Eqa__sjcBaFfGGugc=s96-c",
    },
    bet: {
      home: 0,
      away: 0,
      symbol: "X",
    },
    points: null,
  },
  {
    matchId: 1145512,
    user: {
      id: "110160959706446020015",
      firstName: "Milen",
      lastName: "Stefanov",
      email: "milen.stefanov@dreamix.eu",
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocKP231c9V4K6hH3wCMJpt6O9do4hERtL8Eqa__sjcBaFfGGugc=s96-c",
    },
    bet: {
      home: 3,
      away: 0,
      symbol: "1",
    },
    points: null,
  },
];
