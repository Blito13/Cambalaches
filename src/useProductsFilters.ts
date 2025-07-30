// hooks/useProductFilters.ts
import { createSelector } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from './redux/store'; // Asegúrate de importar tus tipos
import { resetFilters } from './redux/filterSlice';
import { useEffect } from 'react';
//no se esta despachando la accion de fetchar productos
import type { Product } from './types/Product'; // Importa el tipo Product
import type { Filters } from './types/Filters';
import { fetchProducts } from './redux/productSlice'; // Importa la acción para fetchar productos
 // Importa el tipo Product
// Definimos los tipos para el producto

// Tipo para el hook de retorno
interface UseProductFiltersReturn {
  filteredProducts: Product[];
  currentFilters: Filters;
  resetAllFilters: () => void; 
}

// Selector memoizado con tipos
const selectFilteredProducts = createSelector(
  [
    (state) => state.product as Product[],
    (state) => state.filters as Filters
  ],
  
  (products, filters) => {
    console.log('Applying filters:', filters, products);
    return products.filter(product => {
      const matchesCategory = !filters.category || product.category === filters.category;
      const matchesPrice = (!filters.priceRange.min || product.price >= filters.priceRange.min) && 
                         (!filters.priceRange.max || product.price <= filters.priceRange.max);
      const matchesTitle = !filters.title || 
                         product.title.toLowerCase().includes(filters.title.toLowerCase());
      
      return matchesCategory && matchesPrice && matchesTitle;
    });
  }
);

export const useProductFilters = (): UseProductFiltersReturn => {
  const dispatch= useAppDispatch();
  const filteredProducts = useAppSelector(selectFilteredProducts);
  const currentFilters  = useAppSelector((state) => state.filters);
  
  const resetAllFilters = () => {
    dispatch(resetFilters());
  };
  useEffect(() => {
    if (Object.keys(filteredProducts).length < 1) {
      console.log("Fetching products due to empty filteredProducts");
      dispatch(fetchProducts()); ////validaciones7777
    }
  }, []);
  return {
    filteredProducts,
    currentFilters,
    resetAllFilters
  };
};