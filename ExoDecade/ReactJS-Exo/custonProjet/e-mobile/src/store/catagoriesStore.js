import { createSlice } from "@reduxjs/toolkit";
const initialCategoriesState = {
  categories: [],
  selectedCategorie: "",
};
const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialCategoriesState,
  reducers: {
    initcategories(state, action) {
      state.categories = action.payload;
    },
    selectCategorie(state, action) {
      state.selectedCategorie = action.currentCategorie;
    },
  },
});
export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice.reducer;
