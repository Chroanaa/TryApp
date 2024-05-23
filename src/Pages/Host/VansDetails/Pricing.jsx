import React, { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
function pricing() {
  const [vans] = useOutletContext();

  return (
    <div>
      <p>${vans?.price}/day</p>
    </div>
  );
}

export default pricing;
