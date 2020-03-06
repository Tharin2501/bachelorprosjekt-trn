import React from "react";
import { Button } from "reactstrap";

const Produktside = () => (
  <div>
    <h1>Dette er produktsiden</h1>
    <div className="container-fluid px-1 py-1 mx-auto bg-primary">
      <div className="row justify-content-center px-3 bg-info">
        <div className="block text-left bg-success">
          <div className="container min-vh-10 bg-warning">
            <img
              src="https://trnbackend.herokuapp.com/files/SPF50+Anthelios.jpg"
              alt="Logo"
              className="img-fluid d-none d-md-block"
            />
            <h2>PRODUKTINFORMASJON</h2>
            <p>
              Lorizzle ipsizzle hizzle sit amizzle, consectetuer own yo' the
              bizzle. Phat sapien velizzle, shizzlin dizzle volutpat,
              suscipizzle stuff, gravida izzle, funky fresh. Pellentesque yo
              tortor. Sheezy erizzle. Sizzle go to hizzle fizzle mah nizzle
              break yo neck, yall for sure pizzle. Maurizzle pellentesque nibh
              izzle turpizzle. Fo shizzle my nizzle fo shizzle my nizzle
              tortizzle. Sure boofron rhoncizzle sizzle. In hac habitasse we
              gonna chung dictumst. Fo dapibizzle. Curabitizzle tellus bling
              bling, pretizzle eu, yo mamma crunk, eleifend vitae, nunc. Fo
              shizzle my nizzle suscipit. Integer rizzle shiznit sed purizzle.
            </p>
          </div>
        </div>
      </div>
    </div>
    <h3>Produktinformasjon</h3>
  </div>
);

export default Produktside;
