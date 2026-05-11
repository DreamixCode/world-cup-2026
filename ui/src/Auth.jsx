import { useState, useEffect } from "react";

function useAuth() {
  const [profile, setProfile] = useState();
  const [token, setToken] = useState();

  const clientId =
    "827051116065-6hjejha88n87flhkcks03sm7sa75o78e.apps.googleusercontent.com";

  useEffect(() => {
    if (token) {
      if (window.location.hash !== "#home") {
        window.location.hash = "home";
        window.location.reload();
      }
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const onSuccess = (res) => {
    setProfile(res?.profileObj);
    setToken(res?.tokenId);
  };

  const onFailure = (err) => {
    console.log("failed:", err);
  };

  const logOut = () => {
    setProfile(null);
    setToken(null);
    window.location.hash = "";
    window.location.reload();
  };

  return { profile, token, clientId, onSuccess, onFailure, logOut };
}

export default useAuth;
