import React from "react";

function Card(props) {
  let typeColor = "";
  const setTypeColor = () => {
    if (props.type === "rugged") {
      return (typeColor = "#115E59");
    } else if (props.type === "compact") {
      return (typeColor = "blue");
    } else if (props.type === "luxury") {
      return (typeColor = "#161616");
    } else if (props.type === "simple") {
      return (typeColor = "#E17654");
    }
  };
  const styles = {
    backgroundColor: setTypeColor(),
  };

  return (
    <div className="flex flex-col max-w-[200px]">
      <img
        src={props.imageUrl}
        alt={props.name}
        width={200}
        className="rounded"
      />
      <p className="flex justify-between">
        {props.name} <span className="text-right">${props.price} </span>
      </p>
      <span className="text-right text-vs m-0">/day </span>
      <div
        className="max-w-20 p-1 rounded text-[#FFCC8D] font-semiBold"
        style={styles}
      >
        <p className="text-center">{props.type}</p>
      </div>
    </div>
  );
}

export default Card;
