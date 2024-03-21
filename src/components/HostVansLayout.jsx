import React from "react";
import { NavLink, Outlet } from "react-router-dom";
function HostVansLayout() {
  const currentLink = ({ isActive }) => {
    return {
      color: isActive ? "red" : "",
    };
  };
  return (
    <div>
      <nav className="flex gap-10 bg-main p-4 ">
        <NavLink
          to="details"
          style={currentLink}
          className="underline decoration-white transition-colors duration-500 hover:decoration-blue underline-offset-4 decoration-2"
        >
          Details
        </NavLink>
        <NavLink
          to="/about"
          className="underline decoration-white transition-colors duration-500 hover:decoration-blue underline-offset-4 decoration-2"
          style={currentLink}
        >
          Pricing
        </NavLink>
        <NavLink
          to="/vans"
          style={currentLink}
          className="underline decoration-white transition-colors duration-500 hover:decoration-blue underline-offset-4 decoration-2"
        >
          Photos
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
export default HostVansLayout;
