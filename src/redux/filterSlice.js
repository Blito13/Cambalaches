import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: '',
  priceRange: { min: 0, max: 1000 },
  title: '',
  // otros filtros que necesites
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setTitleFilter: (state, action) => {
      state.title = action.payload;
    },
    resetFilters: () => initialState
    // otros reducers para filtros adicionales
  }
});

export const { setCategory, setPriceRange, setTitleFilter, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;