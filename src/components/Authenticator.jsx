import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Authenticator() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const currentUrl = window.location.pathname;
  if (!isLoggedIn) {
    return (
      <Navigate
        to='/login'
        state={{ message: "You need to login first", prevUrl: currentUrl }}
        replace
      />
    );
  }
  return <Outlet />;
}

export default Authenticator;
