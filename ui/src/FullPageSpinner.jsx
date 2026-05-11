import React from "react";
import { Spinner } from "./components";

function FullPageSpinner() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Spinner className="h-16 w-16" />
    </div>
  );
}

export default FullPageSpinner;
