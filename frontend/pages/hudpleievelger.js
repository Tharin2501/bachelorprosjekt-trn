import React from 'react';
import SkincareCarusel from "../components/skincareRoutinePicker/skincareCarusel.jsx"
import { Button } from "reactstrap";
import SkincareDesktopController from "../components/skincareRoutinePicker/skincareDesktopController"
import SkincareDesktopCard from "../components/skincareRoutinePicker/skincareDesktopCard.jsx"
const isServer = () => typeof window === `undefined`;

const oleHenProduct = {
    stepText: "Steg 1:Rens",
    imageUrl: "/files/1279254-trnLargeFormat.jpg",
    productName: "Ole Henriksen green tea Toner",
    productPrice: "999 kr",
    productDescription: "Using bootstrap's jumbotron with the particle.js background to make the jumbotron semi-transparent."
}
const Hudpleievelger = () => {

    if (!isServer()) {
        if (window.innerWidth > 700) {
            return (
                <SkincareDesktopCard product={oleHenProduct} ></SkincareDesktopCard>
            )
        } else {
            return (

                < SkincareCarusel  >

                </SkincareCarusel >



            )
        }
    }

    if (isServer()) {
        return (
            null
        )
    }





};

export default Hudpleievelger;



