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
  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => {
        const Vans = data.vans;
        setVans(
          Vans.map((vans) => {
            return {
              id: vans.id,
              name: vans.name,
              price: vans.price,
              description: vans.description,
              imageUrl: vans.imageUrl,
              type: vans.type,
            };
          })
        );
      });
  }, []);
  console.log(vans);
  return (
    <div>
      <main className="bg-main p-4">
        <div>
          <h1 className="m-5 font-bold text-large">Explore our vans options</h1>
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
