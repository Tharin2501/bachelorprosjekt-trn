import React, { useState } from "react"

import SkincareMobileCarusel from "./skincareMobileCarusel"
import GETPRODUCTSFROMSUBCATEGORYFILTER_QUERY from "../../../apollo/queries/carusel/GetProductsFromSubcategoryFilter";
import QuerySubCategory from "../../querySubCategory";
import { addtoCart } from "../../cart/cartHandler";

// 1 clense 2 toner 3 Moist

export const filterFunction = (product, filterArray) => {
    const matchesNeed = filterArray.length; // flytt ut
    var curretMatches = 0;

    for (filter in filterArray) {
        for (bullet in product) {

            if (bullet.name === filter) {
                curretMatches++;
                if (curretMatches === matchesNeed) {
                    return product;
                }

            }
        }
    }

}
const SkincareMobileController = (props) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [chosenProdutsArary, setChosenProdutsArary] = useState([])


    const changeStepRequest = (changeStepValue) => {
        setCurrentStep(changeStepValue)
    }

    const addToChosenProdutsArray = (productToAdd) => {
        var tempArray = chosenProdutsArary;
        tempArray.push(productToAdd);
        setChosenProdutsArary(tempArray);

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

    if (currentStep === 1) {
        return (
            // lag egen kategori
            <QuerySubCategory query={GETPRODUCTSFROMSUBCATEGORYFILTER_QUERY} categoryName={"rens_facecare"} bulletPointsName={props.filtersFromQuizArray}>
                {({ data: { subCategories } }) => {
                    var resultarray = []
                    if (filtersFromQuizArray.length === 1) {
                        // send videre
                        resultarray = subCategories[0].products;
                    } else {

                    }


                    return (
                        <SkincareMobileCarusel goToNextStepFunction={changeStepRequest} addToChosenProdutsArrayFunction={addToChosenProdutsArray} addChosenProductsToCart={addChosenProductsToCart} stepNumber={1} productsToShowArray={subCategories[0].products} ></SkincareMobileCarusel>
                    )
                }}
            </QuerySubCategory>
        )
    }

    if (currentStep === 2) {
        return (

            <QuerySubCategory query={GETPRODUCTSFROMSUBCATEGORYFILTER_QUERY} categoryName={"toner_facecare"}>
                {({ data: { subCategories } }) => {

                    return (
                        <SkincareMobileCarusel stepNumber={2} goToNextStepFunction={changeStepRequest} productsToShowArray={subCategories[0].products} addToChosenProdutsArrayFunction={addToChosenProdutsArray} addChosenProductsToCart={addChosenProductsToCart}></SkincareMobileCarusel>
                    )
                }}
            </QuerySubCategory>
        )
    }

    if (currentStep === 3) {
        return (

            <QuerySubCategory query={GETPRODUCTSFROMSUBCATEGORYFILTER_QUERY} categoryName={"fuktighetskrem_facecare"}>
                {({ data: { subCategories } }) => {

                    return (
                        <SkincareMobileCarusel stepNumber={3} goToNextStepFunction={changeStepRequest} productsToShowArray={subCategories[0].products} addToChosenProdutsArrayFunction={addToChosenProdutsArray} addChosenProductsToCart={addChosenProductsToCart}></SkincareMobileCarusel>
                    )
                }}
            </QuerySubCategory>
        )
    }

}


export default SkincareMobileController;
