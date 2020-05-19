import React, { useState } from "react"
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Progress,
} from 'reactstrap';
import SkincareMobileCarusel from "./skincareMobileCarusel"
import GETPRODUCTSFROMSUBCATEGORYFILTERANDBULLETPOINTS_QUERY from "../../../apollo/queries/carusel/GetProductsFromSubcategoryFilterAndBulletpoints";
import QurySkincareCarusel from "../../qurySkincareCarusel";
import { addtoCart } from "../../cart/cartHandler";
import { filterProductsFunction } from "../utils/skincareRotuinePickerUtils"
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from "next/router";

// 1 clense 2 toner 3 Moist

const SkincareMobileController = (props) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [chosenProdutsArary, setChosenProdutsArary] = useState([])
    const router = useRouter();

    const changeStepRequest = (changeStepValue) => {
        setCurrentStep(changeStepValue)
    }

    const addToChosenProdutsArray = (productToAdd) => {
        var tempArray = chosenProdutsArary;
        tempArray.push(productToAdd);
        setChosenProdutsArary(tempArray);

    }

    const cancelSkincarePickerButtonHandler = () => {

        router.push("/");
    }
    const addChosenProductsToCart = () => {


        chosenProdutsArary.map((product) => {
            let productToAdd = {
                id: product.id,
                name: product.ProductName,
                price: product.pris,
                image: product.image[0].url

            }
            addtoCart(productToAdd, 1)
        })
    }
    if (currentStep === 0) {
        return (

            <div align="center" >
                <Button onClick={() => cancelSkincarePickerButtonHandler()}> Avbryt</Button>
                <div className="quizContainer">

                    <div className={"jumbotron "}>


                        <h2 align="center"> Produktene dine er nå klare</h2>
                        <p> Swipe til venstre og høyre for å se de forskjellige produktene</p>
                        <p> Trykk på <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> for velge et produkt</p>
                        <p> Trykk på <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>  når du har bestemt deg å ønsker å gå videre.</p>

                        <button onClick={() => changeStepRequest(1)} type="button" className="btn btn-dark m-4 btn-lg"> Start</button>

                    </div>

                </div>

            </div >
        );

    }
    // lag egen kategori
    if (currentStep === 1) {
        return (
            // lag egen kategori
            <QurySkincareCarusel query={GETPRODUCTSFROMSUBCATEGORYFILTERANDBULLETPOINTS_QUERY} categoryName={"rens_facecare"} bulletPointsName={props.filtersFromQuizArray.cleanseArray}>
                {({ data: { subCategories } }) => {
                    const resultarray = filterProductsFunction(subCategories[0].products, props.filtersFromQuizArray.cleanseArray)


                    return (
                        <div align="center" >
                            <Button onClick={() => cancelSkincarePickerButtonHandler()}> Avbryt</Button>
                            <SkincareMobileCarusel goToNextStepFunction={changeStepRequest} addToChosenProdutsArrayFunction={addToChosenProdutsArray} addChosenProductsToCart={addChosenProductsToCart} stepNumber={1} productsToShowArray={resultarray} ></SkincareMobileCarusel>
                        </div>
                    )
                }}
            </QurySkincareCarusel>
        )
    }

    if (currentStep === 2) {
        return (

            <QurySkincareCarusel query={GETPRODUCTSFROMSUBCATEGORYFILTERANDBULLETPOINTS_QUERY} categoryName={"toner_facecare"} bulletPointsName={props.filtersFromQuizArray.tonerArray}>
                {({ data: { subCategories } }) => {
                    const resultarray = filterProductsFunction(subCategories[0].products, props.filtersFromQuizArray.tonerArray)
                    return (
                        <SkincareMobileCarusel stepNumber={2} goToNextStepFunction={changeStepRequest} productsToShowArray={resultarray} addToChosenProdutsArrayFunction={addToChosenProdutsArray} addChosenProductsToCart={addChosenProductsToCart}></SkincareMobileCarusel>
                    )
                }}
            </QurySkincareCarusel>
        )
    }

    if (currentStep === 3) {
        return (

            <QurySkincareCarusel query={GETPRODUCTSFROMSUBCATEGORYFILTERANDBULLETPOINTS_QUERY} categoryName={"fuktighetskrem_facecare"} bulletPointsName={props.filtersFromQuizArray.moistzerierArray}>
                {({ data: { subCategories } }) => {
                    const resultarray = filterProductsFunction(subCategories[0].products, props.filtersFromQuizArray.moistzerierArray)
                    return (
                        <SkincareMobileCarusel stepNumber={3} goToNextStepFunction={changeStepRequest} productsToShowArray={resultarray} addToChosenProdutsArrayFunction={addToChosenProdutsArray} addChosenProductsToCart={addChosenProductsToCart}></SkincareMobileCarusel>
                    )
                }}
            </QurySkincareCarusel>
        )
    }

}


export default SkincareMobileController;
