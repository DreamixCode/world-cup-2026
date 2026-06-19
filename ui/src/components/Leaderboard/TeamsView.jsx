import { Tooltip } from "react-tooltip";
import { useTeams } from "../../api";
import { useMedia } from "../../hooks";
import ContentContainer from "../ContentContainer";
import { SegmentedBorder } from "../SegmentedBorder";
import { BronzeMedal, GoldMedal, SilverMedal } from "../icons/index.jsx";
import { Modal } from "../Modal/Modal";
import Spinner from "../Spinner";
import { getQueryErrorMessage } from "../../utils.jsx";
import UserView from "./UserView";

function TeamMedal({ rank }) {
  if (rank === 1) return <GoldMedal className="h-6 w-6" />;
  if (rank === 2) return <SilverMedal className="h-6 w-6" />;
  if (rank === 3) return <BronzeMedal className="h-6 w-6" />;
  return null;
}

function MemberRow({ member, isSmall }) {
  const fullName = `${member.user.firstName} ${member.user.lastName}`;

  return (
    <tr className="border-b-4 border-dec-primary-light">
      <td className="py-1">
        <Modal
          title={fullName}
          trigger={
            <button
              type="button"
              className="flex items-center space-x-2 text-left cursor-pointer pl-2"
            >
              <img
                src={member.user.picture}
                alt={member.user.firstName}
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-tr-[10px] rounded-bl-[10px]"
              />
              <div
                className="truncate max-w-[20ch] sm:max-w-full"
                data-tip={fullName}
                data-for={`TeamMember-${member.user.id}`}
                data-place="top"
              >
                {fullName}
                {!isSmall && (
                  <Tooltip
                    id={`TeamMember-${member.user.id}`}
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
          <UserView userId={member.user.id} embedded />
        </Modal>
      </td>
      <td className="text-right pr-4">{member.totalPoints}</td>
    </tr>
  );
}

function TeamsView() {
  const isSmall = useMedia(useMedia.SMALL);
  const { teams = [], isLoading, isError, error } = useTeams();

  return (
    <div
      className="bg-black grow uppercase sm:text-dec-base text-dec-2xs"
      style={{
        backgroundImage: "url(/colors-top.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <ContentContainer
        className="py-4 grow justify-center select-none h-full"
        maxWidthClassName="max-w-4xl px-4"
      >
        {isLoading && (
          <div className="flex justify-center pt-28 items-center">
            <Spinner className="h-16 w-16" />
          </div>
        )}
        {!isLoading && isError && (
          <div className="text-center text-white font-bold px-4 py-8 sm:mt-24">
            {getQueryErrorMessage(error, "teams")}
          </div>
        )}
        {!isLoading && !isError && (
          <div className="sm:mt-24 space-y-8">
            <div className="sm:absolute sm:top-9 sm:left-0 flex justify-center sm:justify-start">
              <img
                src="/images/trio-mascots-2.jpg"
                alt="Teams"
                className="w-10/12 sm:w-[40%]"
              />
            </div>
            {isSmall && (
              <div className="text-center font-extrabold bg-transparent text-white text-dec-h3 pb-4 md:text-dec-t2 tracking-widest">
                <h1>Teams</h1>
              </div>
            )}
            <SegmentedBorder
              borderRadius="0.75rem"
              innerClassName="w-full bg-dec-primary"
            >
              <table className="bg-dec-primary w-full text-dec-background font-extrabold">
                <thead>
                  <tr className="border-b-4 border-dec-primary-light h-8">
                    <th className="text-left font-extrabold pl-2">Rank</th>
                    <th className="text-left font-extrabold">Team</th>
                    <th className="text-right font-extrabold pr-2">Points</th>
                  </tr>
                </thead>
                <tbody className="sm:text-dec-base text-dec-2xs">
                  {teams.map((team, index) => (
                    <tr
                      className="border-b-4 border-dec-primary-light"
                      key={team.mascot.file}
                    >
                      <td className="py-1 pl-2">
                        <div className="flex items-center space-x-2">
                          <span>{index + 1}</span>
                          <TeamMedal rank={index + 1} />
                        </div>
                      </td>
                      <td className="py-1">
                        <div className="flex items-center space-x-2">
                          <img
                            src={`${import.meta.env.BASE_URL}images/${team.mascot.file}`}
                            alt={team.name}
                            className="h-10 w-10 rounded-tr-[10px] rounded-bl-[10px] object-cover"
                          />
                          <span>{team.name}</span>
                        </div>
                      </td>
                      <td className="text-right pr-4">{team.totalPoints}</td>
                    </tr>
                  ))}
                  {!teams.length && (
                    <tr>
                      <td className="px-3 py-4 text-center" colSpan={3}>
                        No team standings available yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </SegmentedBorder>

            {teams.map((team, index) => (
              <div key={team.mascot.file} className="space-y-2">
                <div className="flex items-center space-x-3 text-white font-extrabold text-dec-h4 sm:text-dec-h3">
                  <span>{index + 1}.</span>
                  <img
                    src={`${import.meta.env.BASE_URL}images/${team.mascot.file}`}
                    alt={team.name}
                    className="h-12 w-12 rounded-tr-[10px] rounded-bl-[10px] object-cover"
                  />
                  <span>
                    Team {team.name} — {team.totalPoints} pts
                  </span>
                  <TeamMedal rank={index + 1} />
                </div>
                <SegmentedBorder
                  borderRadius="0.75rem"
                  innerClassName="w-full bg-dec-primary"
                >
                  <table className="bg-dec-primary w-full text-dec-background font-extrabold">
                    <thead>
                      <tr className="border-b-4 border-dec-primary-light h-8">
                        <th className="text-left font-extrabold pl-2">Name</th>
                        <th className="text-right font-extrabold pr-2">
                          Points
                        </th>
                      </tr>
                    </thead>
                    <tbody className="sm:text-dec-base text-dec-2xs">
                      {team.members.map((member) => (
                        <MemberRow
                          key={member.user.id}
                          member={member}
                          isSmall={isSmall}
                        />
                      ))}
                      {!team.members.length && (
                        <tr>
                          <td className="px-3 py-4 text-center" colSpan={2}>
                            No members yet.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </SegmentedBorder>
              </div>
            ))}
          </div>
        )}
      </ContentContainer>
    </div>
  );
}

export default TeamsView;
