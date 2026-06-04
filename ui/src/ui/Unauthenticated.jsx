import React from "react";
import { ContentContainer } from "../components";
import { LogoWhite } from "@/components/icons";
import GoogleLoginBtn from "./GoogleLoginButton";

function Unauthenticated() {
  return (
    <div className="">
      <ContentContainer className="flex h-screen items-center justify-center bg-dec-background select-none">
        <div className="flex flex-col">
          <LogoWhite className="w-60" />
          <GoogleLoginBtn />
        </div>
      </ContentContainer>
    </div>
  );
}

export default Unauthenticated;
