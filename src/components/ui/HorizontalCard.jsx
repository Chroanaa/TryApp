import React from "react";
import { NavLink } from "react-router-dom";
function ListedVans(props) {
  let editable = props.isEditable;
  return (
    <div onClick={() => props.onClick(props.id)}>
      <NavLink>
        <div className="">
          <div className="flex flex-row gap-4 bg-main max-w-[50rem] p-5 mb-6 ">
            <img src={props.img} alt="van" className="h-20 w-20 rounded" />
            <div className="flex flex-col mt-4 ">
              <p className="font-bold">{props.name}</p>
              <p>${props.price}/day</p>
            </div>
            {editable && (
              <NavLink
                to={`${props.id}`}
                className="absolute left-[55rem] mt-5"
              >
                Edit
              </NavLink>
            )}
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default ListedVans;
