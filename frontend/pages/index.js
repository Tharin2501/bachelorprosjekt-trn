import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";

import { Frontpage } from "../components/Frontpage";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";


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

    /* FAV END*/


    return (
        <div>

            {/*
            <Query query={ARTICLES_QUERY} id={null}>
                {({data: {articles}}) => {
                    console.log(articles)
                    console.log(articles[0].name);

                    return (
                        <div className="hero">
                            <h1 className="title">Welcome to Next.js!</h1>

                            <Button color="danger">Pass på!!</Button>
                        </div>
                    );
                }}
            </Query>
            */}
            <Frontpage />
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
