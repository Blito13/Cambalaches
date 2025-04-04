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
    state.products =  action.payload;
    state.counter = state.counter +1
   },
   filterProducts ( state, action ) {
    const { price, category, title} = action.payload;

   },
   showDetails ( state, action ) {
    const {id} = action.payload
   },
   contactOwner (state, action ) {
   const {number, text} = action.payload;

   console.log(number, text)
    const whatsappLink = `whatsapp://send?phone=${number}&text=${encodeURIComponent(text)}`;
    window.location.href = whatsappLink;
   }
  },
})

export const { setProducts, filterProducts, showDetails, contactOwner } = productSlice.actions;
export default productSlice.reducer;