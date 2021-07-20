
import { createSlice } from "@reduxjs/toolkit";

const initialProductsState = {
	products: [],
	productsList: [],
	selectedProductsList : null,
	topSellers: [],
	topNews: [],
	selectedProduct: null,
};
const productsSlice = createSlice({
	name: "products",
	initialState : initialProductsState,
	reducers: {
		initProducts(state, action) {
			state.products = action.payload
		},
		setSelectedProductsList(state, action) {
			state.selectedProductsList = action.payload
		},
		initProductsList(state, action) {
			state.productsList = action.payload
		},
		resetProductsList(state, action) {
			state.productsList = []
		},
		initTopSellers(state, action) {
			state.topSellers = action.payload
		},
		initTopNews(state, action) {
			state.topNews = action.payload
		},
		setSelectedProduct(state, action) {
			state.selectedProduct = action.payload
		},
	},
});
export const productsActions = productsSlice.actions;

export default productsSlice.reducer;