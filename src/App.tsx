import { useState } from 'react';
import { useEffect } from 'react';
import type { Product } from './types/Product';
import { ProductList } from './components/ProductList';
import { fetchProducts } from './redux/productSlice';
import { ProductCard } from './components/ProductCard';
import { SearchFilter } from './components/SearchFilter';
import { ProductDetails } from './components/ProductDetails';
import { WhatsAppButton } from './components/WhatsAppButton';
import { useAppSelector } from './redux/store'; 
import { useAppDispatch } from './redux/store';
import { setProducts } from './redux/productSlice';
import { productsMock } from './data/products';
import { useLoadProducts }  from './useLoadProducts';
/* import { db } from './firebase';
import { collection, getDocs } from "firebase/firestore"; 
 */


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { products , loading, error } = useAppSelector((state) => state.product);
  const {category, priceRange, title} = useAppSelector((state) => state.filters);
  /* const products = useAppSlelector(state => state.product.products); */
/*   const dispatch = useAppDispatch(); */
   const { fetchedPoducts } = useLoadProducts("productos");
   console.log(fetchedPoducts, "fetchedPoducts");
 /*  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())); */
    useEffect(() => {
    /*   products.length === 0 && *//*  dispatch(fetchProducts()); */
    console.log(products , "lalala" , error, loading);
    console.log(category, priceRange, title, "filters");
  
    }, []);


/*   useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Product[];
      setProducts(productsData);
    };

    fetchProducts();
  }, []); */

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">todaviaSirve.com</h1>
        {/* 
        <SearchFilter 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
        />
         */}
       <ProductList></ProductList>
        
        
      </div>
    </div>
  );
};
export default App;