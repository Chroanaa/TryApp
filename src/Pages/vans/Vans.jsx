import React, { useEffect, useState } from "react";
import Card from "../../components/ui/Card";
import useFetchData from "../../hooks/useFetchData";
import useCacheData from "../../hooks/useCatchData";
import useFetchCacheData from "../../hooks/useFetchCacheData";
function Vans() {
  const [vans, setVans] = useState(null);
  async function fetchData() {
    const data = await useFetchData("/api/vans");
    setVans(data.vans);
    useCacheData("allVans", data.vans);
  }
  const checkLocalStorage = () => {
    if (localStorage.getItem("allVans")) {
      return true;
    }
  };
  useEffect(() => {
    if (checkLocalStorage()) {
      setVans(JSON.parse(localStorage.getItem("allVans")));
    } else {
      fetchData();
    }
  }, []);
  const fetchFilteredVans = async (type) => {
    const data = await useFetchData("/api/vans");
    setVans(data.vans.filter((van) => van.type === type));
    console.log(type);
  };
  return (
    <div>
      <main className="bg-main p-10 ">
        <div className="h-">
          <h1 className="m-5 font-bold text-large">Explore our vans options</h1>
          <div className="flex flex-row gap-4">
            <button
              className="bg-orange text-primary px-4 py-2 rounded-lg hover:bg-opacity-70"
              onClick={() => {
                fetchFilteredVans("simple");
              }}
            >
              simple
            </button>
            <button
              className="bg-[#115E59] text-primary px-4 py-2 rounded-lg hover:bg-opacity-70"
              onClick={() => fetchFilteredVans("rugged")}
            >
              rugged
            </button>
            <button
              className="bg-[#161616] text-primary px-4 py-2 rounded-lg hover:bg-opacity-70"
              onClick={() => {
                fetchFilteredVans("luxury");
              }}
            >
              luxury
            </button>
            <button onClick={() => fetchData()}>All</button>
          </div>
          <div className="grid grid-cols-2 place-items-center gap-20 mt-10">
            {vans ? (
              vans.map((van) => {
                return (
                  <Card
                    key={van.id}
                    imageUrl={van.imageUrl}
                    name={van.name}
                    price={van.price}
                    description={van.description}
                    type={van.type}
                    id={van.id}
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
