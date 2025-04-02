import { createSlice } from '@reduxjs/toolkit'

const initialState = {
products:[],
details : "",
counter: 0
}

const productSlice = createSlice({
  name: 'auction',
  initialState,
  reducers: {
   setProducts ( state, action ) {
    console.log(action.payload, "cachito la cuadra")
    console.log(state.counter)
    state.products =  action.payload;
    state.counter = state.counter +1
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