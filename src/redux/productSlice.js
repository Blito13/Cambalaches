import { createSlice } from '@reduxjs/toolkit'

const initialState = {
products:[],
details : "",
}

const productSlice = createSlice({
  name: 'auction',
  initialState,
  reducers: {
   setProducts ( state, action ) {
    state.products =  action.payload;
   },
   showDetails ( state, action ) {
    const {id} = action.payload
   },
   contactOwner (state, action ) {
   const {number, text} = action.payload;
    const whatsappLink = `whatsapp://send?phone=${number}&text=${encodeURIComponent(text)}`;
    window.location.href = whatsappLink;
   }
  },
})

export const { setProducts, showDetails, contactOwner } = productSlice.actions;
export default productSlice.reducer;