import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Authenticator() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    return (
      <Navigate
        to='/login'
        state={{ message: "You need to login first" }}
        replace
      />
    );
  }
  return <Outlet />;
}

export default Authenticator;
