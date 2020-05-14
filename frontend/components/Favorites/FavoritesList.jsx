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
    }


    return (
        <div div className="container px-4 py-5 mx-auto">
            <div className="row d-flex justify-content-center">
                <div className="col-5">
                    <h4 className="heading">Favoritter</h4>
                </div>
                <div className="col-7">
                    <div className="row">
                        <div className="col-6">
                            <h6 className="mt-2">Antall</h6>
                        </div>
                        <div className="col-5">
                            <h6 className="mt-2 ml-5">Pris</h6>
                        </div>

                    </div>
                </div>
            </div>

            {!isServer() && favorites !== undefined && favorites.map((product, i) => {
                console.log(product.name)
                return (
                    <div>

                        <FavoritesCard key={product.id} setFavorites={setFavorites} onDelete={changeFavorites}
                            CartListCard={product} />
                    </div>

                );

            })}

        </div>

    );
};

export default FavoritesList;
