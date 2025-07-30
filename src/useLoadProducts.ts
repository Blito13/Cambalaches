// hooks/useLoadProducts.ts
import { useEffect } from 'react';
import type { Product } from './types/Product';
import { collection, getDocs, QueryDocumentSnapshot, type DocumentData } from 'firebase/firestore';
import { db } from './firebase/config';
import { setProducts } from './redux/productSlice';
import { useAppDispatch, useAppSelector } from './redux/store'; // Asegúrate de importar tu tipo RootState

/* interface Product {
  id: string;
  [key: string]: any; // Para las demás propiedades dinámicas del producto
} */

/* interface ProductsState {
  products: Product[];
} */

export const useLoadProducts = (nameData: string) => {
  const dispatch = useAppDispatch();
  const { products , loading, error } = useAppSelector((state) => state.product);
    
  
  const loadProducts = async (): Promise<void> => {
    try {
      const querySnapshot = await getDocs(collection(db, nameData));
      const productsData: Product[] = querySnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title ?? '',
          description: data.description ?? '',
          price: data.price ?? 0,
          stock: data.stock ?? 0,
          image: data.image ?? '',
          category: data.category ?? '',
          brand: data.brand ?? '',
          ownerNumber: data.ownerNumber ?? 0,
          thumbnail: data.thumbnail ?? [], // Asumiendo que thumbnail es un array de strings
          details: data.details ?? '' // add any other required Product fields with sensible defaults

          // add any other required Product fields with sensible defaults
          
        };
      });
      
      dispatch(setProducts(productsData));
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  // Carga inicial automática
  useEffect(() => {
    if (products && products.length < 1) {
      loadProducts();
    }
  }, []);

  return {
    products: products,
    refreshProducts: loadProducts
  };
};