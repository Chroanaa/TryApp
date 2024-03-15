import React, { useEffect } from "react";
import { Routes, Route, NavLink, Outlet } from "react-router-dom";
function Host() {
  const currentLink = ({ isActive }) => {
    return {
      color: isActive ? "red" : "",
    };
  };
  return (
    <div>
      <div className="flex flex-row gap-4 font-semiBold p-10 bg-main">
        <NavLink
          to="dashboard"
          className="underline decoration-white transition-colors duration-500 hover:decoration-blue underline-offset-4 decoration-2"
          style={currentLink}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          className="underline decoration-white transition-colors duration-500 hover:decoration-blue underline-offset-4 decoration-2"
          style={currentLink}
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          className="underline decoration-white transition-colors duration-500 hover:decoration-blue underline-offset-4 decoration-2 "
          style={currentLink}
        >
          Vans
        </NavLink>
        <NavLink
          to="/host/reviews"
          className="underline decoration-white transition-colors duration-500 hover:decoration-blue underline-offset-4 decoration-2"
          style={currentLink}
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Host;
