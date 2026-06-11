import classNames from "classnames";
import { Loading } from "./icons/index.jsx";

function BtnLoader({ className }) {
  return (
    <span
      className={classNames(
        "absolute inset-0 flex items-center justify-center bg-inherit",
        { color: "primary" }
      )}
    >
      <Loading className={classNames("shrink-0 animate-spin", className)} />
    </span>
  );
}

export default BtnLoader;
