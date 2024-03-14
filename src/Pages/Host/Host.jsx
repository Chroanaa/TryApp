import React from "react";
import { NavLink, Outlet } from "react-router-dom";
function Host() {
  return (
    <div className="flex flex-row justify-between bg-main p-4">
      <nav>
        <NavLink to="dashboard">Dashboard</NavLink>
        <NavLink to="income">Income</NavLink>
        <NavLink>Vans</NavLink>
        <NavLink>Reviews</NavLink>
        <Outlet />
      </nav>
    </div>
  );
}

export default Host;
