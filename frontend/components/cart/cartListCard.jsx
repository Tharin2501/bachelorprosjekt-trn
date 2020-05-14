import React, { useState, useEffect, useContext } from "react"
import { FaHeart, FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import {addOneProductToCart, removeOneProduct} from "../cookieHandler"
import Link from "next/link";

/*
    <Link href={{ pathname: "/produktside", query: { id: productcard.id } }}>
            <a><h5 className="product-name"> {productName}</h5></a>
          </Link>
          */

import Cookie from "js-cookie"
// heavy influence https://bbbootstrap.com/snippets/shopping-cart-checkout-payment-options-86973257
const CartListCard = (props) => {
    const productContext = {
        id: props.CartListCard.id,
        name: props.CartListCard.name,
        quantity: props.CartListCard.quantity,
        price: props.CartListCard.price,
        image: props.CartListCard.image,

    }


    const [numberOfProducts, setNumberOfProducts] = useState(productContext.quantity);

    const deleteProductFunction = () => {
        deleteProduct(productContext);
        props.onDelete();
    }

    return (


        <div className="row d-flex justify-content-center border-top">
            <div className="col-5">
                <div className="row d-flex">
                    <div className="book">  <Link href={{ pathname: "/produktside", query: { id: productContext.id } }}><img src={"https://trnbackend.herokuapp.com" + productContext.image} alt={""} className="book-img"></img></Link></div>
                    <div className="my-auto flex-column d-flex pad-left">
                        <Link href={{ pathname: "/produktside", query: { id: productContext.id } }}><a><h6 className="mob-text">{productContext.name}</h6></a></Link>

                    </div>
                </div>
            </div>

            <div className="my-auto col-7">
                <div className="row">
                    <div className="col-7">
                        <a onClick={(() => changeNumberofProducts("decAmount"))}><FaMinusCircle alt={"minus"} /></a>
                        <small> {numberOfProducts}</small>
                        <a onClick={(() => changeNumberofProducts("increaseAmount"))}> <FaPlusCircle alt={"pluss"} /></a>
                    </div>
                    <div className="col-xs-10 ml-2 mb-3 mt-1">
                        <h6 className="mob-text">{productContext.price}nok</h6>
                    </div>
                    <div className="ml-4">
                        <button onClick={(() => deleteProductFunction())} className="delete-btn"> Remove</button>
                        <button className="text-nowrap add-btn"> Add to fav</button>
                    </div>
                </div>
            </div>

            </div>

    );

    function changeNumberofProducts(value) {
        if (value === "increaseAmount") {
            if (numberOfProducts < 99) {
                setNumberOfProducts(numberOfProducts + 1)
            } else {
                alert("U cant add more then 99 products" + cartStorage)
            }

        } else {
            if ((numberOfProducts - 1) >= 1) {
                setNumberOfProducts(numberOfProducts - 1)
            } else {

            }
        }
    }

    function deleteProduct(productContext) {

        removeOneProduct(productContext, "cartStorage")
        props.setcart(Cookie.getJSON("cartStorage"))

    }


};

export default CartListCard;
