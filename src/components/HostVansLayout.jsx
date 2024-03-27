import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
function HostVansLayout() {
  const currentLink = ({ isActive }) => {
    return {
      color: isActive ? "red" : "",
    };
  };

  return (
    <nav className="bg-White">
      <div className="flex gap-10 bg-White rounded mb-5">
        <NavLink
          to="."
          end
          style={currentLink}
          className="underline decoration-white transition-colors duration-500 hover:decoration-blue underline-offset-4 decoration-2"
        >
          Details
        </NavLink>
        <NavLink
          to="pricing"
          className="underline decoration-white transition-colors duration-500 hover:decoration-blue underline-offset-4 decoration-2"
          style={currentLink}
        >
          Pricing
        </NavLink>
        <NavLink
          to="photos"
          style={currentLink}
          className="underline decoration-white transition-colors duration-500 hover:decoration-blue underline-offset-4 decoration-2"
        >
          Photos
        </NavLink>
      </div>
      <Outlet />
    </nav>
  );
}
export default HostVansLayout;
