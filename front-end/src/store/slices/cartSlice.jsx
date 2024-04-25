// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const getCartItemsFromLocalStorage = () => {
  const storedItems = localStorage.getItem("cartItems");
  return storedItems ? JSON.parse(storedItems) : [];
};

const initialState = {
  items: getCartItemsFromLocalStorage(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== +action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cartItems");
    },
    incrementCartItemQuantity: (state, action) => {
      const itemId = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === itemId);
      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },
    decrementCartItemQuantity: (state, action) => {
      const itemId = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === itemId);
      if (itemToUpdate && itemToUpdate.quantity > 1) {
        itemToUpdate.quantity -= 1;
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartItemCount = (state) => state.cart.items.length;

export const selectCartTotalPrice = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.prix * item.quantity,
    0
  );

export default cartSlice.reducer;
