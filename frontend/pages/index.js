import React from "react"
import Head from 'next/head'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ARTICLES_QUERY from "../apollo/queries/article/articles";
import Query from '../components/query';
//import Cart from "../components/cart/cart"


import Cookie from "js-cookie";
import { useState, useEffect } from "react";
import parsCookies from "../components/cart/parseCookies";

var jsonObj = [

]
// favoritesStroage

jsonObj = JSON.stringify(jsonObj)

/* <--CART --> */
const Cart = ({ initialcartStorageValue = jsonObj, initialfavoritesStorageValue = jsonObj }) => {
    const [cartStorage, setcartStorage] = useState(() =>
        (initialcartStorageValue) //  JSON.parse
    );
    //console.log(cartStorage)


    useEffect(() => {
        Cookie.set("cartStorage", (cartStorage));// JSON.stringify
    }, []);
    /* <--CART END-->*/

    /* FAV */

    const [favoritesStorage, setfavoritesStorage] = useState(() =>
        (initialfavoritesStorageValue) //  JSON.parse
    );
    console.log(favoritesStorage)


    useEffect(() => {
        Cookie.set("favoritesStorage", (favoritesStorage));// JSON.stringify
    }, []);


    /* FAV END*/


    return (
        <div>

            {
                <Query query={ARTICLES_QUERY} id={null}>
                    {({ data: { articles } }) => {
                        return (
                            <div className="hero">
                                <h1 className="title">Welcome to Next.js!</h1>

                                <Button color="danger">Pass på!!</Button>
                            </div>
                        );
                    }}
                </Query>
            }
        </div>
    );
};



Cart.getInitialProps = ({ req }) => {
    const cookies = parsCookies(req);


    return {
        initialcartStorageValue: cookies.cartStorage,
        initialfavoritesStorageValue: cookies.favoritesStorage
    };
};

export default Cart;
