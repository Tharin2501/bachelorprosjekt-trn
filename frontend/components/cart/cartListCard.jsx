import React, { useState, useEffect, useContext } from "react"
import { FaHeart, FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { addOneProductToCart, removeOneProduct, } from "../cookieHandler"
import Link from "next/link";
import Cookie from "js-cookie"
import { ChangeQuantityOfProductsOnProduct, addItemToFavorites, } from "./cartHandler"
import { Media, MediaContextProvider } from "../media"
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

    const setAsFav = () => {
        addItemToFavorites(productContext)
    }
    return (
        <MediaContextProvider>
            <Media at="sm">
                <div className="row border-top">
                    <div className="col-7">
                        <div className="row justify-content-start">
                            <div className="book">  <Link href={{ pathname: "/produktside", query: { id: productContext.id } }}><img src={"https://trnbackend.herokuapp.com" + productContext.image} alt={""} className="book-img"></img></Link></div>
                            <div className="mx-auto my-auto">
                                <Link href={{ pathname: "/produktside", query: { id: productContext.id } }}><a><h6>{productContext.name}</h6></a></Link>

                            </div>
                        </div>
                    </div>

                    <div className="my-auto col-5">
                        <div className="row">
                            <div className="col-8">
                                <a onClick={(() => changeNumberofProducts("decAmount"))}><FaMinusCircle alt={"minus"} /></a>
                                <small> {numberOfProducts}</small>
                                <a onClick={(() => changeNumberofProducts("increaseAmount"))}> <FaPlusCircle alt={"pluss"} /></a>
                            </div>

                            <div className="col-4 mb-3 mt-1">
                                <h6>{productContext.price}nok</h6>
                            </div>

                            <div className="ml-2">
                                <button onClick={(() => deleteProductFunction())} className="delete-btn"> Fjern alle</button>
                                <button className="text-nowrap add-btn" onClick={() => setAsFav()}> Legg til i favoritter</button>
                            </div>
                        </div>
                    </div>

                </div>
            </Media>
            <Media greaterThan="sm">
                <div className="row border-top">
                    <div className="col-7">
                        <div className="row justify-content-start">
                            <div className="book">  <Link href={{ pathname: "/produktside", query: { id: productContext.id } }}><img src={"https://trnbackend.herokuapp.com" + productContext.image} alt={""} className="book-img"></img></Link></div>
                            <div className="mx-auto my-auto">
                                <Link href={{ pathname: "/produktside", query: { id: productContext.id } }}><a><h6>{productContext.name}</h6></a></Link>

                            </div>
                        </div>
                    </div>

                    <div className="my-auto col-5">
                        <div className="row">
                            <div className="col-8">
                                <div className="row pl-2">

                                    <a className="p-3 facircle" onClick={(() => changeNumberofProducts("decAmount"))}><FaMinusCircle alt={"minus"} /></a>
                                    <h5 className="pt-3"> {numberOfProducts}</h5>
                                    <a className="p-3 facircle" onClick={(() => changeNumberofProducts("increaseAmount"))}> <FaPlusCircle alt={"pluss"} /></a>
                                </div>

                            </div>

                            <div className="col-4 mb-3 mt-1">
                                <h6>{productContext.price}nok</h6>
                            </div>

                            <div className="ml-2">
                                <button onClick={(() => deleteProductFunction())} className="delete-btn"> Fjern alle</button>
                                <button className="text-nowrap add-btn" onClick={() => setAsFav()}> Legg til i favoritter</button>
                            </div>
                        </div>
                    </div>

                </div>
            </Media>

        </MediaContextProvider >


    );

    function changeNumberofProducts(value) {
        if (value === "increaseAmount") {
            if (numberOfProducts < 99) {
                const newValue = numberOfProducts + 1
                setNumberOfProducts(newValue)
                ChangeQuantityOfProductsOnProduct(productContext, newValue)
            } else {
                alert("Man kan ikke legge inn med enn 99 produkter" + cartStorage)
            }

        } else {
            if ((numberOfProducts - 1) >= 1) {
                const newValue = numberOfProducts - 1
                setNumberOfProducts(newValue)
                ChangeQuantityOfProductsOnProduct(productContext, newValue)
            } else {
                deleteProductFunction();
            }
        }
        props.onDelete();
    }

    function deleteProduct(productContext) {

        removeOneProduct(productContext, "cartStorage")
        props.setcart(Cookie.getJSON("cartStorage"))

    }


};

export default CartListCard;
