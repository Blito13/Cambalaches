import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from './redux/productSlice';

export function useFetch (url) {
    const dispatch = useDispatch();
    const [ data, setData] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then((response) => response.json())
        .then((data) => dispatch(setProducts( data )))
        
    },[]);

  
    return {data} ;
    
}