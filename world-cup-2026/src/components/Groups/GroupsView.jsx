import Group from "./Group";
import ContentContainer from "../ContentContainer";
import Spinner from "../Spinner";
import { useMedia } from "../../hooks";
import { mockedGroups } from "../../const";
import { GroupDetails } from "./GroupDetails";
import { Modal } from "../Modal/Modal";

function GroupsView() {
  const isLarge = useMedia(useMedia.LARGE);
  // const isXLarge = useMedia(useMedia.XLARGE);

  // const { groups, isLoading } = useGroups() ?? { groups: [], isLoading: false };

  const groups = mockedGroups;
  const isLoading = false;

  groups?.sort((a, b) => a.group?.localeCompare(b.group));

  const groupsWC = groups?.map((group) => {
    const groupId = group?.group?.slice(-1)?.toLowerCase();
    return (
      <li className="w-auto" key={group.group}>
        <Modal
          title={group.group}
          trigger={
            <button type="button" className="w-full text-left cursor-pointer">
              <Group number={group.group} singleGroup={group.teams} />
            </button>
          }
          contentClassName="bg-dec-primary border-0 w-screen sm:max-w-5xl lg:max-w-6xl xl:max-w-7xl max-h-[92vh]"
        >
          <GroupDetails id={groupId} showBackLink={false} />
        </Modal>
      </li>
    );
  });

  return (
    <div className="bg-dec-primary grow">
      {isLoading && (
        <div className="flex justify-center items-center">
          <Spinner className="h-16 w-16" />
        </div>
      )}
      <ContentContainer
        className="py-12 h-full justify-center select-none flex"
        maxWidthClassName="max-w-full"
      >
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-3 px-8 justify-center w-full">
          {groupsWC}
        </ul>
      </ContentContainer>
    </div>
  );
}

export default GroupsView;
