import React from "react";

function ListedVans(props) {
  return (
    <div className="flex flex-col">
      <img src={props.img} alt="" />
      <div>{props.name}</div>
      <div>{props.price}</div>
      <div>{props.description}</div>
    </div>
  );
}

export default ListedVans;
