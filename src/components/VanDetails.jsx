import React from "react";
import { useParams } from "react-router-dom";
function VanDetails() {
  const param = useParams();
  return (
    <div>
      <h1>this is the id: {param.id}</h1>
    </div>
  );
}

export default VanDetails;
