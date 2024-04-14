import React, { useContext } from "react";
import { Navigate, Outlet, redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
function Authenticator() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  if (!isAuthenticated) {
    return loginWithRedirect();
  }
  return <Outlet />;
}

export default Authenticator;
