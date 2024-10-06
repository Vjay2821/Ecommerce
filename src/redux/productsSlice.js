import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
    page: 0, // Add initial page state for pagination
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    appendProducts: (state, action) => {
      state.items = [...state.items, ...action.payload];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    }, // Add reducer for page state
  },
});

export const { setProducts, appendProducts, setLoading, setError, setPage } =
  productsSlice.actions;
export default productsSlice.reducer;