import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productSlice.js";

export const store = configureStore({
  reducer: {
    product: productSlice,
  },
});
