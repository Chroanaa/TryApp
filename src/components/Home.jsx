import React from "react";
import { NavLink } from "react-router-dom";
import HomeImage from "../assets/HomeImage.png";

function Home() {
  return (
    <div>
      <section>
        <div className="flex justify-center relative z-[-1]">
          <img src={HomeImage} alt="" className="w-full h-mainPageSize " />
        </div>
        <div className="absolute z-[-1] left-32 top-44 text-primary text-veryLarge font-bold m-5 ">
          You got the travel plans, we got the travel vans.
        </div>
        <div className="absolute z-[-1] left-32 top-96 text-primary text-veryLarge m-5 mt-20">
          Add adventure to your life by joining the #vanlife movement. <br />
          Rent the perfect van to make your perfect road trip.
        </div>

        <NavLink
          to="/vans"
          className="absolute z-0 left-1/2 top-96 transform -translate-x-1/2 text-primary text-5xl m-5 mt-72 text-center bg-orange w-5/6 rounded-xl p-5 font-bold hover:bg-opacity-50"
        >
          Explore our vans
        </NavLink>
      </section>
    </div>
  );
}

export default Home;
