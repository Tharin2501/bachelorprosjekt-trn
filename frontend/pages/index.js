import React from "react"
import { Frontpage } from "../components/Frontpage";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from "reactstrap";

import Cookie from "js-cookie";
import {useState, useEffect} from "react";
import parsCookies from "../components/cart/parseCookies";
import {useRouter} from "next/router";
import ARTICLE_QUERY from "../apollo/queries/article/article";
import Query from "../components/query";
import ARTICLES_QUERY from "../apollo/queries/article/articles";
import ARTICLES_QUERY_WITHLIMIT from "../apollo/queries/article/articleslimit";

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


    const router = useRouter();
    console.log(router.query.id);

    return (
        <Query query={ARTICLES_QUERY_WITHLIMIT}>
            {({data: {article}}) => {
                return (
                    <div>
                        <Frontpage artikkel={article}/>
                    </div>
                )
            }}
        </Query>
    );
};


Cart.getInitialProps = ({req}) => {
    const cookies = parsCookies(req);


    return {
        initialcartStorageValue: cookies.cartStorage,
        initialfavoritesStorageValue: cookies.favoritesStorage
    };
};

export default Cart;
