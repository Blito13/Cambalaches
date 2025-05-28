// hooks/useProductFilters.js
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { resetFilters } from './redux/filterSlice'; // Asegúrate de que la ruta sea correcta

// Selector memoizado
const selectFilteredProducts = createSelector(
  [(state) => state.products.products, (state) => state.filters],
  (products, filters) => {
    console.log(products, filters);
    return products.filter(product => {
      const matchesCategory = !filters.category || product.category === filters.category;
      const matchesPrice = product.price >= filters.priceRange.min && 
                         product.price <= filters.priceRange.max;
      const matchesTitle = !filters.title || 
        product.title.toLowerCase().includes(filters.title.toLowerCase());
      
      return matchesCategory && matchesPrice && matchesTitle;
    });
  }
);

export const useProductFilters = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(selectFilteredProducts);
  const currentFilters = useSelector((state) => state.filters);
  
  const resetAllFilters = () => {
    dispatch(resetFilters());
  };

  return {
    filteredProducts,
    currentFilters,
    resetAllFilters
  };
};