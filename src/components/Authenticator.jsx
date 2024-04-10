import React from "react";
import { Navigate, Outlet } from "react-router-dom";
function Authenticator() {
  const isLoggedIn = false;
  if (isLoggedIn) {
    return <Outlet />;
  } else return <Navigate to="/login" />;
}

export default Authenticator;
