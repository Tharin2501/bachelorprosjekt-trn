import React from "react";
import Logo from "../components/Logo/Logo";
import { Button } from "reactstrap";

const Produktside = () => (
  <div>
    <h1>Dette er produktsiden</h1>
    <Logo />
    <h3>Produktinformasjon</h3>
    <Button color="danger">We did it!</Button>
  </div>
);

export default Produktside;
