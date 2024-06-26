import { useReducer ,  createContext } from "react";
import {cartReducer , cartInitialState} from '../reducers/cart.js';
import axios from 'axios';
import { collection , getDocs } from "firebase/firestore";
import { db } from "../firebase/config.js";
import {doc , getDoc} from "firebase/firestore";
export const CartContext = createContext();

function useCartReducer (){
    const [state , dispatch] = useReducer(cartReducer,cartInitialState);

    const addToCart  = product => dispatch({
        type:'ADD_TO_CART',
        payload : product
    })
    const getProducts = async (dispatch) => {
            try{
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

            }  catch(error){
                console.log(error)
            }
        
    }
    const getDetailProduct  = async(id) => {
        
            try{
                const docRef = doc(db , "productos" ,  id);
                const docResp =  await getDoc(docRef);
                const resp = {...docResp.data() ,id : docResp.id}
                console.log(resp);
                return dispatch( {
                    type : 'GET_DETAILS', 
                    payload :resp, 
                })
            }catch (error){
                console.log(error)
            }
          
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
    return {state , addToCart ,removeFromCart , clearCart ,sendForm ,getTotal , getProducts ,getDetailProduct} 
}

export function CartProvider ({children}) {
    const {state ,addToCart ,removeFromCart , clearCart , sendForm ,getTotal , getProducts , getDetailProduct} = useCartReducer();
    
    return (
        <CartContext.Provider value = {{
            cart : state,
            addToCart,
            removeFromCart,
            clearCart,
            sendForm,
            getTotal,
            getDetailProduct,
            getProducts
        }}>
            {children}
        </CartContext.Provider>
    )
}