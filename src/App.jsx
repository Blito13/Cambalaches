import { useEffect, useState } from 'react';
import { Products } from './components/Products';
import {products as initialProducts} from './mocks/products';
import { Header } from './components/Header';
import { IS_DEVELOPMENT } from './components/config';
import { Footer } from './components/Footer';
import { useFilters } from './hooks/useFilters';
import { Cart } from './components/Cart';
import { CartProvider } from './context/cart';
import { SendCart } from './components/SendCart';
import { Form } from './components/Form';

function App() {
  const [employees, setEmployees] = useState();
  
  const getEmployees = async () => {
    const productosRef = collection(db , "productos");
        var json =  await getDocs(productosRef);
        console.log(json.docs[0].data)
        console.log(json.docs[0].id)
        let resp = json.docs.map((doc)=>{
            return {...doc.data() , id :doc.id}
        })
        console.log(resp)
    setEmployees(resp)
  }
  useEffect(()=>{
    getEmployees()
  },[]);
  const {filters ,filterProducts} = useFilters();
  const filteredProducts = filterProducts(employees);
  return (
    <CartProvider>
        <Header/>
        <Cart/>
        <Form/>
        <Products products={filteredProducts}/>
        <Footer />
    </CartProvider>
  )
}

export default App;
