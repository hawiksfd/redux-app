import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

// buat control get product
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get("http://localhost:5000/products");
    return response.data;
  }
);

// buat control create product
export const createProducts = createAsyncThunk(
  "products/createProduct",
  async ({ title, price }) => {
    const response = await axios.post("http://localhost:5000/products", {
      title,
      price,
    });
    return response.data;
  }
);

// buat control delete product
export const deleteProducts = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    return id;
  }
);

// buat entity adapter
const productEntity = createEntityAdapter({
  selectId: (product) => product.id,
});

// buat createslice product
const productSlice = createSlice({
  name: "product",
  initialState: productEntity.getInitialState(),
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      productEntity.setAll(state, action.payload);
    },
    [createProducts.fulfilled]: (state, action) => {
      productEntity.addOne(state, action.payload);
    },
    [deleteProducts.fulfilled]: (state, action) => {
      productEntity.removeOne(state, action.payload);
    },
  },
});

// export state entity product dengan selectors
export const productSelectors = productEntity.getSelectors(
  (state) => state.product
);

export default productSlice.reducer;
