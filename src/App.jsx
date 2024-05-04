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
import { collection , getDocs } from "firebase/firestore";
import { db } from "../src/firebase/config";
import {doc , getDoc} from "firebase/firestore";





function App() {
  const [employees, setEmployees] = useState([]);
  const {filters ,filterProducts} = useFilters();
  const filteredProducts = filterProducts(employees);
  
  const getEmployees = async () => {
    console.log("entra a la func")
    const productosRef = collection(db , "productos");
        var json =  await getDocs(productosRef);
        console.log(json)
        
        let resp = json.docs.map((doc)=>{
            return {...doc.data() , id :doc.id}
        })
        console.log(resp)
    setEmployees(resp)
  }
  console.log(employees)
  useEffect(()=>{
   
    getEmployees()
  },[]);
  console.log(employees, "app" ,filteredProducts)
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
