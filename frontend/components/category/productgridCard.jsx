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
import { checkIfSpaceOrEnterPressed } from "../utils/accessibilityUtil"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import CartModalCard from "../CartModalCard"
import { useRouter } from "next/router";
var jsonObj = [];
jsonObj = JSON.stringify(jsonObj);

const ProductgridCard = ({ productcard, initialRememberValue = jsonObj }, props) => {

  const {
    buttonLabel,
    className
  } = props;

  // change color of heartfunction
  const [heartColor, setheartColor] = useState("black");
  const [numberOfProducts, setNumberOfProducts] = useState(1);

  // to pass around to cart

  const productContext = {
    id: productcard.id,
    name: productcard.ProductName,
    quantity: 1,
    price: productcard.pris,
    image: productcard.image[0].url,

  };


  const addtoFavorites = () => {
    changeHeartcolor();
    //const productContext = createProductContext();
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
  const router = useRouter();

  const addToShoppingCartAndRecalcuatePrice = () => {
    // const productContext = createProductContext();
    addtoCart(productContext, numberOfProducts);
    changeTotalPriceContextValue(calculatePrice(), ChangeTotalPrice);
    toggleModal();
  };
  /** Adding to Cart END*/
  /* MODAL*/


  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  const goToCart = () => {
    router.push("/shoppingcart")
  }


  return (
    <div className="card  card-1">
      <div className="pr-3 row justify-content-stretch">
        <Link href={{ pathname: "/merkesidedetalj", query: { id: productcard.brand.id } }}>
          <a  >
            <div tabIndex="0" className="p-2 bd-highlight">
              <small className="category">   {productcard.brand.name}</small>
            </div>
          </a>

        </Link>


        <div className="ml-auto p-2 bd-highlight">
          <a tabIndex="0" onClick={() => addtoFavorites()} onKeyDown={() => { checkIfSpaceOrEnterPressed(event) ? addtoFavorites() : null }}>
            <FaHeart alt={"Hjerte"} color={heartColor} />
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
          <h6 className="product-name"> {productcard.ProductName}</h6>
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
          <FaMinusCircle alt={"minus"} />
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
          <FaPlusCircle alt={"pluss"} />
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
      <Modal isOpen={modal} toggle={toggleModal} className={className}>
        <ModalHeader toggle={toggleModal}>Produktet er nå lagt i din handlekurven</ModalHeader>
        <ModalBody>

          <CartModalCard productContext={productContext} addToFavoriteFunction={addtoFavorites}></CartModalCard>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>Fortsett å handle</Button>
          <Button color="secondary" onClick={goToCart}>Gå til handllekurv</Button>
        </ModalFooter>
      </Modal>
    </div >
  );
};

export default ProductgridCard;
