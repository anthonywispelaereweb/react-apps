
import { createSlice } from "@reduxjs/toolkit";

const initialProductsState = {
	products: [],
	productsList: [],
	topSellers: [],
	topNews: [],
};
const productsSlice = createSlice({
	name: "products",
	initialState : initialProductsState,
	reducers: {
		initProducts(state, action) {
			state.products = action.payload
		},
		initProductsList(state, action) {
			state.productsList = null;

			state.productsList = action.payload
		},
		initTopSellers(state, action) {
			state.topSellers = action.payload
		},
		initTopNews(state, action) {
			state.topNews = action.payload
		},
	},
});
export const productsActions = productsSlice.actions;

export default productsSlice.reducer;