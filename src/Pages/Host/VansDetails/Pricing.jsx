import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
function pricing() {
  const param = useParams();
  const [vans, setVans] = useState(null);
  const fetchData = async () => {
    const data = await useFetchData(`/api/vans/${param.id}`);
    setVans(data.vans);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>{vans?.price}/day</div>;
}

export default pricing;
