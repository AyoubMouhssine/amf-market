import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../lib/axios";

const initialState = {
  images: [],
  isLoading: false,
  error: null,
};

export const fetchimages = createAsyncThunk("images/fetchImages", async () => {
  try {
    const response = await axios.get("/produits/images");
    return response.data.images;
  } catch (error) {
    return Promise.reject(error);
  }
});

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchimages.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchimages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.images = action.payload;
      })
      .addCase(fetchimages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default imagesSlice.reducer;
