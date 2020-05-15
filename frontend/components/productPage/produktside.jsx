import React, { useState, useContext } from "react";
import { Button, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import ProduktTab from "../ProduktTab";
import {
  addtoCart,
  addItemToFavorites,
  changeNumberOfProducts,
} from "../cart/cartHandler";
import {
  FaShoppingBasket,
  FaHeart,
  FaPlusCircle,
  FaMinusCircle,
} from "react-icons/fa";
import { calculatePrice, calculateCollectMePoints } from "../cookieHandler";
import CartTotalPriceContext from "../context/cartTotalPriceContext";
import Link from "next/link";
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

  const collectMePoints = calculateCollectMePoints(productContext.price)

  return (
    <div className="container">
      <div className="">
        {/** Breadcrumbs start */}
        <div>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="/">Forsiden</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href={{ pathname: "/category", query: { id: props.productSide.sub_categories[0].category.id } }}>


                <a tabIndex="0" className="category">{props.productSide.sub_categories[0].categoryName}</a>

              </Link>



            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="#">{props.productSide.sub_categories[0].category.name}</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>{productContext.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Row>
          {/** Image start */}
          <Col lg="6" xs="12" className="text-center h-auto w-50">
            <img
              className="productImageSize"
              src={
                "https://trnbackend.herokuapp.com" +
                props.productSide.image[0].url
              } alt={" "}
            />
          </Col>
          {/** Product title++ start */}
          <Col lg="6" xs="12" className="text-left overflow-auto w-50">
            <h3>{productContext.name}</h3>
            <h4>Volume: {props.productSide.Volume}</h4>

            <Row className="">
              <Col xs="6">
                <h3>Pris: {productContext.price} kr</h3>
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
                        <FaMinusCircle alt={"minus"} color="black" />
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
                        <FaPlusCircle alt="pluss" color="black" />
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
              <Row>

                <Col>
                  <Link href={{ pathname: "/merkesidedetalj", query: { id: props.productSide.brand.id } }}>
                    <a tabIndex="0" className="category" >

                      Se alt fra {props.productSide.brand.name}

                    </a>

                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        {/** Info tabs start */}

        <Row className="pb-5 text-left">
          <Col>
            <ProduktTab product={props.productSide} collectmePoints={collectMePoints} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Produktside;
