import React from "react";
import { useNavigate } from "react-router-dom";
const LogoutButton = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };
  return (
    <button
      onClick={() => handleLogout()}
      className="bg-orange px-4 py-2 rounded-lg text-primary  cursor-pointer hover:bg-green transition-all duration-300 ease-in-out"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
