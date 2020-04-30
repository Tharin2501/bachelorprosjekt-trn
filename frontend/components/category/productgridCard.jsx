

import React, { useState, useEffect, useContext } from "react"
import { FaHeart, FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { getCart, addOneProductToCart, addOneProductToFavorites } from "../cookieHandler"
import { addtoCart, addItemToFavorites, changeNumberOfProducts } from "../cart/cartHandler"
import Produktside from "../productPage/produktside"
import Router from 'next/router'

import Cookie from "js-cookie";

//import parsCookies from "../components/cart/parseCookies";
import parsCookies from "../cart/parseCookies";
import Link from "next/link";


var jsonObj = [

]



jsonObj = JSON.stringify(jsonObj)



const ProductgridCard = ({ productcard, initialRememberValue = jsonObj }) => {
  // to pass around to cart
  var productContext = {
    id: productcard.id,
    name: productcard.ProductName,
    quantity: 1,
    price: productcard.pris,
    image: productcard.image[0].url,

  }


  // change color of hearthfunction
  const [productName, setProductName] = useState(productContext.name)
  const [productImage, setProductImage] = useState(productContext.image)
  const [heartColor, setheartColor] = useState("black");
  const [numberOfProducts, setNumberOfProducts] = useState(1);
  const [price, setPrice] = useState(productContext.price);
  const [quantity, setQuantity] = useState(1);


  function addtoFavorites() {

    changeHeartcolor()
    addItemToFavorites(productContext)
  }



  function changeHeartcolor() {
    if (heartColor === "black") {
      setheartColor("red");
    } else {
      setheartColor("black");
    }
  }
  ///// end change color of hearthfunction

  return (



    <div className="card  card-1">
      <div className="pr-3 row justify-content-end">
        <a onClick={(() => addtoFavorites())}><FaHeart color={heartColor} /></a>
      </div>
      <Link href={{ pathname: "/produktside", query: { id: productcard.id } }}>
        <div className="product-pic"> <img className="pic1" src={"https://trnbackend.herokuapp.com" + productImage} /> </div>
      </Link>
      <small className="category"> lepper</small>
      <Link href={{ pathname: "/produktside", query: { id: productcard.id } }}>
        <a><h5 className="product-name"> {productName}</h5></a>
      </Link>
      <div className="row px-3 justify-content-between">
        <p className="price">{price} kr</p>
        <p className="price">{quantity}ml</p>

      </div>
      <div className="row px-3 justify-content-between">
        <a onClick={(() => setNumberOfProducts(changeNumberOfProducts("decAmount", numberOfProducts)))}><FaMinusCircle /></a>
        <small> {numberOfProducts}</small>
        <a onClick={(() => setNumberOfProducts(changeNumberOfProducts("increaseAmount", numberOfProducts)))}> <FaPlusCircle /></a>
      </div>

      <button onClick={(() => addToShoppingCartAndRecalcuatePrice(productContext, numberOfProducts))} type="button" className="btn btn-dark">Legg i handlepose</button>


    </div>

  );



};


export default ProductgridCard;
