import { configureStore } from '@reduxjs/toolkit';
import auctionReducer from './auctionSlice';
import productReducer from './productSlice';

export const store = configureStore({
  reducer: {
    auction: auctionReducer,
    products: productReducer
  },
});