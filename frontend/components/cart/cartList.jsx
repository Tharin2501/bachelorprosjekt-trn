import React, { useState, useEffect, useContext } from "react"
import CartListCard from "./cartListCard"
import Cookie from "js-cookie";
import { Button } from "reactstrap";
import { calculatePrice } from "../cookieHandler"
import CartTotalPriceContext from "../context/cartTotalPriceContext";

const isServer = () => typeof window === `undefined`;

const CartList = () => {

    const [cart, setCart] = useState(Cookie.getJSON("cartStorage"))



    /** Adding to Cart */
    const { price, ChangeTotalPrice } = useContext(CartTotalPriceContext);
    const changeTotalPriceContextValue = (newValue, changeValueFunction) => {
        console.log({ newValue })
        changeValueFunction(newValue);

    }


    const changecart = () => {
        changeTotalPriceContextValue(calculatePrice(), ChangeTotalPrice);
        console.log("Werrk")
    }


    /** Adding to Cart END*/


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
                return (
                    <div>

                        <CartListCard key={product.id} setcart={setCart} onDelete={changecart} CartListCard={product} />
                    </div>

                );

            })}

            <div className="row d-flex justify-content-center">
                <div className="col-5"><h4> Total pris:</h4></div>
                <div className="col-5"><h4> {calculatePrice()}</h4> </div>
                <Button> Betal</Button>
            </div>

        </div>

    );
};

export default CartList;