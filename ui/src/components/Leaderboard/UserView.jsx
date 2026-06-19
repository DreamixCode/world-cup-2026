import { useMemo } from "react";
import { isAfter } from "date-fns";
import { Link, useParams } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { usePlayerById, useStandings } from "../../api";
import { useMedia } from "../../hooks";
import ContentContainer from "../ContentContainer";

import { buildMascotByUserId, getMascotForUser } from "../../userMascots";
import { getFlag, getQueryErrorMessage } from "../../utils.jsx";
import Spinner from "../Spinner";

function isMatchStartedOrFinished(match, now = new Date()) {
  if (!match) return false;

  if (match?.status?.long === "Match Finished") return true;

  const matchDate = match?.date ? new Date(match.date) : null;
  if (matchDate && isAfter(now, matchDate)) return true;

  if (match?.status?.long === "Not Started" || match?.status?.short === "NS")
    return false;

  return true;
}

function UserView({ userId, embedded = false }) {
  const params = useParams();
  const id = userId ?? params?.id;
  const { player, isLoading, isError, error } = usePlayerById(id);
  const { standings = [] } = useStandings();

  const isSmall = useMedia(useMedia.SMALL);
  const user = player?.user;
  const mascotByUserId = useMemo(
    () => buildMascotByUserId(standings),
    [standings],
  );

  const today = new Date();

  const shownBets = (player?.bets ?? [])
    .filter((bet) => bet?.bet && isMatchStartedOrFinished(bet?.match, today))
    .sort(
      (a, b) =>
        new Date(a?.match?.date).getTime() - new Date(b?.match?.date).getTime(),
    );

  const mascot = getMascotForUser(user?.id, mascotByUserId);

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
        {!embedded && (
          <Link to="/standings" className="text-dec-background">
            <div className="flex items-end justify-end sm:pl-6 pb-2 sm:pb-0">
              <span>Back to standings</span>
            </div>
          </Link>
        )}

        <div className="flex flex-col xl:justify-between sm:p-8 items-center space-y-8">
          {user && (
            <div className="flex md:flex-row flex-col space-y-4 md:space-y-0 pt-8 items-center space-x-8">
              {isSmall && mascot && (
                <div className="absolute top-0 left-0">
                  <img
                    src={`${import.meta.env.BASE_URL}images/${mascot.file}`}
                    alt={mascot.alt}
                    className="h-[200px] w-auto flex shrink-0"
                  />
                </div>
              )}
              <div className="flex justify-between space-x-4">
                <img
                  src={user?.picture}
                  alt={user?.firstName}
                  referrerPolicy="no-referrer"
                  className="rounded-tr-[10px] rounded-bl-[10px] w-24 h-24"
                />
                <div className="flex sm:items-center flex-col justify-center items-start text-dec-base md:text-dec-h2 font-bold">
                  <div className="flex flex-col sm:flex-row space-x-2">
                    <div className="pl-2">{user?.firstName}</div>
                    <div>{user?.lastName}</div>
                  </div>
                  <div className="items-center pl-2 sm:justify-center flex justify-start">
                    {player?.totalPoints ?? 0} Points
                  </div>
                </div>
              </div>
            </div>
          )}
          {isLoading && (
            <div className="flex justify-center py-8 items-center">
              <Spinner className="h-16 w-16" />
            </div>
          )}
          {!isLoading && isError && (
            <p className="text-center text-dec-background font-bold px-4 py-8">
              {getQueryErrorMessage(error, "this user")}
            </p>
          )}
          {!isLoading && !isError && shownBets?.length ? (
            <table className="bg-dec-primary w-full text-dec-background font-extrabold rounded-md">
              <thead>
                <tr className="border-b-4 border-dec-primary-light h-16 text-dec-h4 bg-white text-black rounded-md">
                  <th className="text-left font-extrabold px-2">Match</th>
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
                {shownBets.map((bet) => {
                  const match = bet?.match;

                  return (
                    <tr
                      className=" border-b-4 border-dec-primary-light"
                      key={bet?.matchId}
                    >
                      <td className="pl-2">
                        <Link to={`/matches/${bet?.matchId}`}>
                          <div className="flex sm:space-x-2 items-start sm:items-center sm:flex-row flex-col space-y-2 sm:space-y-0 py-2 sm:py-0">
                            <div className="flex space-x-2 items-center">
                              {getFlag(match?.teams?.home?.name)}
                              <span>{match?.teams?.home?.name}</span>
                            </div>
                            {isSmall && <span>-</span>}
                            <div className="flex space-x-2 items-center">
                              {!isSmall && getFlag(match?.teams?.away?.name)}
                              <span>{match?.teams?.away?.name}</span>
                              {isSmall && getFlag(match?.teams?.away?.name)}
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
                            {match?.status?.long === "Match Finished" && (
                              <div className="flex items-center sm:space-x-2 space-x-1">
                                <div>FT</div>
                                <div>
                                  {match?.status?.long === "Match Finished"
                                    ? match?.score?.goals?.home
                                    : "-"}
                                </div>
                                <div>:</div>
                                <div>
                                  {match?.status?.long === "Match Finished"
                                    ? match?.score?.goals?.away
                                    : "-"}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        {match?.status?.short === "PEN" && (
                          <div className="flex items-center sm:space-x-2 space-x-1">
                            <div>PEN</div>
                            <div className="w-10">
                              {match?.score?.penalty?.home} :{" "}
                              {match?.score?.penalty?.away}
                            </div>
                          </div>
                        )}
                        {match?.status?.short === "AET" && (
                          <div className="flex items-center sm:space-x-2 space-x-1">
                            <div>ET</div>
                            <div className="w-10">
                              {Number(match?.score?.goals?.home) +
                                Number(match?.score?.extraTime?.home)}{" "}
                              :{" "}
                              {Number(match?.score?.goals?.away) +
                                Number(match?.score?.extraTime?.away)}
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
          ) : !isLoading && !isError ? (
            <p className="text-center text-dec-background font-bold px-4 py-8">
              This user has bet for matches that haven&apos;t already started.
            </p>
          ) : null}
        </div>
      </ContentContainer>
    </div>
  );
}

export default UserView;
