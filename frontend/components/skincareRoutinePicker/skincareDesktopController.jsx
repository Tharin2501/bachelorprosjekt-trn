import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import SkincareDesktopCarusel from "./skincareDesktopCarusel"
import GETPRODUCTSFROMSUBCATEGORYFILTER_QUERY from "../../apollo/queries/carusel/GetProductsFromSubcategoryFilter"
import QuerySubCategory from "../../components/querySubCategory";


const SkincareDesktopController = (props) => {
    return (
        <div>

            <QuerySubCategory query={GETPRODUCTSFROMSUBCATEGORYFILTER_QUERY} categoryName={"toner_facecare"}>
                {({ data: { subCategories } }) => {
                    console.log(subCategories[0].products)
                    return (
                        <SkincareDesktopCarusel productsToShowArray={subCategories[0].products}></SkincareDesktopCarusel>
                    )
                }}
            </QuerySubCategory>
        </div>
    )
}


export default SkincareDesktopController
