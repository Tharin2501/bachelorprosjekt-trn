
import React, { useState, useEffect, useContext } from "react"
import { FaHeart, FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { calculatePrice, setCart, getCart } from "../cart/cart"
import "bootstrap/dist/css/bootstrap.min.css";


const ProductgridCard = (props) => {
    // to pass around to cart
    const productContext = {
        id: props.productcard.id,
        name: props.productcard.name,

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

    const [cartItems, setCartItems] = useState(getCart());



    function changeHeartcolor() {
        if (heartColor === "black") {
            setheartColor("red")
        } else {
            setheartColor("black")
        }
    }
    ///// end chage color of hearthfunction

    function changeNumberofProducts(value) {
        if (value === "increaseAmount") {
            if (numberOfProducts < 99) {
                setNumberOfProducts(numberOfProducts + 1)
            } else {
                alert("U cant add more then 99 products")
            }

        } else {
            if ((numberOfProducts - 1) >= 1) {
                setNumberOfProducts(numberOfProducts - 1)
            } else {
                alert("invalid number");
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

    };

    function deleteItemFromCart(itemtoDelete) {
        const filteredItems = this.state.cartItems.filter(
            item => item.id !== itemtoDelete
        );
        this.setState({ cartItems: filteredItems }, () => setCart(filteredItems));
    };

};
export default ProductgridCard;

