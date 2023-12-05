// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import selectedProductsReducer from './selectedProductsSlice';
import counterReducer from './counterSlice'; 

const store = configureStore({
  reducer: {
    selectedProducts: selectedProductsReducer,
    counter: counterReducer, 
  },
});

export default store;

