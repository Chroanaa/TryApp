import React from "react";
import ListedVans from "../../components/ui/HorizontalCard";
import { useEffect, useState, Suspense } from "react";
function Vans() {
  const [vans, setVans] = useState(null);
  async function fetchData() {
    const response = await fetch("/api/vans");
    const data = await response.json();
    const vanList = data.vans;
    setVans(vanList);
  }
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
  }, []);
  const cacheData = async () => {
    const respone = await fetch("/api/vans");
    const data = await respone.json();
    const vanList = data.vans;
    const Data = localStorage.setItem("vans", JSON.stringify(vanList));
    setVans(JSON.parse(Data));
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
