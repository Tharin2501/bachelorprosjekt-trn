import React, { useState, useEffect, useContext } from "react"
import FavoritesCard from "./favoritesCard"
import Cookie from "js-cookie";
import { Button } from "reactstrap";

const isServer = () => typeof window === `undefined`;

const FavoritesList = () => {


    //var cart = Cookie.getJSON("cartStorage")

    const [favorites, setFavorites] = useState(Cookie.getJSON("favoritesStorage"))

    const changeFavorites = () => {
        setCart(Cookie.getJSON("favoritesStorage"))
        console.log("test")
    }



    return (
        <div div className="container px-4 py-5 mx-auto">
            <div className="row d-flex justify-content-center">
                <div className="col-5">
                    <h4 className="heading">Favorites</h4>
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

            {!isServer() && favorites !== undefined && favorites.map((product, i) => {
                console.log(product.name)
                return (
                    <div>

                        <FavoritesCard key={product.id} setFavorites={setFavorites} onDelete={changeFavorites} CartListCard={product} />
                    </div>

                );

            })}

        </div>

    );
};

export default FavoritesList;