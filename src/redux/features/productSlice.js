import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk(
  "product/fetchProduct",
  async (q) => {
    const response = await axios.get("https://dummyjson.com/products/search",{
        params:{q}
    });

    return response.data;
  },
);

const productSlice = createSlice({
  name: "product",

  initialState: {
    query:'',
    products: [],
    loading: false,
    error: null,
  },

  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
      })

      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch product";
      });
  },
});

export const { setQuery }  = productSlice.actions
export default productSlice.reducer
