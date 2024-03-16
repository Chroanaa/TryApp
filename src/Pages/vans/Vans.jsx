import React, { useEffect, useState } from "react";
import Card from "../../components/ui/Card";
function Vans() {
  const [vans, setVans] = useState([
    {
      id: "",
      name: "",
      price: 0,
      description: "",
      imageUrl: "",
      type: "",
    },
  ]);
  async function fetchData() {
    const response = await fetch("/api/vans");
    const data = await response.json();
    const vanList = data.vans;
    setVans(vanList);
  }
  const cacheData = async () => {
    const response = await fetch("/api/vans");
    const data = await response.json();
    const vanList = data.vans;
    localStorage.setItem("vans", JSON.stringify(vanList));
  };
  const checkLocalStorage = () => {
    if (localStorage.getItem("vans")) {
      return true;
    }
  };
  useEffect(() => {
    fetchData();
    cacheData();
    if (checkLocalStorage()) {
      setVans(JSON.parse(localStorage.getItem("vans")));
    }
  }, [cacheData]);
  async function fetchFilteredVans(type) {
    const response = await fetch(`/api/vans`);
    const data = await response.json();
    const vanList = data.vans;
    setVans(vanList.filter((van) => van.type === type));
  }
  return (
    <div>
      <main className="bg-main p-4">
        <div>
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
          <div className="grid grid-cols-2 place-items-center gap-20">
            {vans.map((van) => {
              return (
                <Card
                  key={van.id}
                  name={van.name}
                  price={van.price}
                  imageUrl={van.imageUrl}
                  type={van.type}
                  id={van.id}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Vans;
