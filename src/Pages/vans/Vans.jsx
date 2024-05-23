import React, { useEffect, useState } from "react";
import Card from "../../components/ui/Card";
import useFetchData from "../../hooks/useFetchData";
import useCacheData from "../../hooks/useCatchData";
import useFetchCacheData from "../../hooks/useFetchCacheData";
import { useLoaderData, useSearchParams } from "react-router-dom";
export async function loader() {
  const data = useFetchData("/api/vans");
  return data;
}
function Vans() {
  const abortFetchData = new AbortController(); // this is the controller that listen for the abort signal
  const { vans } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const TypeFilter = searchParams.get("type"); // gets the current query parameter in the ur;
  const displayVans = TypeFilter
    ? vans.filter((van) => van.type === TypeFilter)
    : vans; // filters the vans based on the type filter

  //This functions sets the query parameter in the url based on the filter selected
  function handleFilter(key, value) {
    setSearchParams((prevValue) => {
      if (value === null) {
        prevValue.delete(key);
      } else {
        prevValue.set(key, value);
      }
      return prevValue;
    });
  }

  return (
    <div>
      <main className='bg-main p-10 '>
        <div>
          <h1 className='m-5 font-bold text-large'>Explore our vans options</h1>
          <div className='flex flex-row gap-4'>
            <button
              className={`bg-[#f9a754] text-primary px-4 py-2 rounded-lg ${
                TypeFilter === "simple" ? "bg-orange" : ""
              }   transition-colors hover:bg-orange duration-500`}
              onClick={() => {
                handleFilter("type", "simple");
              }}
            >
              simple
            </button>
            <button
              className={`bg-[#f9a754] text-primary px-4 py-2 rounded-lg ${
                TypeFilter === "rugged" ? "bg-darkgreen" : ""
              }  transition-colors hover:bg-darkgreen duration-500 `}
              onClick={() => handleFilter("type", "rugged")}
            >
              rugged
            </button>
            <button
              className={`bg-[#f9a754] text-primary px-4 py-2 rounded-lg transition-colors ${
                TypeFilter === "luxury" ? "bg-black" : ""
              } hover:bg-[#161616] duration-500   `}
              onClick={() => {
                handleFilter("type", "luxury");
              }}
            >
              luxury
            </button>
            {TypeFilter && (
              <button onClick={() => handleFilter("type", null)}>All</button>
            )}
          </div>
          <div className='grid grid-cols-2 place-items-center gap-20 mt-10'>
            {displayVans ? (
              displayVans.map((van) => {
                return (
                  <Card
                    key={van.id}
                    imageUrl={van.imageUrl}
                    name={van.name}
                    price={van.price}
                    description={van.description}
                    type={van.type}
                    id={van.id}
                    searchParams={searchParams.toString()}
                  />
                );
              })
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Vans;
