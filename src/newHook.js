// hooks/useLoadProducts.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase/config';
import { setProducts } from './redux/productSlice';

export const useLoadProducts = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector(state => state.products);

  const loadProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'productos'));
      const productsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      dispatch(setProducts(productsData));
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  // Carga inicial automática
  useEffect(() => {
    if (items.length === 0 && status === 'idle') {
      loadProducts();
    }
  }, []);

  return {
    products: items,
    isLoading: status === 'loading',
    error: status === 'failed',
    refreshProducts: loadProducts
  };
};