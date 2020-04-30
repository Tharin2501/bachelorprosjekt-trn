import React, { useState, useEffect, useContext } from "react"
import { FaHeart, FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { removeOneProduct } from "../cookieHandler"
import Link from "next/link";

/*
    <Link href={{ pathname: "/produktside", query: { id: productcard.id } }}>
            <a><h5 className="product-name"> {productName}</h5></a>
          </Link>
          */

import Cookie from "js-cookie"
// heavy influence https://bbbootstrap.com/snippets/shopping-cart-checkout-payment-options-86973257
const CartListCard = (props) => {
    console.log(props)
    const productContext = {
        id: props.CartListCard.id,
        name: props.CartListCard.name,
        quantity: props.CartListCard.quantity,
        price: 200,
        image: props.CartListCard.image,

    }


    const [numberOfProducts, setNumberOfProducts] = useState(productContext.quantity);

    /*
      <Link href={{ pathname: "/produktside", query: { id: productcard.id } }}>
              <a><h5 className="product-name"> {productName}</h5></a>
            </Link>
            */

    return (


        <div className="row d-flex justify-content-center border-top">
            <div className="col-5">
                <div className="rod d-flex">
                    <div className="book">  <Link href={{ pathname: "/produktside", query: { id: productContext.id } }}><img src={"https://trnbackend.herokuapp.com" + productContext.image} className="book-img"></img></Link></div>
                    <div className="my-auto flex-column d-flex pad-left">
                        <Link href={{ pathname: "/produktside", query: { id: productContext.id } }}><a><h6 className="mob-text">{productContext.name}</h6></a></Link>

                    </div>
                </div>
            </div>
            <div className="my-auto col-7">
                <div className="row text-right">

                    <div className="col-4">
                        <div className="row px-3 justify-content-between">
                            <a onClick={(() => changeNumberofProducts("decAmount"))}><FaMinusCircle /></a>
                            <small> {numberOfProducts}</small>
                            <a onClick={(() => changeNumberofProducts("increaseAmount"))}> <FaPlusCircle /></a>
                        </div>
                    </div>
                    <div className="col-4">
                        <h6 className="mob-text">200 nok</h6>
                    </div>

                    <div className="col-4">
                        <button onClick={(() => deleteProduct(productContext))}> Remove</button>
                        <button> Add to fav</button>
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