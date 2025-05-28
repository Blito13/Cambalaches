import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: '',
  priceRange: { min: 0, max: 10000000 },
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
      console.log('setPriceRange', action.payload);
      let priceRange = action.payload;
      let objto = { min: 0, max: 10000000 };
      if (typeof priceRange === 'object') {
        if (priceRange.min !== undefined) {
          objto.min = priceRange.min;
        }
        if (priceRange.max !== undefined) {
          objto.max = priceRange.max;
        }
      } else if (typeof priceRange === 'number') {
        objto.min = 0;
        objto.max = priceRange;
      }
      state.priceRange = objto;
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