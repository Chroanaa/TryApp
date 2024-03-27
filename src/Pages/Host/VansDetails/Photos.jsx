import React, { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
function Photos() {
  const [vans] = useOutletContext();
  return (
    <div className="rounded">
      <img src={vans?.imageUrl} alt="" width={100} />
    </div>
  );
}

export default Photos;
