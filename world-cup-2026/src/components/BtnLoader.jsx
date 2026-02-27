import classNames from "classnames";
import { Loading } from "./icons/index.jsx";

function BtnLoader() {
  return (
    <span
      className={classNames(
        "absolute inset-1 flex items-center justify-center bg-inherit",
        { color: "primary" }
      )}
    >
      <Loading className={classNames("animate-spin")} />
    </span>
  );
}

export default BtnLoader;
