import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Auction = () => {
  const productToAuction = useSelector((state) => state);
  const dispatch = useDispatch();

/*   const handleBid = (productId) => {
    dispatch(placeBid(productId));
  };
 */
  return (
    <div className={styles.container}>
      <h1>{productToAuction.title}</h1>
      <h2>{productToAuction.initialBid}</h2>
      <h2>{productToAuction.currentBid}</h2>
      <h2>{productToAuction.auctionState}</h2>
      <h2>{productToAuction.minBid}</h2>
      <h2>{productToAuction.lastBid}</h2>
      <h2>{productToAuction.userLastBidId}</h2>
      <img src={productToAuction} alt="photo" />
      <p>{productToAuction.description}</p>
    
    </div>
  );
};

export default Auction;