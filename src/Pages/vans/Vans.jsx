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

  useEffect(() => {
    fetchData();
  }, []);
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
              onClick={() => {
                fetchFilteredVans("simple");
              }}
            >
              simple
            </button>
            <button onClick={() => fetchFilteredVans("rugged")}>rugged</button>
            <button
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
