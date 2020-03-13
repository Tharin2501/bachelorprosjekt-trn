import React, { useState, useEffect } from "react";
import { FaHeart, FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductgridCard = props => {
  var initialprice = 200;
  console.log(props.productcard);
  //console.log(props.productgridCard);
  // change color of hearthfunction
  const [productName, setProductName] = useState(props.productcard.name);
  const [productImage, setProductImage] = useState(
    props.productcard.image[0].url
  );
  const [heartColor, setheartColor] = useState("black");
  const [numberOfProducts, setNumberOfProducts] = useState(1);
  const [price, setPrice] = useState(initialprice);
  const [quantity, setQuantity] = useState(100);

  function changeHeartcolor() {
    if (heartColor === "black") {
      setheartColor("red");
    } else {
      setheartColor("black");
    }
  }
  ///// end chage color of hearthfunction

  function changeNumberofProducts(value) {
    if (value === "increaseAmount") {
      if (numberOfProducts < 99) {
        setNumberOfProducts(numberOfProducts + 1);
      } else {
        alert("U cant add more then 99 products");
      }
    } else {
      if (numberOfProducts - 1 >= 1) {
        setNumberOfProducts(numberOfProducts - 1);
      } else {
        alert("invalid number");
      }
    }
  }

  return (
    <div className="d-flex">
      <div className="card card-1">
        <div className="pr-3 row justify-content-end">
          <a onClick={() => changeHeartcolor()}>
            <FaHeart color={heartColor} />
          </a>
        </div>
        <div className="product-pic">
          {" "}
          <img
            className="pic1"
            src={"https://trnbackend.herokuapp.com" + productImage}
          />{" "}
        </div>
        <small className="category"> lepper</small>
        <h5 className="product-name"> {productName}</h5>
        <div className="row px-3 justify-content-between">
          <p className="price">{price} kr</p>
          <p className="price">{quantity}ml</p>
        </div>
        <div className="row px-3 justify-content-between">
          <a onClick={() => changeNumberofProducts("decAmount")}>
            <FaMinusCircle />
          </a>
          <small> {numberOfProducts}</small>
          <a onClick={() => changeNumberofProducts("increaseAmount")}>
            {" "}
            <FaPlusCircle />
          </a>
        </div>

        <button type="button" className="btn btn-dark">
          Buy
        </button>
      </div>
    </div>
  );
};
export default ProductgridCard;
