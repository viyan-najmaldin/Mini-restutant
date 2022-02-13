import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ThemeActions } from "../Redux/ThemeSlice";
function Header() {
  let dispatch = useDispatch();
  let navigator = useNavigate();
  let isDark = useSelector((state) => state.Theme.isDark);
  return (
    <header className=" bg-rose-300 p-6 w-full">
      <div className="  flex items-center justify-between">
        <div className="flex ">
          <img
            width={100}
            src="https://cdn-icons-png.flaticon.com/512/2555/2555794.png"
          />
          <h1 className=" font-bold text-3xl  ml-10 pt-25">Mini Resturant</h1>
        </div>

        <button
          className=" text-2xl   ml-10 mr-8 hover:text-white"
          onClick={() => {
            navigator("/");
          }}
        >
          Home
        </button>
        <button
          className=" text-2xl  ml-10 mr-8 hover:text-white"
          onClick={() => {
            navigator("/order");
          }}
        >
          Order
        </button>
        <button
          className=" text-4xl  ml-10 mr-8 hover:text-white"
          onClick={() => dispatch(ThemeActions.toggle())}
        >
          {isDark ? (
            <i className="uil uil-moon" />
          ) : (
            <i className="uil uil-sun" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
