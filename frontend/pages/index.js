import React from "react"
import { Frontpage } from "../components/Frontpage";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from "reactstrap";

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
    //console.log(favoritesStorage)


    useEffect(() => {
        Cookie.set("favoritesStorage", (favoritesStorage));// JSON.stringify
    }, []);

    /* FAV END*/

    /* FAV END*/


    return (
        <div>
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
