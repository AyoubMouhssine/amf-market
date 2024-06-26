import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../lib/axios";

const initialState = {
  stores: [],
  selectedStoreId: null,
  selectedStoreProducts: [],
  status: "idle",
  error: null,
};

export const fetchStores = createAsyncThunk(
  "stores/fetchStores",
  async (vendeurId, { getState }) => {
    try {
      const response = await axios.get(`/vendeur/${vendeurId}/stores`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("auth_token")}`,
        },
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchProductsForStore = createAsyncThunk(
  "stores/fetchProductsForStore",
  async (storeId, { getState }) => {
    try {
      const response = await axios.get(`/store/${storeId}/products`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("auth_token")}`,
        },
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteStore = createAsyncThunk(
  "stores/deleteStore",
  async (storeId, { getState }) => {
    try {
      await axios.delete(`/store/${storeId}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("auth_token")}`,
        },
      });
      return storeId;
    } catch (error) {
      throw error;
    }
  }
);

export const updateStore = createAsyncThunk(
  "stores/updateStore",
  async (storeData, { getState }) => {
    try {
      const response = await axios.put(`/stores/update`, storeData, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("auth_token")}`,
        },
      });
      return response.data.store;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteProduitOfStore = createAsyncThunk(
  "/stores/deleteProduitOfStore",
  async (id, { getState }) => {
    const response = await axios.delete(`/produits/${id}`);
    return response.data;
  }
);

export const updateProduitOfStore = createAsyncThunk(
  "stores/updateProduitOfStore",
  async (updatedProduct, { getState }) => {
    try {
      const response = await axios.put(
        `/produits/${updatedProduct.id}`,
        updatedProduct
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    selectStore: (state, action) => {
      state.selectedStoreId = action.payload;
    },
    getStoreId(state, action) {
      state.selectedStoreId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStores.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchStores.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.stores = action.payload;
      })
      .addCase(fetchStores.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchProductsForStore.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProductsForStore.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedStoreProducts = action.payload;
      })
      .addCase(fetchProductsForStore.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteStore.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteStore.fulfilled, (state, action) => {
        state.status = "succeeded";

        console.log(state.selectedStoreId);
        state.stores = state.stores.filter(
          (store) => store.storeId !== action.payload
        );

        if (state.selectedStoreId === +action.payload) {
          state.selectedStoreId = null;
          state.selectedStoreProducts = [];
        }
      })
      .addCase(deleteStore.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateStore.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateStore.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.stores.findIndex(
          (store) => store.storeId === action.payload.storeId
        );
        state.stores[index] = action.payload;
      })
      .addCase(updateStore.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteProduitOfStore.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteProduitOfStore.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedStoreProducts = state.selectedStoreProducts.filter(
          (produit) => produit.id !== action.payload.produitId
        );
      })

      .addCase(deleteProduitOfStore.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateProduitOfStore.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateProduitOfStore.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.selectedStoreProducts.findIndex(
          (produit) => produit.id === +action.payload.product.id
        );
        if (index !== -1) {
          state.selectedStoreProducts[index] = action.payload.product;
        }
      })
      .addCase(updateProduitOfStore.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { selectStore, getStoreId } = storeSlice.actions;

export default storeSlice.reducer;

export const selectAllStores = (state) => state.stores.stores;
export const selectSelectedStoreId = (state) => state.stores.selectedStoreId;
export const selectSelectedStoreProducts = (state) =>
  state.stores.selectedStoreProducts;
