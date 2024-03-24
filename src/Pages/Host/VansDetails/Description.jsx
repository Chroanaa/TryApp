import React, { useEffect } from "react";
import { useState } from "react";
import useFetchData from "../../../hooks/useFetchData";
import { useParams } from "react-router-dom";
function Details() {
  const params = useParams();
  const [vans, setVans] = useState(null);
  const fetchData = async () => {
    const data = await useFetchData(`/api/vans/${params.id}`);
    setVans(data.vans);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-5">
      <p>
        <span className="font-bold"> Name: </span>
        {vans?.name}
      </p>
      <p>
        <span className="font-bold">Description: </span>
        {vans?.description}
      </p>
      <p>
        <span className="font-bold">Visibility: </span>
        {vans?.visibility}
      </p>
    </div>
  );
}

export default Details;
