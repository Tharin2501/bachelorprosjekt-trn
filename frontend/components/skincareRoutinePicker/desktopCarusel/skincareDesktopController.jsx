import React, { useState } from "react"
import SkincareDesktopCarusel from "./skincareDesktopCarusel"

import GETPRODUCTSFROMSUBCATEGORYFILTERANDBULLETPOINTS_QUERY from "../../../apollo/queries/carusel/GetProductsFromSubcategoryFilterAndBulletpoints";
import QurySkincareCarusel from "../../qurySkincareCarusel";
import { addtoCart } from "../../cart/cartHandler"

// 1 clense 2 toner 3 Moist

export const filterProductsFunction = (products, filterArray) => {
    const matchesNeed = filterArray.length; // flytt ut
    console.log(filterArray)
    console.log(matchesNeed)
    var resultarray = [];

    for (var product of products) {
        resultarray.push(compareFiltersToOneProduct(matchesNeed, product, filterArray));
    }
    console.log(resultarray)
    // remove udefined
    resultarray = resultarray.filter(function (product) {
        return product != null;
    })

    return resultarray;


}

export const compareFiltersToOneProduct = (matchesRequired, product, filterArray) => {

    var curretMatches = 0;


    for (var i = 0; i < product.bullet_point_on_skincare_products.length; i++) {
        for (var filter of filterArray) {

            if (product.bullet_point_on_skincare_products[i].name === filter) {
                ++curretMatches;

                if (curretMatches === matchesRequired) {
                    console.log(product)
                    return product;
                }
                break;

            }
        }
    }

}

const SkincareDesktopController = (props) => {
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
            <QurySkincareCarusel query={GETPRODUCTSFROMSUBCATEGORYFILTERANDBULLETPOINTS_QUERY} categoryName={"rens_facecare"} bulletPointsName={props.filtersFromQuizArray.cleanseArray}>
                {({ data: { subCategories } }) => {

                    const resultarray = filterProductsFunction(subCategories[0].products, props.filtersFromQuizArray.cleanseArray)



                    return (
                        <SkincareDesktopCarusel goToNextStepFunction={changeStepRequest} addToChosenProdutsArrayFunction={addToChosenProdutsArray} addChosenProductsToCart={addChosenProductsToCart} stepNumber={1} productsToShowArray={resultarray} ></SkincareDesktopCarusel>
                    )
                }}
            </QurySkincareCarusel>
        )
    }

    if (currentStep === 2) {
        return (

            <QurySkincareCarusel query={GETPRODUCTSFROMSUBCATEGORYFILTERANDBULLETPOINTS_QUERY} categoryName={"toner_facecare"}>
                {({ data: { subCategories } }) => {
                    const resultarray = filterProductsFunction(subCategories[0].products, props.filtersFromQuizArray.tonerArray)
                    return (
                        <SkincareDesktopCarusel stepNumber={2} goToNextStepFunction={changeStepRequest} productsToShowArray={resultarray} addToChosenProdutsArrayFunction={addToChosenProdutsArray} addChosenProductsToCart={addChosenProductsToCart}></SkincareDesktopCarusel>
                    )
                }}
            </QurySkincareCarusel>
        )
    }

    if (currentStep === 3) {
        return (

            <QurySkincareCarusel query={GETPRODUCTSFROMSUBCATEGORYFILTERANDBULLETPOINTS_QUERY} categoryName={"fuktighetskrem_facecare"}>
                {({ data: { subCategories } }) => {
                    const resultarray = filterProductsFunction(subCategories[0].products, props.filtersFromQuizArray.moistzerierArray)
                    return (
                        <SkincareDesktopCarusel stepNumber={3} goToNextStepFunction={changeStepRequest} productsToShowArray={resultarray} addToChosenProdutsArrayFunction={addToChosenProdutsArray} addChosenProductsToCart={addChosenProductsToCart}></SkincareDesktopCarusel>
                    )
                }}
            </QurySkincareCarusel>
        )
    }

}


export default SkincareDesktopController
