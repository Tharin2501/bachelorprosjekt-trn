import React, {useState, useEffect, useContext} from "react"
import CartListCard from "./cartListCard"
import Cookie from "js-cookie";
import {Button} from "reactstrap";
import {calculatePrice, calculateCollectMePoints} from "../cookieHandler"
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
    const {price, ChangeTotalPrice} = useContext(CartTotalPriceContext);
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
        <div className="container px-4 py-5 mx-auto">
            <div className="row d-flex justify-content-center">
                <div className="col-5">
                    <h4 className="heading">Shopping Bag</h4>
                </div>
                <div className="col-7">
                    <div className="row">
                        <div className="col-6">
                            <h6 className="mt-2">Antall</h6>
                        </div>
                        <div className="col-5">
                            <h6 className="mt-2 ml-5 pl-2">Pris</h6>
                        </div>

                    </div>
                </div>
            </div>

            {!isServer() && cart !== undefined && cart.map((product, i) => {
                return (
                    <div>
                        <CartListCard key={product.id} setcart={setCart} onDelete={changecart} CartListCard={product}/>
                    </div>

                );

            })}

            <div className="row d-flex justify-content-end mt-5 pt-5 ">
                <div className="col-9 pb-1"><h4> Total pris:</h4></div>
                <div className="col-3"><h4 className="text-nowrap"> {totalPrice} kr</h4></div>
                <div className="col-9"><h4> Dine tax free poeng:</h4></div>
                <div className="col-3"><h4> {collectMePoints}</h4></div>

            </div>
            <div className="row">
                <div className="col-9"></div>
                <div className="col-3 mt-2"><Button> Betal</Button></div>
            </div>
        </div>

    );
};

export default CartList;
