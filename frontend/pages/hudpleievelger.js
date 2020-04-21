import React from 'react';
import SkincareCarusel from "../components/skincare/skincareCarusel.jsx"
import { Button } from "reactstrap";
import SkincareDesktopCard from "../components/skincare/skincareDesktopCard"
const isServer = () => typeof window === `undefined`;

const Hudpleievelger = () => {

    if (!isServer()) {
        console.log()
        if (window.innerWidth > 700) {
            return (
                <SkincareDesktopCard>

                </SkincareDesktopCard>
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



