import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: null,
  reducers: {
    addProduct: (state, action) => {
      console.log(action.payload);
      state = action.payload

      return state;
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
