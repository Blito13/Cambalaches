// hooks/useLoadProducts.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase/config';
import { setProducts } from './redux/productSlice';

export const useLoadProducts = (nameData) => {
  console.log("pasando", nameData)
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  console.log( Object.keys(products).length)
  const loadProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, nameData));
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
    if (Object.keys(products.products).length < 1) {
      loadProducts();
    }
  }, []);

  return {
    products: products,
    refreshProducts: loadProducts
  };
};