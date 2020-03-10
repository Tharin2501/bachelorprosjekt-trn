import React from "react";
import { Button, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import ProduktTab from "../components/ProduktTab";
import {
  FaShoppingCart,
  FaShoppingBasket,
  FaHeart,
  FaPlus,
  FaPlusCircle,
  FaMinusCircle
} from "react-icons/fa";

const Produktside = () => (
  <div className="bg-info w-100 h-100 p-3 d-inline-block overflow-auto">
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
    <h1>Dette er produktsiden</h1>
    <Row>
      {/** Image start */}
      <Col lg="6" xs="12" className="text-center bg-warning h-auto w-50">
        <img
          className="mh-25 w-25"
          src="https://trnbackend.herokuapp.com/files/SPF50+Anthelios.jpg"
        />
      </Col>
      {/** Product title++ start */}
      <Col lg="6" xs="12" className="bg-success text-left overflow-auto w-50">
        <h2>PRODUKTTITTEL</h2>
        <h3>Volum</h3>
        <Row className="bg-danger">
          <Col xs="6">
            <h4>Pris</h4>
          </Col>
          <Col>
            <h3>
              <Row>
                <Col xs="6" sm="4">
                  <Button className="bg-transparent border-0">
                    <FaMinusCircle color="black" />
                  </Button>
                </Col>
                <Col xs="6" sm="4">
                  1
                </Col>
                <Col sm="4">
                  <Button className="bg-transparent border-0">
                    <FaPlusCircle color="black" />
                  </Button>
                </Col>
              </Row>
            </h3>
          </Col>
        </Row>
        <div className="text-center w-75 m-auto">
          <Row className="bg-info p-3">
            <Col>
              <Button className="bg-light border border-secondary text-dark p-2 w-100">
                <Row>
                  <Col>
                    <FaShoppingBasket color="black" />
                  </Col>
                  <Col>Legg til i handleposen</Col>
                </Row>
              </Button>
            </Col>
          </Row>
          <Row className="bg-primary p-3">
            <Col>
              <Button className="bg-light border border-secondary text-dark p-2 w-100">
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
    <Row className="bg-warning pb-5 text-left">
      <Col>
        <ProduktTab />
      </Col>
    </Row>
  </div>
);

export default Produktside;
