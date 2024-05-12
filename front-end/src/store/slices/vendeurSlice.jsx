import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../lib/axios";

const initialState = {
  vendeurs: [],
  isLoading: false,
  error: null,
};

export const fetchVendeurs = createAsyncThunk(
  "categories/fetchVendeurs",
  async () => {
    try {
      const response = await axios.get("/vendeurs");
      return response.data.vendeurs;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

const vendeurSlice = createSlice({
  name: "vendeurs",
  initialState,
  reducers: {
    deleteVendeur(state, action) {
      state.vendeurs = state.vendeurs.filter(
        (vendeur) => vendeur.vendeurId !== +action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVendeurs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchVendeurs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.vendeurs = action.payload;
      })
      .addCase(fetchVendeurs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { deleteVendeur } = vendeurSlice.actions;
export default vendeurSlice.reducer;
