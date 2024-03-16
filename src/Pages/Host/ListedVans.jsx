import React from "react";

function ListedVans(props) {
  return (
    <div>
      <div className="flex flex-row gap-4 bg-main max-w-[50rem] p-5 mb-6">
        <img src={props.img} alt="van" className="h-20 w-20 rounded" />
        <div className="flex flex-col mt-4 ">
          <p className="font-bold">{props.name}</p>
          <p>${props.price}/day</p>
        </div>
        <button className="absolute left-[55rem] mt-5">Edit</button>
      </div>
    </div>
  );
}

export default ListedVans;
