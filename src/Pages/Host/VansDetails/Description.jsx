import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
function Details() {
  const [vans] = useOutletContext();
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
