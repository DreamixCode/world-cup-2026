import React from "react";
import { DreamixLogoHorizontal } from "./icons/index.jsx";

function Footer() {
  return (
    <footer className="p-4 flex justify-end bg-dec-background">
      <div className="flex font-semibold items-center space-x-2">
        <span>Powered by:</span>
        <DreamixLogoHorizontal className="w-36" />
      </div>
    </footer>
  );
}

export default Footer;
