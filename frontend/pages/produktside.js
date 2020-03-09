import React from "react";
import { Button, Row, Col } from "reactstrap";

const Produktside = () => (
  <div className="bg-info w-100 h-100 p-3 d-inline-block overflow-auto">
    <h1>Dette er produktsiden</h1>
    <Row>
      <Col xs="6" className="text-center bg-warning h-auto w-50">
        <img
          className="mh-25 w-25"
          src="https://trnbackend.herokuapp.com/files/SPF50+Anthelios.jpg"
        />
      </Col>
      <Col xs="6" className="bg-success text-left overflow-auto w-50">
        <h2>PRODUKTNAVN</h2>
        <h3>Volum</h3>
        <Row className="bg-danger">
          <Col xs="6">
            <h4>Pris</h4>
          </Col>
          <Col xs="6">
            <h3>
              <Row>
                <Col xs="6" sm="4">
                  +
                </Col>
                <Col xs="6" sm="4">
                  1
                </Col>
                <Col sm="4">-</Col>
              </Row>
            </h3>
          </Col>
        </Row>
        <div className="text-center w-75 m-auto">
          <Row className="bg-info p-3">
            <Col>Legg til i handleposen</Col>
          </Row>
          <Row className="bg-primary p-3">
            <Col>Legg til i ønskelisten</Col>
          </Row>
        </div>
      </Col>
    </Row>
    <div className="container text-left w-50 bg-secondary p-5">
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
  </div>
);

export default Produktside;

/**
 * <p>
          Lorizzle ipsizzle hizzle sit amizzle, consectetuer own yo' the bizzle.
          Phat sapien velizzle, shizzlin dizzle volutpat, suscipizzle stuff,
          gravida izzle, funky fresh. Pellentesque yo tortor. Sheezy erizzle.
          Sizzle go to hizzle fizzle mah nizzle break yo neck, yall for sure
          pizzle. Maurizzle pellentesque nibh izzle turpizzle. Fo shizzle my
          nizzle fo shizzle my nizzle tortizzle. Sure boofron rhoncizzle sizzle.
          In hac habitasse we gonna chung dictumst. Fo dapibizzle. Curabitizzle
          tellus bling bling, pretizzle eu, yo mamma crunk, eleifend vitae,
          nunc. Fo shizzle my nizzle suscipit. Integer rizzle shiznit sed
          purizzle.
        </p>
 */
