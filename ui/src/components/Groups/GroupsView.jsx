import { useGroups } from "../../api";
import { useMedia } from "../../hooks";
import ContentContainer from "../ContentContainer";
import { Modal } from "../Modal/Modal";
import Spinner from "../Spinner";
import { getQueryErrorMessage } from "../../utils.jsx";
import Group from "./Group";
import { GroupDetails } from "./GroupDetails";

function GroupsView() {
  const _isLarge = useMedia(useMedia.LARGE);
  // const isXLarge = useMedia(useMedia.XLARGE);

  const { groups = [], isLoading, isError, error } = useGroups();

  const sortedGroups = [...groups].sort((a, b) => a.group?.localeCompare(b.group));

  const groupsWC = sortedGroups?.map((group) => {
    const groupId = group?.group?.slice(-1)?.toLowerCase();
    return (
      <li className="w-auto" key={group.group}>
        <Modal
          title={group.group}
          trigger={
            <button type="button" className="w-full text-left cursor-pointer">
              <Group number={group.group} teams={group.teams} />
            </button>
          }
          contentClassName="bg-dec-primary border-0 w-screen sm:max-w-5xl lg:max-w-6xl xl:max-w-7xl"
        >
          <GroupDetails id={groupId} showBackLink={false} />
        </Modal>
      </li>
    );
  });

  return (
    <div className="bg-dec-primary grow">
      <ContentContainer className="py-4 grow select-none h-full" maxWidthClassName="max-w-full px-4">
        {isLoading && (
          <div className="flex justify-center pt-28 items-center">
            <Spinner className="h-16 w-16" />
          </div>
        )}
        {!isLoading && isError && (
          <div className="sm:mt-24 py-8 text-white font-bold text-center px-4">
            {getQueryErrorMessage(error, "groups")}
          </div>
        )}
        {!isLoading && !isError && (
          <div className="sm:mt-24 py-8">
            {groupsWC?.length ? (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-3 px-4 justify-center w-full">
                {groupsWC}
              </ul>
            ) : (
              <div className="text-white font-bold text-center">No group standings available yet.</div>
            )}
          </div>
        )}
      </ContentContainer>
    </div>
  );
}

export default GroupsView;
