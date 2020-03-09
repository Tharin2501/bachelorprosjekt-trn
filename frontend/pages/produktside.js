import React from "react";
import { Button } from "reactstrap";

const Produktside = () => (
  <div className="bg-info w-100 h-100 p-3 d-inline-block overflow-auto">
    <h1>Dette er produktsiden</h1>
    <div className="container text-left bg-warning h-auto w-50">
      <img
        className="mh-25 w-25"
        src="https://trnbackend.herokuapp.com/files/SPF50+Anthelios.jpg"
      />
      <div className="bg-success text-right">TEST</div>
    </div>
  </div>
);

export default Produktside;

/**
 * 
 * <div className="container-fluid px-3 py-3 mx-auto bg-primary">
      <div className="row justify-content-center px-3 bg-info">
        <div className="container min-vh-10 bg-warning img">
          <img
            src="https://trnbackend.herokuapp.com/files/SPF50+Anthelios.jpg"
            alt="Logo"
          />
        </div>
        <div className="container min-vh-90 bg-secondary">
          <h2>PRODUKTINFORMASJON</h2>
          <p>
            Lorizzle ipsizzle hizzle sit amizzle, consectetuer own yo' the
            bizzle. Phat sapien velizzle, shizzlin dizzle volutpat, suscipizzle
            stuff, gravida izzle, funky fresh. Pellentesque yo tortor. Sheezy
            erizzle. Sizzle go to hizzle fizzle mah nizzle break yo neck, yall
            for sure pizzle. Maurizzle pellentesque nibh izzle turpizzle. Fo
            shizzle my nizzle fo shizzle my nizzle tortizzle. Sure boofron
            rhoncizzle sizzle. In hac habitasse we gonna chung dictumst. Fo
            dapibizzle. Curabitizzle tellus bling bling, pretizzle eu, yo mamma
            crunk, eleifend vitae, nunc. Fo shizzle my nizzle suscipit. Integer
            rizzle shiznit sed purizzle.
          </p>
        </div>
      </div>
    </div>
    <h3>Produktinformasjon</h3>
 */
