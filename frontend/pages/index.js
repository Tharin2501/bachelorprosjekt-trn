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
import { GiTestTubes } from "react-icons/gi";

//const CART_KEY = "cart";

var myarray = { key: 1, key: 2 }

const jsonObj = [

]


var test1 = {
    id: 1,
    name: 'test'
}
var test2 = {
    id: 2,
    name: 'test2'
}

var doit = true;

jsonObj.push(test1)
jsonObj.push(test2)

//jsonObj = JSON.parse(jsonObj)

const Cart = ({ initialRememberValue = jsonObj }) => {
    const [rememberMe, setRememberMe] = useState(() =>
        (initialRememberValue) //  JSON.parse
    );

    const jsonStr = JSON.stringify(jsonObj);
    //console.log(jsonStr)
    //console.log(rememberMe)


    //console.log(rememberMe)

    //console.log(test)
    //console.log(test[0])

    var test3 = {
        id: 3,
        name: 'faen!'

    }

    console.log(rememberMe)




    useEffect(() => {
        Cookie.set("rememberMe", (rememberMe));// JSON.stringify
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
                onChange={e => addItem()}
            />
        </div>
    );

    function addItem() {
        var test = JSON.parse(rememberMe)
        test.push(test3)
        //console.log(test[2])
        //console.log(test)
        var restult = JSON.stringify(test)
        setRememberMe(restult)
    }
};



Cart.getInitialProps = ({ req }) => {
    const cookies = parsCookies(req);


    return {
        initialRememberValue: cookies.rememberMe
    };
};

export default Cart;
