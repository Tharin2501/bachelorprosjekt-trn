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

//const CART_KEY = "cart";

const myArray = [1, 2, 3];
console.log(myArray)
const Cart = ({ initialRememberValue = myArray }) => { //(myArray)
    const [rememberMe, setRememberMe] = useState(() =>
        (initialRememberValue) // JSON.parse makes bool work
    );

    console.log(rememberMe + " abc");
    <head>
        <title>Tax free</title>
    </head>

    useEffect(() => {
        Cookie.set("rememberMe", (rememberMe)); //  JSON.stringify makes bool work

    }, [rememberMe]);

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


            remember me
        <input
                type="checkbox"
                value={rememberMe}
                checked={rememberMe}
                onChange={e => setRememberMe([4, 5, 6])}
            />
        </div>
    );
};

Cart.getInitialProps = ({ req }) => {
    const cookies = parsCookies(req);


    return {
        initialRememberValue: cookies.rememberMe
    };
};

export default Cart;
