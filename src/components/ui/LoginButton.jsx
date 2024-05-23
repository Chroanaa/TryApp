import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
const LoginButton = () => {
  return (
    <NavLink
      to="/login"
      className="underline decoration-white transition-colors duration-500 hover:decoration-blue underline-offset-4 decoration-2"
    >
      Login
    </NavLink>
  );
};

export default LoginButton;
