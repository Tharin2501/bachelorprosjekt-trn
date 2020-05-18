import React from "react";
import SkincareMobileController from "./mobileCarusel/skincareMobileController";
import SkincareDesktopController from "./desktopCarusel/skincareDesktopController";

const isServer = () => typeof window === `undefined`;




const SkincareCaruselController = (props) => {





    if (!isServer()) {
        if (window.innerWidth > 700) {
            return (
                <div className={"quizContainer"}>
                    <SkincareDesktopController filtersFromQuizArray={props.filtersFromQuizArray}></SkincareDesktopController>
                </div>
            )
        } else {
            return (


                < SkincareMobileController filtersFromQuizArray={props.filtersFromQuizArray} >

                </SkincareMobileController >



            )
        }
    }


    if (isServer()) {
        return (
            null
        )
    }

};

export default SkincareCaruselController;
