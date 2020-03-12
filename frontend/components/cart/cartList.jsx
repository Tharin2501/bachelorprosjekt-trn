import React, { useState, useEffect, useContext } from "react"
import CartListCard from "./cartListCard"
import Cookie from "js-cookie";
import { Button } from "reactstrap";

const isServer = () => typeof window === `undefined`;

const CartList = () => {


    //var cart = Cookie.getJSON("rememberMe")

    const [cart, setCart] = useState(Cookie.getJSON("rememberMe"))

    const changecart = () => {
        setCart(Cookie.getJSON("rememberMe"))
        console.log("test")
    }



    return (
        <div div className="container px-4 py-5 mx-auto">
            <div className="row d-flex justify-content-center">
                <div className="col-5">
                    <h4 className="heading">Shopping Bag</h4>
                </div>
                <div className="col-7">
                    <div className="row text-right">

                        <div className="col-4">
                            <h6 className="mt-2">Quantity</h6>
                        </div>
                        <div className="col-4">
                            <h6 className="mt-2">Price</h6>
                        </div>

                    </div>
                </div>
            </div>

            {!isServer() && cart !== undefined && cart.map((product, i) => {
                console.log(product.name)
                return (
                    <div>

                        <CartListCard key={product.id} cart={cart} setcart={setCart} onDelete={changecart} CartListCard={product} />
                    </div>

                );

            })}

        </div>

    );

    function getCart() {
        if (typeof window !== "undefined") {
            var cart = Cookie.getJSON("rememberMe")

            if (cart === "undefined" || cart.length === 0) {
                console.log("YAS")

                return (
                    <Button>Test</Button>
                )
            }

            cart.map((product, i) => {
                console.log(product.name)
                return (
                    <div>
                        <CartListCard key={product.id} CartListCard={product} onChange={handleNewCart} />
                    </div>

                );

            })


        }

    }
};

export default CartList;