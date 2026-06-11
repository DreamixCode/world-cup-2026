import { useState } from "react";
import { useGoogleOneTapLogin } from "@react-oauth/google";
import { ContentContainer } from "../components";
import { LogoWhite as EuroLogo } from "../components/icons/index.jsx";
import GoogleLoginBtn from "./GoogleLoginButton";
import { parseJwtPayload } from "../api/queries";

function handleOneTapCredential(credential) {
  if (!credential) return;
  try {
    const payload = parseJwtPayload(credential);
    localStorage.setItem("id_token", credential);
    const profile = { id: payload.sub, name: payload.name, picture: payload.picture };
    localStorage.setItem("user_profile", JSON.stringify(profile));
  } catch {
    return;
  }
  window.location.reload();
}

function Unauthenticated() {
  const [sessionExpired] = useState(() => {
    const expired = sessionStorage.getItem("session_expired") === "1";
    if (expired) sessionStorage.removeItem("session_expired");
    return expired;
  });

  useGoogleOneTapLogin({
    onSuccess: (credentialResponse) => handleOneTapCredential(credentialResponse.credential),
    onError: () => {},
    auto_select: true,
  });

  return (
    <div className="">
      <ContentContainer className="flex h-screen items-center justify-center bg-dwc-background select-none">
        <div className="flex flex-col items-center gap-3">
          <EuroLogo className="w-60" />
          {sessionExpired && (
            <p className="text-sm text-amber-400 text-center">
              Your session has expired. Please log in again.
            </p>
          )}
          <GoogleLoginBtn />
        </div>
      </ContentContainer>
    </div>
  );
}

export default Unauthenticated;
