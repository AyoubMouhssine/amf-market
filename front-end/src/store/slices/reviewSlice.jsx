import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../lib/axios";

const initialState = {
  reviews: [],
  loading: false,
  error: null,
};

export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async (productId) => {
    const response = await axios.get(`/produits/${productId}/reviews`);
    return response.data.data;
  }
);

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addReview(state, action) {
      state.reviews.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addReview } = reviewSlice.actions;
export default reviewSlice.reducer;
