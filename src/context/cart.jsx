import { useReducer ,  createContext } from "react";
import {cartReducer , cartInitialState} from '../reducers/cart.js';
import axios from 'axios';
import { collection , getDocs } from "firebase/firestore";
import { db } from "../firebase/config.js";

export const CartContext = createContext();

function useCartReducer (){
    const [state , dispatch] = useReducer(cartReducer,cartInitialState);

    const addToCart  = product => dispatch({
        type:'ADD_TO_CART',
        payload : product
    })
    const getProducts = async(dispatch) => {
        const productosRef = collection(db , "productos");
        var json =  await getDocs(productosRef);
        console.log(json.docs[0].data)
        console.log(json.docs[0].id)
        let resp = json.docs.map((doc)=>{
            return {...doc.data() , id :doc.id}
        })
        console.log(resp)
        return dispatch( {
            type : 'GET_PRODUCTS', 
            payload :json.data, 
        })
    }
    const removeFromCart = product => dispatch({
        type:'REMOVE_FROM_CART',
        payload : product
    })
    const sendForm = form => { 
       console.log(form);
        const whatsappLink = `whatsapp://send?phone=${import.meta.env.VITE_APP_NMBR}&text=${encodeURIComponent(form)}`;
        window.location.href = whatsappLink;
        /* dispatch({type : 'CLEAR_CART'}) */
    }
    const getTotal = () => dispatch({
        type: 'TOTAL_PRICE',
        
    })

    const clearCart = () => dispatch({type : 'CLEAR_CART'})
    return {state , addToCart ,removeFromCart , clearCart ,sendForm ,getTotal , getProducts} 
}

export function CartProvider ({children}) {
    const {state ,addToCart ,removeFromCart , clearCart , sendForm ,getTotal , getProducts} = useCartReducer();
    
    return (
        <CartContext.Provider value = {{
            cart : state,
            addToCart,
            removeFromCart,
            clearCart,
            sendForm,
            getTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}