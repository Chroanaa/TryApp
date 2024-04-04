import React from "react";
import { Outlet, NavLink, useLoaderData } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
export function loader() {
  const data = useFetchData("/api/vans");
  return data;
}
function HostLayout() {
  const { vans } = useLoaderData();

  const currentLink = ({ isActive }) => {
    return {
      color: isActive ? "red" : "",
    };
  };
  return (
    <div>
      <nav className="flex flex-row gap-4 font-semiBold p-10 bg-main">
        <NavLink
          to="."
          end
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
      </nav>
      <Outlet context={[vans]} />
      {/* passing the data to the child component */}
    </div>
  );
}

export default HostLayout;
