import React from "react";
import { NavLink } from "react-router-dom";
function ErrorPage() {
  return (
    <div className=" bg-main grid place-items-center pb-[40rem] ">
      <div className="mt-[10rem]">
        <h1 className="text-large max-w-[400px]">
          Sorry the page you were looking for was not found.
        </h1>
        <NavLink
          className="bg-black text-[1.5rem] text-primary py-2 px-24 rounded hover:opacity-50"
          to={"/"}
        >
          Return to Home
        </NavLink>
      </div>
    </div>
  );
}

export default ErrorPage;
