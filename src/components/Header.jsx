import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  const currentLink = ({ isActive }) => {
    return {
      color: isActive ? "red" : "",
    };
  };
  return (
    <header>
      <nav className="flex flex-row justify-between bg-main p-4 ">
        <h1 className="self-center font-sans text-2xl font-bold">
          <NavLink to="/" style={currentLink}>
            #VANLIFE
          </NavLink>
        </h1>
        <div className="flex gap-10 m-4  ">
          <NavLink
            to="/about"
            className="underline decoration-white transition-colors duration-500 hover:decoration-blue underline-offset-4 decoration-2"
            style={currentLink}
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            style={currentLink}
            className="underline decoration-white transition-colors duration-500 hover:decoration-blue underline-offset-4 decoration-2"
          >
            Vans
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
