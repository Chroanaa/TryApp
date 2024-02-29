import React from "react";
import AboutImage from "../assets/AboutImage.png";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="bg-[#FFF7ED] h-full">
      <div className="flex justify-center">
        <img className="w-[800px] h-[400px] " src={AboutImage} alt="" />
      </div>
      <div className="text-center text-2xl mt-4 font-bold mb-5">
        Don’t squeeze in a sedan when you could relax in a van.
      </div>
      <div className="grid place-items-center">
        <p className="text-wrap max-w-[500px] ">
          Our mission is to enliven your road trip with the perfect travel van{" "}
          rental. Our vans are recertified before each trip to ensure your{" "}
          travel plans can go off without a hitch. (Hitch costs extra 😉) <br />
        </p>
        <p className="text-wrap max-w-[500px] mt-5">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="bg-[#FFCC8D] w-[500px] mt-16 mb-10 rounded">
          <div className="m-10">
            <h2>Your destination is waiting.</h2>
            <h2 className="mb-10">Your van is ready.</h2>{" "}
            <Link
              to="/Vans"
              className="bg-[#161616] p-[10px] text-primary rounded-lg "
            >
              Explore our vans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
