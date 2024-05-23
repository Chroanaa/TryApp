import React from "react";
import LoginButton from "./ui/LoginButton";
import LogoutButton from "./ui/LogoutButton";

function LoginHandler() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true" ? true : false);
  }, []);

  return <div>{isLoggedIn ? <LogoutButton /> : <LoginButton />}</div>;
}

export default LoginHandler;
