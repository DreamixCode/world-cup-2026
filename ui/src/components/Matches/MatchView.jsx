import classNames from "classnames";
import { isAfter } from "date-fns";
import { Link, useParams } from "react-router-dom";
import { useBets, useMatchById } from "../../api";
import { useMedia } from "../../hooks";
import ContentContainer from "../ContentContainer";
import { ChevronLeft } from "../icons/index.jsx";
import Spinner from "../Spinner";
import { getQueryErrorMessage } from "../../utils.jsx";
import Match from "./Match";

function MatchView({ matchId, embedded = false }) {
  const params = useParams();
  const id = matchId ?? params?.id;
  const numericMatchId = Number(id);
  const { match, isLoading, isError, error } = useMatchById(numericMatchId);

  const isSmall = useMedia(useMedia.SMALL);
  const today = new Date();
  const { bets = [], isLoadingBets, isError: isBetsError, error: betsError } = useBets({
    matchId: numericMatchId,
  });

  const shownBets = bets.filter((bet) => bet?.bet);

  return (
    <div className="bg-black grow uppercase">
      {!embedded && isSmall && (
        <div className="absolute top-50 left-0 w-[25%] h-[25%]">
          <img
            src="/images/trio-mascots-2.jpg"
            alt="Leaderboard"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <ContentContainer
        maxWidthClassName="max-w-4xl"
        className={classNames(
          "py-4 grow justify-center select-none h-full",
          embedded && "mt-0",
        )}
      >
        {!embedded && (
          <div className="flex justify-between mt-20 bg-black text-dec-background">
            <Link to="/matches" className="text-dec-background">
              <div className="flex items-center">
                <ChevronLeft className="w-8 h-8" />
                <span>Back to all matches</span>
              </div>
            </Link>
          </div>
        )}
        {!isLoading && isError && (
          <div className="flex justify-center text-dec-background text-dec-h3 py-8 text-center px-4">
            {getQueryErrorMessage(error, "this match")}
          </div>
        )}
        {!isLoading && !isError && (
          <div className="flex flex-col space-y-8 sm:space-y-0">
            {!match && (
              <div className="flex justify-center text-dec-background text-dec-h3 py-8">
                Match is not available.
              </div>
            )}
            {match && (
              <div className="h-full pb-2 sm:pb-4">
                <Match
                  hostTeam={match?.teams?.home?.name}
                  guestTeam={match?.teams?.away?.name}
                  date={match?.date}
                  id={match?.id}
                  isLink={!embedded}
                  disableInteraction={embedded}
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
            )}
            {isLoadingBets && (
              <div className="flex justify-center items-center">
                <Spinner className="h-16 w-16" />
              </div>
            )}
            {!isLoadingBets && isBetsError && (
              <div className="text-center text-dec-background font-bold px-4 py-8">
                {getQueryErrorMessage(betsError, "bets")}
              </div>
            )}
            {!isLoadingBets && !isBetsError && match && isAfter(today, new Date(match?.date)) ? (
              <table className="bg-dec-primary w-full text-dec-background font-extrabold">
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
                    return (
                      <tr
                        className=" border-b-4 border-black bg-white text-black rounded-md"
                        key={bet.user.email}
                      >
                        <td className="pl-2 bg-white text-black">
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
                  {!shownBets?.length && (
                    <tr className="border-b-4 border-black bg-white text-black rounded-md">
                      <td className="px-2 py-4" colSpan={3}>
                        No bets placed yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            ) : (
              !isLoadingBets &&
              !isBetsError &&
              match && (
                <div className="flex flex-col justify-center text-center text-dec-background text-dec-h3 space-y-4">
                  <p>You'll see all the bets when the match starts!</p>
                  <img
                    src="/images/trio-mascots.jpg"
                    alt="Match start"
                    className="w-1/2 mx-auto"
                  />
                </div>
              )
            )}
          </div>
        )}
      </ContentContainer>
    </div>
  );
}

export default MatchView;
