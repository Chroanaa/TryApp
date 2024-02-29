import React from "react";
import { Link } from "react-router-dom";
import HomeImage from "../assets/HomeImage.png";
import Footer from "./Footer";
import Header from "./Header";
function Home() {
  return (
    <div>
      <section>
        <div className="flex justify-center relative">
          <img src={HomeImage} alt="" className="w-full h-mainPageSize " />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="absolute left-32 top-44 text-primary text-8xl font-bold m-5 ">
          You got the travel plans, we got the travel vans.
        </div>
        <div className="absolute left-32 top-96 text-primary text-5xl m-5 mt-20">
          Add adventure to your life by joining the #vanlife movement. <br />
          Rent the perfect van to make your perfect road trip.
        </div>
        <button className="absolute left-1/2 top-96 transform -translate-x-1/2 text-primary text-5xl m-5 mt-72 bg-orange w-5/6 rounded-xl p-5 font-bold hover:bg-opacity-50">
          Find your van
        </button>
      </section>
    </div>
  );
}

export default Home;
