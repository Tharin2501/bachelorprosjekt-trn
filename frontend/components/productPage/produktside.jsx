import React, { useState, useContext } from "react";
import { Button, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import ProduktTab from "../ProduktTab";
import {
  addtoCart,
  addItemToFavorites,
  changeNumberOfProducts,
} from "../cart/cartHandler";
import {
  FaShoppingCart,
  FaShoppingBasket,
  FaHeart,
  FaPlus,
  FaPlusCircle,
  FaMinusCircle,
} from "react-icons/fa";
import { calculatePrice, calculateCollectMePoints } from "../cookieHandler";
import CartTotalPriceContext from "../context/cartTotalPriceContext";

const Produktside = (props) => {
  var productContext = {
    id: props.productSide.id,
    name: props.productSide.ProductName,
    quantity: 1,
    price: props.productSide.pris,
    image: props.productSide.image[0].url,
  };

  //Variables
  const [numberOfProducts, setNumberOfProducts] = useState(1);

  /** Adding to Cart */
  const { price, ChangeTotalPrice } = useContext(CartTotalPriceContext);
  const changeTotalPriceContextValue = (newValue, changeValueFunction) => {
    changeValueFunction(newValue);
  };

  const addToShoppingCartAndRecalcuatePrice = () => {
    addtoCart(productContext, numberOfProducts);
    changeTotalPriceContextValue(calculatePrice(), ChangeTotalPrice);
  };
  /** Adding to Cart END*/

  return (
    <div className="product-page-bg w-100 h-100 p-3 d-inline-block overflow-auto">
      {/** Breadcrumbs start */}
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Hjem</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#">Alkohol</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#">Vin</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#">Rødvin</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Nåværende rødvin</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Row>
        {/** Image start */}
        <Col lg="6" xs="12" className="text-center h-auto w-50">
          <img
            className="mh-25 w-25"
            src={
              "https://trnbackend.herokuapp.com" +
              props.productSide.image[0].url
            }
          />
        </Col>
        {/** Product title++ start */}
        <Col lg="6" xs="12" className="text-left overflow-auto w-50">
          <h2>{productContext.name}</h2>
          <h3>Volum</h3>
          <Row className="">
            <Col xs="6">
              <h4>{productContext.price}</h4>
            </Col>
            <Col>
              <h3>
                <Row>
                  <Col xs="4" sm="4" lg="4">
                    <Button
                      onClick={() =>
                        setNumberOfProducts(
                          changeNumberOfProducts("decAmount", numberOfProducts)
                        )
                      }
                      className="bg-transparent border-0 p-0"
                    >
                      <FaMinusCircle color="black" />
                    </Button>
                  </Col>
                  <Col xs="4" sm="4" lg="4">
                    {numberOfProducts}
                  </Col>
                  <Col xs="4" sm="4" lg="4">
                    <Button
                      onClick={() =>
                        setNumberOfProducts(
                          changeNumberOfProducts(
                            "increaseAmount",
                            numberOfProducts
                          )
                        )
                      }
                      className="bg-transparent border-0 p-0"
                    >
                      {" "}
                      <FaPlusCircle color="black" />
                    </Button>
                  </Col>
                </Row>
              </h3>
            </Col>
          </Row>
          <div className="text-center w-75 m-auto">
            <Row className="p-3">
              <Col>
                <Button
                  onClick={() => addToShoppingCartAndRecalcuatePrice()}
                  className="bg-light border border-secondary text-dark p-2 w-100"
                >
                  <Row>
                    <Col>
                      <FaShoppingBasket color="black" />
                    </Col>
                    <Col>Legg til i handleposen</Col>
                  </Row>
                </Button>
              </Col>
            </Row>
            <Row className="p-3">
              <Col>
                <Button
                  onClick={() => addItemToFavorites(productContext)}
                  className="bg-light border border-secondary text-dark p-2 w-100"
                >
                  <Row>
                    <Col>
                      <FaHeart className="black" />
                    </Col>
                    <Col>Legg til i ønskelisten</Col>
                  </Row>
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      {/** Info tabs start */}
      man tjener {calculateCollectMePoints(productContext.price)} collect me
      points for dette kjøpet
      <Row className="pb-5 text-left">
        <Col>
          <ProduktTab />
        </Col>
      </Row>
    </div>
  );
};

export default Produktside;
