import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { placeBid } from '../redux/actions/auctionActions';

const Auction = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleBid = (productId) => {
    dispatch(placeBid(productId));
  };

  return (
    <div className="auction">
      <h1>Subasta de Productos Reciclados</h1>
      <ProductList products={products} onBid={handleBid} />
    </div>
  );
};

export default Auction;