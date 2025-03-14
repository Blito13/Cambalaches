import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const Auction = () => {
  const dispatch = useDispatch();
  const productToAuction = useSelector((state) => state.auction);
  return (
    <div /* className={styles.container} */>
      {
        productToAuction > 0? (
          <>
              <h1>{productToAuction.title}</h1>
              <h2>{productToAuction.initialBid}</h2>
              <h2>{productToAuction.currentBid}</h2>
              <h2>{productToAuction.auctionState}</h2>
              <h2>{productToAuction.minBid}</h2>
              <h2>{productToAuction.lastBid}</h2>
              <h2>{productToAuction.userLastBidId}</h2>
              <img src={productToAuction} alt="photo" />
              <p>{productToAuction.description}</p>
          </>
        ) : (
        <>
        <h1>No auctions yet</h1>
        </>
        )
      }
    
    </div>
  );
};
