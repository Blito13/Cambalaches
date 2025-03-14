import { createSlice } from '@reduxjs/toolkit'

const initialState = {
products:[],
details : ""
}

const productSlice = createSlice({
  name: 'auction',
  initialState,
  reducers: {
   setProducts ( state, action ) {
    console.log(action.payload, "cachito la cuadra")
    state.products =  action.payload;
   },
   filterProducts ( state, action ) {
    const { price, category, title} = action.payload;

   },
   showDetails ( state, action ) {
    const {id} = action.payload
   } 
  },
})

export const { setProducts, filterProducts, showDetails } = productSlice.actions;
export default productSlice.reducer;