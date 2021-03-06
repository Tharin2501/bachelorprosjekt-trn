import React, { useState, useEffect, useContext } from "react"
import FavoritesCard from "./favoritesCard"
import Cookie from "js-cookie";
import { Button } from "reactstrap";
import { calculatePrice } from "../cookieHandler"
import CartTotalPriceContext from "../context/cartTotalPriceContext";

const isServer = () => typeof window === `undefined`;

const FavoritesList = () => {


    //var cart = Cookie.getJSON("cartStorage")

    const [favorites, setFavorites] = useState(Cookie.getJSON("favoritesStorage"))

    const changeFavorites = () => {

        setCart(Cookie.getJSON("favoritesStorage"))
    }

    /** Adding to Cart */
    const { price, ChangeTotalPrice } = useContext(CartTotalPriceContext);
    const changeTotalPriceContextValue = (newValue, changeValueFunction) => {
        changeValueFunction(newValue);
    }

    const changecart = () => {
        changeTotalPriceContextValue(calculatePrice(), ChangeTotalPrice);

    }

    return (
        <div className="container px-5 py-5 mx-auto">
            <div className="row justify-content-center">
                <div className="col-7">
                    <h4 className="heading">Favoritter</h4>
                </div>
                <div className="col-5">
                    <div className="row">
                        <div className="col-8">
                            <h6 className="mt-2">Antall</h6>
                        </div>
                        <div className="col-4">
                            <h6 className="mt-2">Pris</h6>
                        </div>

                    </div>
                </div>
            </div>

            {!isServer() && favorites !== undefined && favorites.map((product, i) => {
                return (
                    <div key={product.id}>

                        <FavoritesCard key={product.id} setFavorites={setFavorites} onDelete={changeFavorites} newPriceFunction={changecart}
                            CartListCard={product} />
                    </div>

                );

            })}

        </div>

    );
};

export default FavoritesList;
