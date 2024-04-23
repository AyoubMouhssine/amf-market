import { configureStore } from "@reduxjs/toolkit";
import produitsSlice from "./slices/produitsSlice";
import categoriesSlice from "./slices/categoriesSlice";
import imagesSlice from "./slices/imagesSlice";
const store = configureStore({
  reducer: {
    produits: produitsSlice,
    categories: categoriesSlice,
    images: imagesSlice,
  },
});

export default store;
