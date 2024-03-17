import React from "react";
import Host from "../Pages/Host/Host";
import { Outlet } from "react-router-dom";
function HostLayout() {
  return (
    <div>
      <Host />
      <Outlet />
    </div>
  );
}

export default HostLayout;
