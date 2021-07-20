import { createSlice } from "@reduxjs/toolkit";
const initialCategoriesState = {
  categories: [],
  selectedCategorie: "" || localStorage.getItem('currentCategoriesName'),
};
const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialCategoriesState,
  reducers: {
    initcategories(state, action) {
      state.categories = action.payload;
    },
    setSelectedCategorie(state, action) {
      state.selectedCategorie = action.payload;
    },
  },
});
export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice.reducer;