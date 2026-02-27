import { Link } from "react-router-dom";
import Group from "./Group";
import { useGroups } from "../../api";
import ContentContainer from "../ContentContainer";
import Spinner from "../Spinner";
import { useMedia } from "../../hooks";

function GroupsView() {
  const isLarge = useMedia(useMedia.LARGE);
  // const isXLarge = useMedia(useMedia.XLARGE);

  const { groups, isLoading } = useGroups() ?? { groups: [], isLoading: false };

  console.log(groups)

  groups?.sort((a, b) => a.group?.localeCompare(b.group));

  const groupsWC = groups?.map((group) => (
    <Link to={`/groups/${group?.group?.slice(-1)?.toLowerCase()}`}>
      <li className="w-auto" key={group.group}>
        <Group number={group.group} singleGroup={group.teams} />
      </li>
    </Link>
  ));

  return (
    <div className="bg-dec-theme grow">
      {isLoading && (
        <div className="flex justify-center items-center">
          <Spinner className="h-16 w-16" />
        </div>
      )}
      <ContentContainer
        className="py-12 h-full justify-center select-none flex"
        maxWidthClassName="max-w-full"
      >
        {isLarge && (
          <div>
            <img
              src={import.meta.env.PUBLIC_URL + "/logo.jpg"}
              alt="groups"
              className="w-full"
            />
          </div>
        )}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-3 px-8 justify-center w-full">
          {groupsWC}
        </ul>
      </ContentContainer>
    </div>
  );
}

export default GroupsView;
