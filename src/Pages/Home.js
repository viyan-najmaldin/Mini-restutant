import React from "react";
import { useSelector } from "react-redux";
import Card from "../Component/Card";
import food from "../food";

function Home() {
  let isDark = useSelector((state) => state.Theme.isDark);

  return (
    <>
      <div className={` ${isDark ? "bg-white" : "bg-gray-900 "}        `}>
        <div className="  screen_home">
          <div className={`${isDark ? "Food__border" : "Food__border_dark"}  `}>
            {food.map((food) => {
              return (
                <Card
                  key={food.key}
                  id={food.key}
                  name={food.name}
                  desc={food.desc}
                  img={food.img}
                  price={food.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
