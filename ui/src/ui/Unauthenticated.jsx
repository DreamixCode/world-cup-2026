import React from "react";
import { ContentContainer } from "../components";
import GoogleLoginBtn from "./GoogleLoginButton";

function Unauthenticated() {
  return (
    <div className="">
      <ContentContainer className="flex h-screen items-center justify-center bg-dwc-background select-none">
        <div className="flex flex-col">
          <EuroLogo className="w-60" />
          <GoogleLoginBtn />
        </div>
      </ContentContainer>
    </div>
  );
}

export default Unauthenticated;
