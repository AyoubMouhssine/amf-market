import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthStatus(state, action) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setAuthStatus } = authSlice.actions;

export default authSlice.reducer;
