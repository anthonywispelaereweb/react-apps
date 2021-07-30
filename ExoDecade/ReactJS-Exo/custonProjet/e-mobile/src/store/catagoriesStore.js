import { createSlice } from "@reduxjs/toolkit";
const initialCategoriesState = {
  categories: [],
  selectedCategorie: {
    name: sessionStorage.getItem("currentCategories")
      ? JSON.parse(sessionStorage.getItem("currentCategories")).name
      : "",
    id: sessionStorage.getItem("currentCategories")
      ? JSON.parse(sessionStorage.getItem("currentCategories")).id
      : null,
  },
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
      sessionStorage.setItem(
        "currentCategories",
        JSON.stringify(action.payload)
      );
    },
  },
});
export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice.reducer;
