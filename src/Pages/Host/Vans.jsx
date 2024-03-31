import React from "react";
import ListedVans from "../../components/ui/HorizontalCard";
import { useEffect, useState, Suspense } from "react";
import useFetchData from "../../hooks/useFetchData";
import useCacheData from "../../hooks/useCatchData";
import useFetchCacheData from "../../hooks/useFetchCacheData";
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";
function Vans() {
  const [vans] = useOutletContext(); //gets the data from the context of the parent component
  let navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(id);
  };
  return (
    <div className="bg-[#ffead0] p-5">
      <h1 className="text-large font-bold">Your listed vans </h1>
      <div className="ml-10 mt-5">
        {vans ? (
          <Suspense fallback={<div>Loading...</div>}>
            {vans.map((van) => {
              return (
                <ListedVans
                  key={van.id}
                  img={van.imageUrl}
                  name={van.name}
                  price={van.price}
                  description={van.description}
                  isEditable={false}
                  id={van.id}
                  onClick={() => handleNavigate(van.id)}
                />
              );
            })}
          </Suspense>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default Vans;
