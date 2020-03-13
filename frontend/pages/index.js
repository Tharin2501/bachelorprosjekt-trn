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


jsonObj = JSON.stringify(jsonObj)

const Cart = ({ initialRememberValue = jsonObj }) => {
    const [rememberMe, setRememberMe] = useState(() =>
        (initialRememberValue) //  JSON.parse
    );
    console.log(rememberMe)



    useEffect(() => {
        Cookie.set("rememberMe", (rememberMe));// JSON.stringify
    }, []);

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
        initialRememberValue: cookies.rememberMe
    };
};

export default Cart;
