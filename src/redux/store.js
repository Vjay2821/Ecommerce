import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import categoriesReducer from './categoriesSlice'; // Make sure categoriesReducer is correctly imported

const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer, // Ensure the categories slice is set here
  },
});

export default store;