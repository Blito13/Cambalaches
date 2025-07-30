  import { ProductSlice } from './productSlice';
  import { FilterSlice } from './filterSlice';
  import { configureStore } from '@reduxjs/toolkit';    
  import { type TypedUseSelectorHook, useDispatch ,useSelector } from 'react-redux';

  export const store = configureStore({
    reducer: {  
      product: ProductSlice.reducer,
      filters: FilterSlice.reducer,
    },})

    export const useAppDispatch : () => typeof store.dispatch = useDispatch;
    export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;