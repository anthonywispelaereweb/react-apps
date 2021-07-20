import { createSlice } from "@reduxjs/toolkit";
const updateTotal = (accumulator, currentValue) => accumulator + currentValue.price;

const initialBasketState = {
  products: [],
  total: "",
};
const basketSlice = createSlice({
  name: "categories",
  initialState: initialBasketState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    setTotal(state) {
      state.total = updateTotal(state.products);
    },
  },
});
export const basketSliceActions = basketSlice.actions;
export default basketSlice.reducer;
