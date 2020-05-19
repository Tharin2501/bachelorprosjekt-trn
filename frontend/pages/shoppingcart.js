import React from "react"
import CartList from "../components/cart/cartList";
import Head from 'next/head'
const ShoppingCart = () => (
    <div>
        <Head>
            <title> Handlekurv </title>
        </Head>
        <CartList></CartList>
    </div>
);

export default ShoppingCart;
