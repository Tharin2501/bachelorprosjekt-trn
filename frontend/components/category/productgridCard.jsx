import React, { useState, useContext } from "react";
import { FaHeart, FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import {
  addtoCart,
  addItemToFavorites,
  changeNumberOfProducts,
} from "../cart/cartHandler";
import Link from "next/link";
import CartTotalPriceContext from "../context/cartTotalPriceContext";
import { calculatePrice } from "../cookieHandler";

var jsonObj = [];
jsonObj = JSON.stringify(jsonObj);

const ProductgridCard = ({ productcard, initialRememberValue = jsonObj }) => {



  // change color of heartfunction
  const [heartColor, setheartColor] = useState("black");
  const [numberOfProducts, setNumberOfProducts] = useState(1);

  // to pass around to cart
  const createProductContext = () => {
    const productContext = {
      id: productcard.id,
      name: productcard.ProductName,
      quantity: 1,
      price: productcard.pris,
      image: productcard.image[0].url,

    };
    return productContext;
  }
  const addtoFavorites = () => {
    changeHeartcolor();
    const productContext = createProductContext();
    addItemToFavorites(productContext);
  }

  const changeHeartcolor = () => {
    if (heartColor === "black") {
      setheartColor("red");
    } else {
      setheartColor("black");
    }
  }

  ///// end change color of hearthfunction

  /** Adding to Cart */
  const { price, ChangeTotalPrice } = useContext(CartTotalPriceContext);
  const changeTotalPriceContextValue = (newValue, changeValueFunction) => {
    changeValueFunction(newValue);
  };

  const addToShoppingCartAndRecalcuatePrice = () => {
    const productContext = createProductContext();
    addtoCart(productContext, numberOfProducts);
    changeTotalPriceContextValue(calculatePrice(), ChangeTotalPrice);
  };
  /** Adding to Cart END*/

  return (
    <div className="card  card-1">
      <div className="pr-3 row justify-content-stretch">
        <Link href={{ pathname: "/merkesidedetalj", query: { id: productcard.brand.id } }}>
          <div className="p-2 bd-highlight">
            <small className="category">   <a >{productcard.brand.name}</a></small>
          </div>
        </Link>


        <div className="ml-auto p-2 bd-highlight">
          <a onClick={() => addtoFavorites()}>
            <FaHeart color={heartColor} />
          </a>
        </div>
      </div>
      <Link href={{ pathname: "/produktside", query: { id: productcard.id } }}>
        <div className="product-pic">
          {" "}
          <img
            className="pic1"
            src={"https://trnbackend.herokuapp.com" + productcard.image[0].url}
          />{" "}
        </div>
      </Link>
      <Link href={{ pathname: "/produktside", query: { id: productcard.id } }}>
        <a>
          <h5 className="product-name"> {productcard.name}</h5>
        </a>
      </Link>
      <div className="row px-3 justify-content-around">
        <p className="price">{productcard.pris} kr</p>
        <div className="vl"></div>
        <p className="price">{productcard.Volume}</p>
      </div>
      <div className="row px-3 justify-content-between">
        <a
          onClick={() =>
            setNumberOfProducts(
              changeNumberOfProducts("decAmount", numberOfProducts)
            )
          }
        >
          <FaMinusCircle />
        </a>
        <p className="setNumberOfProducts"> {numberOfProducts}</p>
        <a
          onClick={() =>
            setNumberOfProducts(
              changeNumberOfProducts("increaseAmount", numberOfProducts)
            )
          }
        >
          {" "}
          <FaPlusCircle />
        </a>
      </div>

      <button
        onClick={() =>
          addToShoppingCartAndRecalcuatePrice(numberOfProducts)
        }
        type="button"
        className="btn btn-light"
      >
        Legg i handlepose
      </button>
    </div >
  );
};

export default ProductgridCard;
