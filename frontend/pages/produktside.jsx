import React from "react";
import { Button, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import ProduktTab from "../components/ProduktTab";

const Produktside = () => (
  <div className="bg-info w-100 h-100 p-3 d-inline-block overflow-auto">
    {/** Breadcrumbs start */}
    <div>
      <Breadcrumb>
        <BreadcrumbItem>
          <a href="/">Hjem</a>
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
      <Col xs="6" className="text-center bg-warning h-auto w-50">
        <img
          className="mh-25 w-25"
          src="https://trnbackend.herokuapp.com/files/SPF50+Anthelios.jpg"
        />
      </Col>
      {/** Product title++ start */}
      <Col xs="6" className="bg-success text-left overflow-auto w-50">
        <h2>PRODUKTTITTEL</h2>
        <h3>Volum</h3>
        <Row className="bg-danger">
          <Col xs="6">
            <h4>Pris</h4>
          </Col>
          <Col xs="6">
            <h3>
              <Row>
                <Col xs="6" sm="4">
                  <Button className="border border-info rounded-circle bg-light text-dark">
                    -
                  </Button>
                </Col>
                <Col xs="6" sm="4">
                  1
                </Col>
                <Col sm="4">
                  <Button className="border border-info rounded-circle bg-light text-dark">
                    +
                  </Button>
                </Col>
              </Row>
            </h3>
          </Col>
        </Row>
        <div className="text-center w-75 m-auto">
          <Row className="bg-info p-3">
            <Col>
              <Button>Legg til i handleposen</Button>
            </Col>
          </Row>
          <Row className="bg-primary p-3">
            <Col>
              <Button>Legg til i ønskelisten</Button>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
    {/** Info tabs start */}
    <Row className="bg-secondary text-center p-3">
      <Col xs="6" sm="4">
        <Button>Info</Button>
      </Col>
      <Col xs="6" sm="4">
        <Button>Ingredienser</Button>
      </Col>
      <Col sm="4">
        <Button>Omtale</Button>
      </Col>
    </Row>

    <Row className="bg-warning pb-5 text-left">
      <Col>
        <ProduktTab />
      </Col>
    </Row>
  </div>
);

export default Produktside;

/**
 * 
 * <div className="container text-left w-50 bg-success p-5">
      <Row className="p-3 bg-danger">
        <Col>
          Lorizzle ipsizzle hizzle sit amizzle, consectetuer own yo' the bizzle.
          Phat sapien velizzle, shizzlin dizzle volutpat, suscipizzle stuff,
          gravida izzle, funky fresh. Pellentesque yo tortor. Sheezy erizzle.
          Sizzle go to hizzle fizzle mah nizzle break yo neck, yall for sure
          pizzle.
        </Col>
      </Row>
      <Row className="p-3 bg-info">
        <Col>
          Lorizzle ipsizzle hizzle sit amizzle, consectetuer own yo' the bizzle.
          Phat sapien velizzle, shizzlin dizzle volutpat, suscipizzle stuff,
          gravida izzle, funky fresh. Pellentesque yo tortor. Sheezy erizzle.
          Sizzle go to hizzle fizzle mah nizzle break yo neck, yall for sure
          pizzle.
        </Col>
      </Row>
      <Row className="p-3 bg-danger">
        <Col>
          Lorizzle ipsizzle hizzle sit amizzle, consectetuer own yo' the bizzle.
          Phat sapien velizzle, shizzlin dizzle volutpat, suscipizzle stuff,
          gravida izzle, funky fresh. Pellentesque yo tortor. Sheezy erizzle.
          Sizzle go to hizzle fizzle mah nizzle break yo neck, yall for sure
          pizzle.
        </Col>
      </Row>
      <Row className="p-3 bg-info">
        <Col>
          Lorizzle ipsizzle hizzle sit amizzle, consectetuer own yo' the bizzle.
          Phat sapien velizzle, shizzlin dizzle volutpat, suscipizzle stuff,
          gravida izzle, funky fresh. Pellentesque yo tortor. Sheezy erizzle.
          Sizzle go to hizzle fizzle mah nizzle break yo neck, yall for sure
          pizzle.
        </Col>
      </Row>
    </div>
 */
