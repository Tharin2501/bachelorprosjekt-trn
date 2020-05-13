import React, { useState, useEffect, useContext } from "react"
import CartListCard from "./cartListCard"
import Cookie from "js-cookie";
import { Button } from "reactstrap";
import { calculatePrice, calculateCollectMePoints } from "../cookieHandler"
import CartTotalPriceContext from "../context/cartTotalPriceContext";

const isServer = () => typeof window === `undefined`;



const CartList = () => {

    const [cart, setCart] = useState(Cookie.getJSON("cartStorage"))

    const [totalPrice, setTotalPrice] = useState(calculatePrice());
    const [collectMePoints, setCollectMePoints] = useState(calculateCollectMePoints(totalPrice));

    const changeTtotalprice = () => {
        var newprice = calculatePrice();
        setTotalPrice(newprice);
        setCollectMePoints(calculateCollectMePoints(newprice));
    }
    /** Adding to Cart */
    const { price, ChangeTotalPrice } = useContext(CartTotalPriceContext);
    const changeTotalPriceContextValue = (newValue, changeValueFunction) => {
        changeValueFunction(newValue);
        calculatePriceFunction();
    }


    const changecart = () => {
        changeTotalPriceContextValue(calculatePrice(), ChangeTotalPrice);

    }

    const calculatePriceFunction = () => {
        changeTtotalprice();

    }

    /** Adding to Cart END*/



    return (
        <div  className="container px-4 py-5 mx-auto">
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
                <div className="col-5"><h4> {totalPrice}</h4> </div>
                <div> <h4> Dine tax free poeng:{collectMePoints}</h4></div>
                <Button> Betal</Button>
            </div>

        </div>

    );
};

export default CartList;
