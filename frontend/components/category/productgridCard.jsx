import React, { useState, useEffect, useContext } from "react"
import { FaHeart, FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";

import Cookie from "js-cookie";

//import parsCookies from "../components/cart/parseCookies";
import parsCookies from "../cart/parseCookies";

var jsonObj = [

]

jsonObj = JSON.stringify(jsonObj)


const ProductgridCard = (props, { initialRememberValue = jsonObj }) => {
    // to pass around to cart
    const productContext = {
        id: props.productcard.id,
        name: props.productcard.name,
        quantity: 1,
        price: 200,
        image: props.productcard.image[0].url,

    }

    // change color of hearthfunction
    const [productName, setProductName] = useState(productContext.name)
    const [productImage, setProductImage] = useState(productContext.image)
    const [heartColor, setheartColor] = useState("black");
    const [numberOfProducts, setNumberOfProducts] = useState(1);
    const [price, setPrice] = useState(productContext.price);
    const [quantity, setQuantity] = useState(100);


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
        var oldCartList = Cookie.getJSON("rememberMe")


        oldCartList.push(productContext)

        const result = JSON.stringify(oldCartList)

        //console.log(oldCartList)

        console.log(result)

        Cookie.set("rememberMe", (result))
        /*
        var result
      
        alert(result)
        */
    }


    function changeHeartcolor() {
        if (heartColor === "black") {
            setheartColor("red")
        } else {
            setheartColor("black")
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

                //getCart();
                addtoCart();
                //alert("invalid number" + rememberMe);
            }
        }
    }


    return (

        <div className="d-flex">
            <div className="card card-1">
                <div className="pr-3 row justify-content-end">
                    <a onClick={(() => changeHeartcolor())}><FaHeart color={heartColor} /></a>
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

                <button onClick={(() => addToCart(productContext))} type="button" className="btn btn-dark">Buy</button>
            </div>
        </div>
    );

    function addToCart(product) {


        /*
        const alreadyInCart = cartItems.findIndex(
            item => item.id === product.id
        );
        if (alreadyInCart === -1) {
            const updatedItems = cartItems.concat({
                ...product,
                quantity: 1
            });
            this.setState({ cartItems: updatedItems }, () => setCart(updatedItems));
        } else {
            const updatedItems = [cartItems];
            updatedItems[alreadyInCart].quantity += 1;
            this.setState({ cartItems: updatedItems }, () => setCart(updatedItems));
        }
        */
    };



    function deleteItemFromCart(itemtoDelete) {
        const filteredItems = this.state.cartItems.filter(
            item => item.id !== itemtoDelete
        );
        this.setState({ cartItems: filteredItems }, () => setCart(filteredItems));
    };

};
/*
ProductgridCard.getInitialProps = ({ req }) => {
    const cookies = parsCookies(req);


    return {
        initialRememberValue: cookies.rememberMe
    };
};
*/

export default ProductgridCard;