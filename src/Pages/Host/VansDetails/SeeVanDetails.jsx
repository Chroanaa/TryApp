import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
import { NavLink } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import HostVansLayout from "../../../components/HostVansLayout";

function HostVanDetails() {
  const params = useParams();
  const [vans, setVans] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await useFetchData(`/api/vans/${params.id}`);
    setVans(data.vans);
  };
  let typeColor = "";
  const setTypeColor = () => {
    if (vans?.type === "rugged") {
      return (typeColor = "#115E59");
    } else if (vans?.type === "compact") {
      return (typeColor = "blue");
    } else if (vans?.type === "luxury") {
      return (typeColor = "#161616");
    } else if (vans?.type === "simple") {
      return (typeColor = "#E17654");
    }
  };
  const styles = {
    backgroundColor: setTypeColor(),
  };
  return (
    <div className="bg-main">
      {/* this just says that this route is relative to the paths not the routes so that we can go back up a path not a route */}
      <NavLink
        to={".."}
        relative="path"
        className="flex flex-row underline decoration-white ml-12 max-w-[150px] transition-all hover:decoration-blue hover:scale-105 underline-offset-4 decoration-2 duration-500"
      >
        <FaArrowLeftLong className="self-center transition-all mr-2" />
        Back to vans
      </NavLink>
      <div className="bg-main flex flex-col justify-center place-items-center pb-[15rem] ">
        <div className="flex flex-col  mt-10 p-10  max-w-[500px] bg-White rounded ">
          <div className="flex flex-row gap-2">
            <img
              src={vans?.imageUrl}
              className="mb-5"
              width={200}
              alt={vans?.name}
            />
            <p className="mt-5">
              <span
                className="max-w-20 px-2 py-1 rounded text-[#FFCC8D] font-semiBold mt-5 mb-5 text-center"
                style={styles}
              >
                {vans?.type}
              </span>{" "}
              <br /> {vans?.name} <br />${vans?.price}/day
            </p>
          </div>
          <HostVansLayout />
        </div>
      </div>
    </div>
  );
}

export default HostVanDetails;
