import { configureStore } from "@reduxjs/toolkit";
import produitsSlice from "./slices/produitsSlice";
import categoriesSlice from "./slices/categoriesSlice";
import imagesSlice from "./slices/imagesSlice";
import authSlice from "./slices/authSlice";
import reviewSlice from "./slices/reviewSlice";
import cartSlice from "./slices/cartSlice";
const store = configureStore({
  reducer: {
    produits: produitsSlice,
    categories: categoriesSlice,
    images: imagesSlice,
    auth: authSlice,
    reviews: reviewSlice,
    cart: cartSlice,
  },
});

export default store;
