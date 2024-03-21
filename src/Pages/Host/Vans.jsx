import React from "react";
import ListedVans from "../../components/ui/HorizontalCard";
import { useEffect, useState, Suspense } from "react";
import useFetchData from "../../hooks/useFetchData";
import useCacheData from "../../hooks/useCatchData";
import useFetchCacheData from "../../hooks/useFetchCacheData";
import { Navigate, useNavigate } from "react-router-dom";
function Vans() {
  const [vans, setVans] = useState(null);
  let navigate = useNavigate();
  const checkLocalStorage = () => {
    if (localStorage.getItem("vans")) {
      return true;
    }
  };
  const fetchData = async () => {
    const data = await useFetchData("/api/vans");
    useCacheData("vans", data);
    setVans(data.vans);
  };
  useEffect(() => {
    if (!checkLocalStorage()) {
      fetchData();
    }
    setVans(useFetchCacheData("vans"));
  }, []);

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
