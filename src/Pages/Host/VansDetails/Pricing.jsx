import React, { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
function pricing() {
  const [vans] = useOutletContext();

  return <div>${vans?.price}/day</div>;
}

export default pricing;
