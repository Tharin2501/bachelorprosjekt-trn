import React from "react";
import SkincareMobileController from "./skincareMobileController";
import SkincareDesktopController from "./skincareDesktopController";

const isServer = () => typeof window === `undefined`;

const SkincareCaruselController = (props) => {

    if (!isServer()) {
        if (window.innerWidth > 700) {
            return (
                <SkincareDesktopController filtersFromQuizArray={props.filtersFromQuizArray} ></SkincareDesktopController>
            )
        } else {
            return (

                < SkincareMobileController  >

                </SkincareMobileController >



            )
        }
    }


    if (isServer()) {
        return (
            null;
        )
    }

};

export default SkincareCaruselController;
