import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  objectId: "",
  initialBid:0,
  description:"",
  photo :[],
  title:"",
  currentBid:0,
  finalPrice:0,
  lastBid:0,
  userLastBidId:"",
  minBid:0,
  auctionState:""
}

const auctionSlice = createSlice({
  name: 'auction',
  initialState,
  reducers: {
    setItemToAuction(state, action) {
      const {objectId, initialBid, description, photo, title, currentBid, finalPrice, minBid} = action.payload;
      state.objectId = objectId;
      state.initialBid = initialBid;
      state.description = description;
      state.photo = photo;
      state.title = title;
      state.currentBid = currentBid;
      state.finalPrice = finalPrice;
      state.minBid = minBid;
      state.auctionState = "open";
      
    },
    makeBid(state, action) {
      const {id, user, bet} =  action.payload;
      if(bet > minBid ) {
        state.userLastBidId = id;
        state.currentPrice = initialBid + bet;
        state.lastBid = bet;
      }else
         return state;
    },
    setAuctionState(state, action) {
     state.auctionState = action.payload;
    },
  },
})

export const { setItemToAuction, makeBid, setAuctionState } = auctionSlice.actions
export default auctionSlice.reducer