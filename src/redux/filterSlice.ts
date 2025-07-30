import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Tipos para el estado
interface PriceRange {
  min: number;
  max: number;
}

export interface FiltersState {
  category: string;
  priceRange: PriceRange;
  title: string;
}

// Tipos para las acciones

interface PriceRangePayload {
  min?: number;
  max?: number;
}

const initialState: FiltersState = {
  category: '',
  priceRange: { min: 0, max: 10000000 },
  title: '',
};

export const FilterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setPriceRange: (state, action: PayloadAction<PriceRangePayload>) => {
      console.log('setPriceRange', action.payload);
      
      const priceRange = action.payload;
      const newRange: PriceRange = { min: 0, max: 10000000 };
      
      if (typeof priceRange === 'object') {
        if (priceRange.min !== undefined) {
          newRange.min = priceRange.min;
        }
        if (priceRange.max !== undefined) {
          newRange.max = priceRange.max;
        }
      } else if (typeof priceRange === 'number') {
        newRange.max = priceRange;
      }
      
      state.priceRange = newRange;
    },
    setTitleFilter: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    resetFilters: () => initialState
  }
});

export const { 
  setCategory, 
  setPriceRange, 
  setTitleFilter, 
  resetFilters 
} = FilterSlice.actions;

export default FilterSlice.reducer;