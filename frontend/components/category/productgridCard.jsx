

import React, { useState, useEffect, useContext } from "react"
import { FaHeart, FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";
import { getCart, addOneProductToCart, addOneProductToFavorites } from "../cookieHandler"
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
    name: productcard.name,
    quantity: 1,
    price: 200,
    image: productcard.image[0].url,

  }


  // change color of hearthfunction
  const [productName, setProductName] = useState(productContext.name)
  const [productImage, setProductImage] = useState(productContext.image)
  const [heartColor, setheartColor] = useState("black");
  const [numberOfProducts, setNumberOfProducts] = useState(1);
  const [price, setPrice] = useState(productContext.price);
  const [quantity, setQuantity] = useState(1);



  // er en string må gjøres til js array
  /*const [rememberMe, setRememberMe] = useState(() => (initialRememberValue));


  useEffect(() => {
      Cookie.set("rememberMe", (rememberMe)); //  JSON.stringify makes bool work

  }, [rememberMe]);

  function getCart() {
      Cookie.set("rememberMe", (rememberMe))
  }
  */

  function addtoCart() {

    var tempProdcutContext = productContext

    tempProdcutContext.quantity = numberOfProducts

    addOneProductToCart(tempProdcutContext)
  }


  function addtoFavorites() {

    changeHeartcolor()
    //console.log(productContext)
    var tempProdcutContext = productContext

    tempProdcutContext.quantity = 1
    console.log(tempProdcutContext)
    addOneProductToFavorites(tempProdcutContext)
  }



  function changeHeartcolor() {
    if (heartColor === "black") {
      setheartColor("red");
    } else {
      setheartColor("black");
    }
  }
  ///// end change color of hearthfunction

  function changeNumberofProducts(value) {
    if (value === "increaseAmount") {
      if (numberOfProducts < 99) {
        setNumberOfProducts(numberOfProducts + 1)
      } else {
        alert("U cant add more then 99 products" + rememberMe)
      }

    } else {
      if ((numberOfProducts - 1) >= 1) {
        setNumberOfProducts(numberOfProducts - 1)
      } else {

        alert("U cant have minus products" + rememberMe)
      }
    }
  }

  function goToProductPage(ProductgridCard) {

    //Router.push("/produktside")
    console.log("WTF")
  }

  // <Produktside Produktside={ProductgridCard}></Produktside>


  return (

    <div className="d-flex">
      <div className="card card-1">
        <div className="pr-3 row justify-content-end">
          <a onClick={(() => addtoFavorites())}><FaHeart color={heartColor} /></a>
        </div>
        <div className="product-pic"> <img className="pic1" src={"https://trnbackend.herokuapp.com" + productImage} /> </div>
        <small className="category"> lepper</small>
        <h5 className="product-name"> {productName}</h5>
        <div className="row px-3 justify-content-between">
          <p className="price">{price} kr</p>
          <p className="price">{quantity}ml</p>

        </div>
        <div className="row px-3 justify-content-between">
          <a onClick={(() => changeNumberofProducts("decAmount"))}><FaMinusCircle /></a>
          <small> {numberOfProducts}</small>
          <a onClick={(() => changeNumberofProducts("increaseAmount"))}> <FaPlusCircle /></a>
        </div>

        <Link href={{ pathname: "/produktside", query: { id: productcard.id } }}><button type="button" className="btn btn-dark">Buy</button></Link>
      </div>
    </div>
  );



};


export default ProductgridCard;
