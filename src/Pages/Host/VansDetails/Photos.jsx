import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
function Photos() {
  const param = useParams();
  const [vans, setVans] = useState(null);
  const fetchData = async () => {
    const data = await useFetchData(`/api/vans/${param.id}`);
    setVans(data.vans);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="rounded">
      <img src={vans?.imageUrl} alt="" width={100} />
    </div>
  );
}

export default Photos;
