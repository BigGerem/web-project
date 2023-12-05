import { createSlice } from '@reduxjs/toolkit';

const selectedProductsSlice = createSlice({
  name: 'selectedProducts',
  initialState: [],
  reducers: {
    addToSelectedProducts: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addToSelectedProducts } = selectedProductsSlice.actions;
export default selectedProductsSlice.reducer;
