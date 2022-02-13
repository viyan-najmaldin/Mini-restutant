import { configureStore } from "@reduxjs/toolkit";
import OrderSlice from "./OrderSlice";
import ThemeSlice from "./ThemeSlice";

const store = configureStore({
  reducer: {
    Theme: ThemeSlice,
    Store: OrderSlice,
  },
});

export default store;
