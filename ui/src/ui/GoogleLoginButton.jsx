import { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin, googleLogout } from "@react-oauth/google";

import { getToken } from "../api/queries";

function decodeJwt(token) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}

function GoogleLoginBtn() {
  const [profile, setProfile] = useState(() => {
    try {
      const stored = localStorage.getItem("user_profile");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const token = getToken();
  const isAuthenticated = Boolean(token);

  const handleLogout = () => {
    try {
      googleLogout();
    } catch {
      // ignore
    }
    localStorage.removeItem("id_token");
    localStorage.removeItem("user_profile");
    setProfile(null);
    window.location.reload();
  };

  if (isAuthenticated && profile) {
    return (
      <div className="flex space-x-2 items-center">
        <Link to={`/user/${profile.id}`}>
          <img
            src={profile.picture}
            alt={profile.name}
            referrerPolicy="no-referrer"
            className="w-10 h-10 rounded-full"
          />
        </Link>
        <button
          type="button"
          className="rounded bg-gray-800 px-3 py-1 text-sm text-white"
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    );
  }

  if (isAuthenticated) {
    return (
      <button
        type="button"
        className="rounded bg-gray-800 px-3 py-1 text-sm text-white"
        onClick={handleLogout}
      >
        Log out
      </button>
    );
  }

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const credential = credentialResponse.credential;
        if (!credential) return;

        const payload = decodeJwt(credential);
        const nextProfile =
          payload && {
            id: payload.sub,
            name: payload.name,
            picture: payload.picture,
          };

        try {
          localStorage.setItem("id_token", credential);
          if (nextProfile) {
            localStorage.setItem("user_profile", JSON.stringify(nextProfile));
            setProfile(nextProfile);
          }
        } catch {
          // ignore storage errors
        }

        // Ensure the rest of the app picks up the new auth state
        window.location.reload();
      }}
      onError={() => {
        // you can add toast/notification here
      }}
    />
  );
}

export default GoogleLoginBtn;
