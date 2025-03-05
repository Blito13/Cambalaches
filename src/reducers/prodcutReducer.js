const initialState = [
    { id: 1, name: 'Silla Reciclada', description: 'Silla hecha de madera reciclada', currentPrice: 50 },
    { id: 2, name: 'Lámpara Reciclada', description: 'Lámpara hecha de botellas de vidrio', currentPrice: 30 },
  ];
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'PLACE_BID':
        return state.map((product) =>
          product.id === action.payload
            ? { ...product, currentPrice: product.currentPrice + 10 }
            : product
        );
      default:
        return state;
    }
  };
  
  export default productReducer;