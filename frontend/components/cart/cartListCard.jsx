import React, { useState, useEffect, useContext } from "react"
import { FaHeart, FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";

// heavy influence https://bbbootstrap.com/snippets/shopping-cart-checkout-payment-options-86973257
const CartListCard = (props) => {
    console.log(props)
    const productContext = {
        id: props.CartListCard.id,
        name: props.CartListCard.name,
        quantity: 1,
        price: 200,
        image: props.CartListCard.image,

    }



    return (


        <div className="row d-flex justify-content-center border-top">
            <div className="col-5">
                <div className="rod d-flex">
                    <div className="book">  <img src={"https://trnbackend.herokuapp.com" + productContext.image} className="book-img"></img></div>
                    <div className="my-auto flex-column d-flex pad-left">
                        {<h6 className="mob-text">{productContext.name}</h6>}

                    </div>
                </div>
            </div>
            <div className="my-auto col-7">
                <div className="row text-right">

                    <div className="col-4">
                        <div className="row px-3 justify-content-between">
                            <a ><FaMinusCircle /></a>
                            <small> 1</small>
                            <a > <FaPlusCircle /></a>
                        </div>
                    </div>
                    <div className="col-4">
                        <h6 className="mob-text">200 nok</h6>
                    </div>

                    <div className="col-4">
                        <button> Remove</button>
                        <button> Add to fav</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CartListCard;