import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../lib/axios";

const initialState = {
  produits: [],
  currentPage: 1,
  totalPages: 1,
  isLoading: false,
  error: null,
};

export const fetchProduits = createAsyncThunk(
  "produits/fetchProduits",
  async (page = 1) => {
    try {
      const response = await axios.get(`/produits?page=${page}`);
      return {
        produits: response.data.data.produits,
        meta: response.data.data.meta,
      };
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

const produitsSlice = createSlice({
  name: "produits",
  initialState,
  reducers: {
    onPageChange(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduits.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProduits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.produits = action.payload.produits;
        state.totalPages = action.payload.meta.last_page;
      })
      .addCase(fetchProduits.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { onPageChange } = produitsSlice.actions;
export default produitsSlice.reducer;
