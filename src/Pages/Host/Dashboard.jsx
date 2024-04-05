import React from "react";
import { useEffect, useState, Suspense } from "react";

import { useNavigate, useOutletContext } from "react-router-dom";
import ListedVans from "../../components/ui/HorizontalCard";
("../../components/ui/HorizontalCard");

function Dashboard() {
  const [vans] = useOutletContext();
  const [limit, setLimit] = useState(3);
  console.log(vans);

  let navigate = useNavigate();
  return (
    <div className="bg-[#ffead0] p-8">
      <div className="ml-36">
        <h1 className="text-large mb-5 font-bold">Welcome!</h1>
        <div className=" text-Gray">
          Income last <span className="underline font-bold ml-2">30 days</span>
          <span className="text-secondary ml-96">Details</span>
        </div>
        <div>
          <span className="text-veryLarge font-bold mt-5">$1,000</span>
        </div>
        <div>
          <span> Review Score ⭐ 5.0/5</span>
          <span className="ml-[23.3rem]">Details</span>
        </div>
        <div className="mt-10 mb-5 text-medium">
          <span className="font-bold">Listed Vans</span>
          {limit === 3 ? (
            <button
              className="text-secondary ml-[28.5rem] bg-[]"
              onClick={() => {
                setLimit(limit + 3);
              }}
            >
              view all
            </button>
          ) : (
            <button
              className="text-secondary ml-[29.5rem]"
              onClick={() => {
                setLimit(limit - 3);
              }}
            >
              hide
            </button>
          )}
        </div>
        <div className="flex flex-col gap-4">
          {vans ? (
            <Suspense fallback={<div>Loading...</div>}>
              {/* This function just basically limits the vans that will be rendered*/}
              {vans.slice(0, limit).map((van) => {
                return (
                  <ListedVans
                    key={van.id}
                    img={van.imageUrl}
                    name={van.name}
                    price={van.price}
                    description={van.description}
                    isEditable={true}
                    id={van.id}
                    onClick={() => navigate(`/host/vans/${van.id}`)}
                  />
                );
              })}
            </Suspense>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
