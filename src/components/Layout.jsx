import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
//layout component to wrap the header, footer and the outlet
//its an example of nested routing
//the outlet is used to render the child components of the layout
function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
