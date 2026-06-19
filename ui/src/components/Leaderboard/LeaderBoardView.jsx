import { Tooltip } from "react-tooltip";
import { useStandings } from "../../api";
import { useMedia } from "../../hooks";
import ContentContainer from "../ContentContainer";
import { SegmentedBorder } from "../SegmentedBorder";
import { BronzeMedal, GoldMedal, SilverMedal } from "../icons/index.jsx";
import { Modal } from "../Modal/Modal";
import Spinner from "../Spinner";
import { getQueryErrorMessage } from "../../utils.jsx";
import UserView from "./UserView";

function LeaderBoardView({ frontPage }) {
  const isSmall = useMedia(useMedia.SMALL);

  const { standings = [], isLoading, isError, error } = useStandings();

  const leadersView = [...standings];

  leadersView?.sort((a, b) => {
    return (
      b.totalPoints - a.totalPoints ||
      a.user.firstName.localeCompare(b.user.firstName)
    );
  });

  const rankedLeaders = [];
  for (let index = 0; index < leadersView.length; index++) {
    const leader = leadersView[index];
    const rank =
      index === 0 || leader.totalPoints !== leadersView[index - 1].totalPoints
        ? index + 1
        : rankedLeaders[index - 1].rank;
    rankedLeaders.push({ ...leader, rank });
  }

  const displayedLeaders = frontPage
    ? rankedLeaders.filter((leader) => leader.rank <= 5)
    : rankedLeaders;

  return (
    <div
      className="bg-black grow uppercase sm:text-dec-base text-dec-2xs"
      style={{
        backgroundImage: !frontPage && "url(/colors-top.png)",
        backgroundRepeat: !frontPage && "no-repeat",
        backgroundSize: !frontPage && "contain",
      }}
    >
      <ContentContainer
        className="py-4 grow justify-center select-none h-full"
        maxWidthClassName="max-w-4xl px-4"
      >
        {isLoading && (
          <div
            className={
              frontPage
                ? "flex justify-center py-8 items-center"
                : "flex justify-center pt-28 items-center"
            }
          >
            <Spinner className="h-16 w-16" />
          </div>
        )}
        {!isLoading && isError && (
          <div
            className={
              frontPage
                ? "text-center text-white font-bold px-4 py-8"
                : "text-center text-white font-bold px-4 py-8 sm:mt-24"
            }
          >
            {getQueryErrorMessage(error, "standings")}
          </div>
        )}
        {!isLoading && !isError && (
          <div className={!frontPage ? "sm:mt-24" : undefined}>
            {!frontPage && (
              <div className="sm:absolute sm:top-9 sm:left-0 flex justify-center sm:justify-start">
                <img
                  src="/images/trio-mascots-2.jpg"
                  alt="Leaderboard"
                  className="w-10/12 sm:w-[40%]"
                />
              </div>
            )}
            {isSmall && (
              <div className="text-center font-extrabold bg-transparent text-white text-dec-h3 pb-4 md:text-dec-t2 tracking-widest">
                <h1>Leaderboard</h1>
              </div>
            )}
            <SegmentedBorder
              borderRadius="0.75rem"
              innerClassName="w-full bg-dec-primary"
            >
              <table className="bg-dec-primary w-full text-dec-background font-extrabold">
                <thead>
                  <tr className="border-b-4 border-dec-primary-light h-8">
                    <th className="text-left font-extrabold"></th>
                    <th className="text-left font-extrabold">Name</th>
                    <th className="text-right font-extrabold pr-2">Points</th>
                  </tr>
                </thead>
                <tbody className="sm:text-dec-base text-dec-2xs">
                  {displayedLeaders?.map((leader) => {
                    return (
                      <tr
                        className="border-b-4 border-dec-primary-light"
                        key={leader.user.id}
                      >
                        <td className="py-1">
                          <div className="flex items-center space-x-2 pl-2">
                            <span>{leader.rank}</span>
                            {leader.rank === 1 ? (
                              <GoldMedal className="h-6 w-6" />
                            ) : leader.rank === 2 ? (
                              <SilverMedal className="h-6 w-6" />
                            ) : leader.rank === 3 ? (
                              <BronzeMedal className="h-6 w-6" />
                            ) : null}
                          </div>
                        </td>

                        <td className="py-1">
                          <Modal
                            title={`${leader.user.firstName} ${leader.user.lastName}`}
                            trigger={
                              <button
                                type="button"
                                className="flex items-center space-x-2 text-left cursor-pointer"
                              >
                                <img
                                  src={leader?.user?.picture}
                                  alt={leader.user.firstName}
                                  referrerPolicy="no-referrer"
                                  className="w-8 h-8 rounded-tr-[10px] rounded-bl-[10px]"
                                />
                                <div
                                  className="truncate max-w-[20ch] sm:max-w-full"
                                  data-tip={`${leader.user.firstName} ${leader.user.lastName}`}
                                  data-for="User"
                                  data-place="top"
                                >
                                  {leader.user.firstName} {leader.user.lastName}
                                  {!isSmall && (
                                    <Tooltip
                                      id="User"
                                      textColor="dec-primary"
                                      backgroundColor="white"
                                    />
                                  )}
                                </div>
                              </button>
                            }
                            contentClassName="w-screen sm:max-w-5xl lg:max-w-6xl xl:max-w-7xl"
                            closeButtonClassName="text-white sm:text-white hover:text-white/90 sm:hover:text-white/90"
                            overlayClassName="bg-white/20 supports-backdrop-filter:backdrop-blur-md"
                          >
                            <UserView userId={leader?.user?.id} embedded />
                          </Modal>
                        </td>

                        <td className="text-right pr-4">
                          {leader.totalPoints}
                        </td>
                      </tr>
                    );
                  })}
                  {!displayedLeaders?.length && (
                    <tr>
                      <td className="px-3 py-4 text-center" colSpan={3}>
                        No standings available yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </SegmentedBorder>
          </div>
        )}
      </ContentContainer>
    </div>
  );
}

export default LeaderBoardView;
