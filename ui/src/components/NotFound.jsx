import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex bg-dec-primary-middleBlue text-dec-background text-dec-h3 h-full items-center justify-center">
      <div className="flex flex-col">
        <div>Sorry... nothing here.</div>
        <Link to="/" className="font-semibold">
          Go to front page
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
