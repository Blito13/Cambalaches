import React from 'react';
import { useSelector } from 'react-redux';
import { ProductCard } from './ProductCard';
import { ProductDetails } from './ProductDetails';
import { useProductFilters } from '../useProductsFilters'; //no esta creado
import { FilterForm } from './FilterForm';
import { useState } from 'react';
import {useAppDispatch, useAppSelector } from '../redux/store'; // Asegúrate de importar tu tipo RootState
import type { Product } from '../types/Product'; // Importa el tipo Product
// Definimos el tipo para el producto


export const ProductList: React.FC = () => {
  // Tipamos el estado con RootState
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  // Tipamos el hook useProductFilters (asumiendo que devuelve filteredProducts)
 /*  const { filteredProducts } = useProductFilters();
console.log(filteredProducts, "filteredProducts"); */
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Sección de filtros */}
      <div className="mb-8">
        <FilterForm />
      </div>
    {/*  {filteredProducts.length === 0 ? (
              <p className="text-center text-gray-500">No se encontraron productos</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onViewDetails={setSelectedProduct}
                  />
                ))}
              </div>
            )} */}
            
            {selectedProduct && (
              <ProductDetails 
                product={selectedProduct} 
                onClose={() => setSelectedProduct(null)} 
              />
            )}
    </div>
  );
};