import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../lib/axios";

const initialState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    try {
      const response = await axios.get("/categories");
      return response.data.categories;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    deleteCategorie(state, action) {
      state.categories = state.categories.filter(
        (categorie) => categorie.id !== +action.payload
      );
    },
    updateCategorie(state, action) {
      const categorie = state.categories.find(
        (categorie) => categorie.id == action.payload.id
      );

      if (categorie) categorie.nom = action.payload.nom;
    },
    ajouterCategorie(state, action) {
      state.categories.push({
        id:
          state.categories.length === 0
            ? 1
            : state.categories[state.categories.length - 1].id + 1,
        nom: action.payload,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { deleteCategorie, ajouterCategorie, updateCategorie } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
