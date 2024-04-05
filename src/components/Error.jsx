import React from "react";
import { NavLink } from "react-router-dom";
import { useRouteError } from "react-router-dom";
function Error() {
  const error = useRouteError();
  return (
    <div className="bg-main">
      <section className="flex flex-col justify-center">
        There was an Error that Occured in the Application
        <p> Info: {error.message}</p>
        <p> Status text: {error.statusText}</p>
        <p> Response Status: {error.status}</p>
        <NavLink to="/">Return to Home</NavLink>
      </section>
    </div>
  );
}

export default Error;
