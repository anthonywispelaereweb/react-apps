import { configureStore } from "@reduxjs/toolkit";

import categoriesReducer from './catagoriesStore';
import productsReducer from './productsStore';


const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
  },
});

export default store;
