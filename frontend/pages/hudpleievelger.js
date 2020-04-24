import React from 'react';
import SkincareCarusel from "../components/skincareRoutinePicker/skincareCarusel.jsx"
import { Button } from "reactstrap";
import SkincareDesktopController from "../components/skincareRoutinePicker/skincareDesktopController"
const isServer = () => typeof window === `undefined`;

const Hudpleievelger = () => {

    if (!isServer()) {
        if (window.innerWidth > 700) {
            return (
                <SkincareDesktopController>

                </SkincareDesktopController>
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



