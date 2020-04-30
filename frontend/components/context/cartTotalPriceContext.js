import React, { createContext } from 'react'
const CartTotalPriceContext = createContext({
    price: 0,
    setPrice: () => { }

});

export default CartTotalPriceContext;