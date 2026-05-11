import classNames from "classnames";
import React from "react";

import Spinner from "./Spinner";

export default function LoadingOverlay({
  isLoading,
  children,
  loaderClassName,
  ...props
}) {
  return (
    <div {...props}>
      <div className="relative h-full w-full">
        {children}
        {isLoading && (
          <div
            className={classNames(
              "flex justify-center absolute inset-0 pt-10 bg-opacity-50",
              loaderClassName
            )}
          >
            <Spinner className="h-16 w-16" />
          </div>
        )}
      </div>
    </div>
  );
}

LoadingOverlay.defaultProps = {
  loaderClassName: "bg-white",
};
