
import { createSlice } from "@reduxjs/toolkit";

const initialProductsState = {
	products: [],
	productsList: [],
	selectedProductsList : null,
	topSellers: [],
	topNews: [],
	selectedProduct: null,
	recentlyViewed : JSON.parse(sessionStorage.getItem('recentlyViewed')) || []

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
		addRecentlyViewed(state, action) {
			// console.log( 'addProductViewed :',action.payload )
			let newRecentlyViewde = [ action.payload,...state.recentlyViewed]
			state.recentlyViewed= newRecentlyViewde
			sessionStorage.setItem('recentlyViewed', JSON.stringify(newRecentlyViewde) )
		},

	},
});
export const productsActions = productsSlice.actions;

export default productsSlice.reducer;