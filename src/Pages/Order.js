import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardOrder from "../Component/Ordered";
import { OrderActions } from "../Redux/OrderSlice";

function Order() {
  let isDark = useSelector((state) => state.Theme.isDark);
  let isOrderd = useSelector((state) => state.Store.Order);
  let dispatch = useDispatch();

  let [total, settotal] = useState(0);
  useEffect(() => {
    let amount = 0;
    isOrderd.map((data) => {
      amount += data.price;
    });
    console.log(amount);
    settotal(amount);
  }, [isOrderd]);

  const onDelete = (id) => {
    dispatch(OrderActions.dec(id));
  };
  const onAdd = (id) => {
    dispatch(OrderActions.dec(id));
  };
  return (
    <div className={`h-screen ${isDark ? "bg-gray-900  " : "bg-white "}  `}>
      <div>
        <div className="grid grid-cols-4 gap-4">
          {isOrderd?.map((food) => {
            return (
              <CardOrder
                img={food?.img}
                name={food.name}
                desc={food.desc}
                count={1}
                delete={() => onDelete(food.id)}
              />
            );
          })}
        </div>
        <div className=" ">
          <div className="text-center">
            <div className={`${isDark ? "total_dark" : "total"}`}>
              <h1 className="m-4 text-3xl text-rose-500">
                Total ( {isOrderd?.length} item) : {total}$
              </h1>
            </div>
            <h1 className="m-4 text-3xl text-rose-500">{total}$</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
