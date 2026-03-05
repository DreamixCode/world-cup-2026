import { Link, useParams } from "react-router-dom";
import { useBets, useMatches, useStandings } from "../../api";
import { useMedia } from "../../hooks";
import { isAfter } from "date-fns";
import ContentContainer from "../ContentContainer";
import { ChevronLeft } from "../icons/index.jsx";
import { Tooltip } from "react-tooltip";

import { bets } from "../Matches/MatchView";
import { matches } from "../Matches/MatchesView";
import { getFlag } from "../../utils.jsx";

function UserView() {
  // const { matches } = useMatches();
  const matches = matchess;
  const { id } = useParams();

  const isSmall = useMedia(useMedia.SMALL);
  const today = new Date();

  // const { standings } = useStandings();
  const standings = standingss

  const user = standings?.filter((user) => user.user.id === id);

  let merged = [];

  // const { bets } = useBets();
  const userBets = bets?.filter((bet) => bet?.user?.id === id);

  for (let i = 0; i < matches?.length; i++) {
    merged.push({
      ...matches[i],
      ...userBets?.find((bet) => bet.matchId === matches[i].id),
    });
  }

  const shownBets = merged.filter(
    (match) => isAfter(today, new Date(match.date)) && match.bet
  );

  shownBets.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  console.log(shownBets);
  return (
    <div
      className="bg-dec-primary grow uppercase sm:text-dec-base text-dec-2xs"
      style={{
        backgroundImage: "url(/colors-top.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <ContentContainer
        className=" h-full text-dec-background p-4 select-none"
        maxWidthClassName="max-w-5xl"
      >
        <div className="flex flex-col xl:justify-between sm:p-8 items-center space-y-8">
          {user?.map((user) => (
            <div className="flex md:flex-row flex-col space-y-4 md:space-y-0 md:pt-20 2xl:pt-40 pt-8 items-center space-x-8">
              <Link to="/standings" className="text-dec-background">
                <div className="flex items-center sm:pl-6 pb-2 sm:pb-0">
                  <ChevronLeft className="w-8 h-8" />
                  <span>Back to standings</span>
                </div>
              </Link>
              <div className="flex justify-between space-x-4">
                <img
                  src={user?.user?.picture}
                  alt={user.user.firstName}
                  referrerPolicy="no-referrer"
                  className="rounded-full w-24 h-24"
                />
                <div className="flex sm:items-center flex-col justify-center items-start text-dec-base md:text-dec-h2 font-bold">
                  <div className="flex flex-col sm:flex-row space-x-2">
                    <div className="pl-2">{user.user.firstName}</div>
                    <div>{user.user.lastName}</div>
                  </div>
                  <div className="items-center pl-2 sm:justify-center flex justify-start">
                    {user.totalPoints} Points
                  </div>
                </div>
              </div>
            </div>
          ))}
          <table className="bg-dec-primary w-full text-dec-background font-extrabold rounded-md">
            <thead>
              <tr className="border-b-4 border-dec-primary-light h-16 text-dec-h4">
                <th className="text-left font-extrabold">Match</th>
                <th className="text-left font-extrabold">Bet</th>
                <th className="text-left font-extrabold">Score</th>
                <th
                  className="text-left font-extrabold"
                  data-tip="Points"
                  data-for="Points"
                  data-place="left"
                >
                  {isSmall ? "Points" : "P"}
                  {!isSmall && (
                    <Tooltip
                      id="Points"
                      textColor="dec-primary"
                      backgroundColor="white"
                    />
                  )}
                </th>
              </tr>
            </thead>
            <tbody>
              {shownBets?.map((bet) => {
                return (
                  <tr
                    className=" border-b-4 border-dec-primary-light"
                    key={bet.id}
                  >
                    <td className="pl-2">
                      <Link to={`/matches/${bet.matchId}`}>
                        <div className="flex sm:space-x-2 items-start sm:items-center sm:flex-row flex-col space-y-2 sm:space-y-0 py-2 sm:py-0">
                          <div className="flex space-x-2 items-center">
                            {getFlag(bet?.teams?.home?.name)}
                            <span>{bet?.teams?.home?.name}</span>
                          </div>
                          {isSmall && <span>-</span>}
                          <div className="flex space-x-2 items-center">
                            {!isSmall && getFlag(bet?.teams?.away?.name)}
                            <span>{bet?.teams?.away?.name}</span>
                            {isSmall && getFlag(bet?.teams?.away?.name)}
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
                    <td className="py-4 space-y-2 sm:space-y-0 sm:flex sm:space-x-4">
                      <div className="">
                        <div className="flex space-x-2">
                          {bet?.status?.long === "Match Finished" && (
                            <div className="flex items-center sm:space-x-2 space-x-1">
                              <div>FT</div>
                              <div>
                                {bet?.status?.long === "Match Finished"
                                  ? bet.score?.goals.home
                                  : "-"}
                              </div>
                              <div>:</div>
                              <div>
                                {bet?.status?.long === "Match Finished"
                                  ? bet.score?.goals.away
                                  : "-"}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      {bet?.status?.short === "PEN" && (
                        <div className="flex items-center sm:space-x-2 space-x-1">
                          <div>PEN</div>
                          <div className="w-10">
                            {bet?.score?.penalty?.home} :{" "}
                            {bet?.score?.penalty?.away}
                          </div>
                        </div>
                      )}
                      {bet?.status?.short === "AET" && (
                        <div className="flex items-center sm:space-x-2 space-x-1">
                          <div>ET</div>
                          <div className="w-10">
                            {Number(bet?.score?.goals?.home) +
                              Number(bet?.score?.extraTime?.home)}{" "}
                            :{" "}
                            {Number(bet?.score?.goals?.away) +
                              Number(bet?.score?.extraTime?.away)}
                          </div>
                        </div>
                      )}
                    </td>
                    <td>{bet.points}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </ContentContainer>
    </div>
  );
}
// bet.teams.home.name

export default UserView;
