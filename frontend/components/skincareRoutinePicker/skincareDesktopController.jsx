import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import SkincareDesktopCarusel from "./skincareDesktopCarusel"
import GETPRODUCTSFROMSUBCATEGORYFILTER_QUERY from "../../apollo/queries/carusel/GetProductsFromSubcategoryFilter"
import QuerySubCategory from "../../components/querySubCategory";
// 1 clense 2 toner 3 Moist

const SkincareDesktopController = (props) => {
    const [currentStep, setCurrentStep] = useState(1);

    const changeStepRequest = (changeStepValue) => {

        setCurrentStep(changeStepValue)




    }

    if (currentStep === 1) {
        return (
            // lag egen kategori
            <QuerySubCategory query={GETPRODUCTSFROMSUBCATEGORYFILTER_QUERY} categoryName={"rensskrubb_facecare"}>
                {({ data: { subCategories } }) => {
                    console.log(subCategories[0].products)
                    return (
                        <SkincareDesktopCarusel stepNumber={1} goToNextStepFunction={changeStepRequest} productsToShowArray={subCategories[0].products}></SkincareDesktopCarusel>
                    )
                }}
            </QuerySubCategory>
        )
    }

    if (currentStep === 2) {
        return (

            <QuerySubCategory query={GETPRODUCTSFROMSUBCATEGORYFILTER_QUERY} categoryName={"toner_facecare"}>
                {({ data: { subCategories } }) => {
                    console.log(subCategories[0].products)
                    return (
                        <SkincareDesktopCarusel stepNumber={2} goToNextStepFunction={changeStepRequest} productsToShowArray={subCategories[0].products}></SkincareDesktopCarusel>
                    )
                }}
            </QuerySubCategory>
        )
    }

    if (currentStep === 3) {
        return (

            <QuerySubCategory query={GETPRODUCTSFROMSUBCATEGORYFILTER_QUERY} categoryName={"fuktighetskrem_facecare"}>
                {({ data: { subCategories } }) => {
                    console.log(subCategories[0].products)
                    return (
                        <SkincareDesktopCarusel stepNumber={3} goToNextStepFunction={changeStepRequest} productsToShowArray={subCategories[0].products}></SkincareDesktopCarusel>
                    )
                }}
            </QuerySubCategory>
        )
    }

}


export default SkincareDesktopController
