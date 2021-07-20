import { configureStore } from "@reduxjs/toolkit";

import categoriesReducer from './catagoriesStore';
import productsReducer from './productsStore';
import basketReducer from './basketStore';


const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    basket: basketReducer
  },
});

export default store;
