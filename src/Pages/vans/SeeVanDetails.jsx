import React, { Suspense, useEffect, useState } from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { getVan } from "../../utils/api";
function VanDetails() {
  const param = useParams();
  const abortFetchData = new AbortController();
  const [vanDetails, setVanDetails] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
    imageUrl: "",
    type: "",
  });
  async function fetchVanDetails() {
    const Details = await getVan(param.id);
    console.log(Details);
    setVanDetails({
      id: Details.id,
      name: Details.name,
      price: Details.price,
      description: Details.description,
      imageUrl: Details.imageUrl,
      type: Details.type,
    });
  }
  // Cache data to improve performance
  const cacheData = async () => {
    const response = await fetch(`/api/vans/${param.id}`);
    const data = await response.json();
  };
  const checkLocalStorage = () => {
    if (localStorage.getItem(`details${param.id}`)) {
      return true;
    }
  };
  useEffect(() => {
    fetchVanDetails();
    cacheData();
    if (checkLocalStorage()) {
      setVanDetails(JSON.parse(localStorage.getItem(`details${param.id}`)));
    }
    return () => {
      abortFetchData.abort();
    };
  }, []);

  let typeColor = "";
  const setTypeColor = () => {
    if (vanDetails.type === "rugged") {
      return (typeColor = "#115E59");
    } else if (vanDetails.type === "compact") {
      return (typeColor = "blue");
    } else if (vanDetails.type === "luxury") {
      return (typeColor = "#161616");
    } else if (vanDetails.type === "simple") {
      return (typeColor = "#E17654");
    }
  };
  const styles = {
    backgroundColor: setTypeColor(),
  };
  let location = useLocation();
  const prevSearch = location.state?.search || ""; //assign the previous search query to the variable and checks if its undefined or not
  const word = prevSearch.split("=")[1];
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div
        aria-label={`Details of the ${vanDetails.name} with the price of ${vanDetails.price}`}
        className='bg-main'
      >
        <NavLink
          to={`..?${prevSearch}`}
          relative='path'
          className='flex flex-row underline decoration-white ml-12 max-w-[150px] transition-all hover:decoration-blue hover:scale-105 underline-offset-4 decoration-2 duration-500'
        >
          <FaArrowLeftLong className='self-center transition-all mr-2' />
          Back to {prevSearch ? word : "All vans"}
        </NavLink>
        <div className='flex flex-col'>
          <img
            src={vanDetails.imageUrl}
            alt={`This is the image of ${vanDetails.name}`}
            width={700}
            className=' mx-auto mt-5 mb-5'
          />
          <div className='flex flex-col ml-[37.5rem] gap-3'>
            <div
              className='max-w-20 px-2 py-1 rounded text-[#FFCC8D] font-semiBold mt-5 mb-5'
              style={styles}
            >
              <p className='text-center'>{vanDetails.type}</p>
            </div>
            <h1>{vanDetails.name}</h1>

            <h3>${vanDetails.price}/day</h3>
            <div className='max-w-[45rem] mb-6'>
              <p>{vanDetails.description}</p>
            </div>
            <NavLink
              to='/vans'
              className=' text-primary text-5xl text-center bg-orange w-[45rem] rounded-xl p-5 font-bold hover:bg-opacity-50'
            >
              Rent this van
            </NavLink>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default VanDetails;
