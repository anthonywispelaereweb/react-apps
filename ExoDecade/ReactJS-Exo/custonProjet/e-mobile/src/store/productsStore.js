
import { createSlice } from "@reduxjs/toolkit";
const recentlyViewedStoreLocal = JSON.parse(sessionStorage.getItem('recentlyViewed'));
console.log('recentlyViewedStoreLocal',recentlyViewedStoreLocal)
const initialProductsState = {
	products: [],
	productsList: [],
	selectedProductsList : null,
	topSellers: [],
	topNews: [],
	selectedProduct: null,
	recentlyViewed : recentlyViewedStoreLocal || []

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
			console.log( 'addProductViewed :',action.payload )
			let newRecentlyViewde = [ action.payload,...state.recentlyViewed, action.payload]
			state.recentlyViewed= newRecentlyViewde
			let localeStore= JSON.stringify(newRecentlyViewde)
			sessionStorage.setItem('recentlyViewed', localeStore )
		},

	},
});
export const productsActions = productsSlice.actions;

export default productsSlice.reducer;