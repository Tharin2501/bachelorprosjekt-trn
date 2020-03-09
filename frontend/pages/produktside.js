import React from "react";
import { Button, Row, Col } from "reactstrap";

const Produktside = () => (
  <div className="bg-info w-100 h-100 p-3 d-inline-block overflow-auto">
    <h1>Dette er produktsiden</h1>
    <Row>
      <Col xs="6" className="text-left bg-warning h-auto w-50">
        <img
          className="mh-25 w-25"
          src="https://trnbackend.herokuapp.com/files/SPF50+Anthelios.jpg"
        />
      </Col>
      <Col xs="6" className="bg-success text-left overflow-auto w-50">
        <h2>PRODUKTNAVN</h2>
        <h3>Pris</h3>
      </Col>
    </Row>
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
