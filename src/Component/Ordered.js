import React from "react";
import { useSelector } from "react-redux";

function CardOrder(Props) {
  let isDark = useSelector((state) => state.Theme.isDark);
  return (
    <div
      className={`${isDark ? "card__order" : "card__order_dark"} bg-rose-300`}
    >
      <div>
        <img className="w-58 m-2" src={Props?.img} alt={""} />
      </div>
      <div className=" m-auto ">
        <h1 className="text-2xl">{Props?.name} </h1>
        <div className=" m-5">{Props?.desc}</div>
        <div className={` relative  text-xl  `}>
          Price :<i className="uil uil-dollar-sign-alt "></i>
          {Props?.price}
        </div>

        <button
          onClick={Props.delete}
          className=" hover:text-white  m-4 ml-10 rounded bg-red-500 relative mt-2 p-2 px-6 "
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CardOrder;
