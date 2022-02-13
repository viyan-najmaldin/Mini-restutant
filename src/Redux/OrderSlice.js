import { createSlice } from "@reduxjs/toolkit";
const iOrderState = {
  Order: [],
};
// export const totalPrice = (Order) => {
//   Order?.reduce((amount, item) => item.price + amount, 0);
// };
const OrderSlice = createSlice({
  name: "Order",
  initialState: iOrderState,
  reducers: {
    add(state, action) {
      state.Order = [...state.Order, action.payload];
      console.log(action);
    },
    dec(state, action) {
      state.Order = state.Order.filter((order) => order.id !== action.payload);
    },
    remove(state, action) {
      state.Order = [...state.Order, action.payload];
    },
  },
});
export const OrderActions = OrderSlice.actions;
export default OrderSlice.reducer;
