import React from "react";
import { useEffect, useState, Suspense } from "react";
const ListedVans = React.lazy(() => import("./ListedVans"));
function Dashboard() {
  const [vans, setVans] = useState(null);
  const [limit, setLimit] = useState(3);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/vans");
      const data = await response.json();
      const vanList = data.vans;
      setVans(vanList);
    }
    fetchData();
  }, []);
  return (
    <div className="bg-[#ffead0] p-4">
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
          Review Score ⭐ 5.0/5
          <span className="text-secondary ml-[23.3rem]">Details</span>
        </div>
        <div>listed Vans</div>
        <div>
          {vans ? (
            <Suspense fallback={<div>Loading...</div>}>
              {vans.slice(0, limit).map((van) => {
                return (
                  <ListedVans
                    key={van.id}
                    img={van.imageUrl}
                    name={van.name}
                    price={van.price}
                    description={van.description}
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
