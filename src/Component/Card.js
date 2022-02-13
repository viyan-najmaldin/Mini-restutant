import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderActions } from "../Redux/OrderSlice";
function Card(Props) {
  let isDark = useSelector((state) => state.Theme.isDark);
  let isOrderd = useSelector((state) => state.Store.Order);
  let isOrder = useState({});
  let dispatch = useDispatch();
  const onOrder = () => {
    let number = Math.round(Math.random() * 100);
    isOrder = {
      id: number,
      img: Props.img,
      name: Props.name,
      desc: Props.desc,
      price: Props.price,
    };

    dispatch(OrderActions.add(isOrder));
    console.log(isOrderd);
  };

  useEffect(() => {}, []);
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
          {Props.price}
        </div>
        <button
          onClick={() => onOrder()}
          className=" hover:text-white  rounded bg-red-500 relative mt-4 p-4 px-14 right-6"
        >
          Add to list
        </button>
      </div>
    </div>
  );
}

export default Card;
