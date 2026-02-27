import { Tooltip } from "react-tooltip";
import { useStandings } from "../../api";
import { useMedia } from "../../hooks";
import ContentContainer from "../ContentContainer";
import Spinner from "../Spinner";
import { BronzeMedal, GoldMedal, SilverMedal } from "../icons/index.jsx";
import { Link } from "react-router-dom";
import { standings } from "../../const.js";

function LeaderBoardView({ frontPage }) {
  const isSmall = useMedia(useMedia.SMALL);

  // const { standings, isLoading } = useStandings();
  // const standings = standingss
  const isLoading = false;

  const leadersView = standings;

  leadersView?.sort((a, b) => {
    return (
      b.totalPoints - a.totalPoints ||
      a.user.firstName.localeCompare(b.user.firstName)
    );
  });

  return (
    <div
      className="bg-dec-theme grow uppercase sm:text-dec-base text-dec-2xs"
      style={{
        backgroundImage: !frontPage && "url(/public/colors-top.png)",
        backgroundRepeat: !frontPage && "no-repeat",
        backgroundSize: !frontPage && "contain",
      }}
    >
      <ContentContainer
        className="py-4 grow justify-center select-none h-full"
        maxWidthClassName="max-w-4xl px-4"
      >
        {isLoading && !frontPage && (
          <div className="flex justify-center pt-28 items-center">
            <Spinner className="h-16 w-16" />
          </div>
        )}
        {!isLoading && (
          <div className={!frontPage ? "sm:mt-24 mt-10" : undefined}>
            <div className="text-center font-extrabold bg-transparent text-dec-theme-darkBlue text-dec-h3 pb-4 md:text-dec-t2">
              <h1>Leaderboard</h1>
            </div>
            <table className="bg-dec-theme w-full text-dec-background font-extrabold">
              <thead>
                <tr className="border-b-4 border-dec-theme-light h-16">
                  <th className="text-left font-extrabold"></th>
                  <th className="text-left font-extrabold">Name</th>
                  <th className="text-left font-extrabold pr-2">Points</th>
                </tr>
              </thead>
              <tbody className="sm:text-dec-base text-dec-2xs">
                {leadersView?.map((leader, index) => {
                  return (
                    <tr
                      className="border-b-4 border-dec-theme-light"
                      key={leader.user.id}
                    >
                      <td className="py-1">
                        <div className="flex items-center space-x-2 pl-2">
                          <span>{index + 1}</span>
                          {index + 1 === 1 ? (
                            <GoldMedal className="h-6 w-6" />
                          ) : index + 1 === 2 ? (
                            <SilverMedal className="h-6 w-6" />
                          ) : index + 1 === 3 ? (
                            <BronzeMedal className="h-6 w-6" />
                          ) : null}
                        </div>
                      </td>

                      <td className="py-1">
                        <Link to={`/user/${leader?.user?.id}`}>
                          <div className="flex items-center space-x-2">
                            <img
                              src={leader?.user?.picture}
                              alt={leader.user.firstName}
                              referrerPolicy="no-referrer"
                              className="rounded-full w-12 h-12"
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
                                  textColor="dec-theme"
                                  backgroundColor="white"
                                />
                              )}
                            </div>
                          </div>
                        </Link>
                      </td>

                      <td className="text-right pr-4">{leader.totalPoints}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </ContentContainer>
    </div>
  );
}

export default LeaderBoardView;
