import React, { useState } from 'react'
const currentPrice = {
    price: 0,
    setPrice: ({ value }) => this.setState({ price: value })

};
const CartTotalPriceContext = React.createContext(currentPrice);
export default CartTotalPriceContext;