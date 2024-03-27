import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";

function HostVansLayout() {
  const currentLink = ({ isActive }) => {
    return {
      color: isActive ? "red" : "",
    };
  };
  const abort = new AbortController();
  const params = useParams();
  const [vans, setVans] = React.useState(null);
  const fetchData = async () => {
    const data = await useFetchData(`/api/vans/${params.id}`, abort.signal);
    setVans(data.vans);
  };
  React.useEffect(() => {
    fetchData();
    return () => {
      console.log("cleaning up");
      abort.abort();
    };
  }, []);
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
      <Outlet context={[vans, setVans]} />
    </nav>
  );
}
export default HostVansLayout;
