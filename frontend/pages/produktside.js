import React from "react"
import Produktside from "../components/productPage/produktside"
import PRODUCT_QUERY from "../apollo/queries/product/product"
import Query from "../components/query";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
const productSide = () => {
    const router = useRouter()
    //console.log(router.query.id)
    return (
        <Query query={PRODUCT_QUERY} id={router.query.id}>
            {({ data: { product } }) => {
                return (
                    <div>
                        <h1>Dette er produkt siden</h1>
                        <Produktside productSide={product}></Produktside>
                    </div>
                )
            }}
        </Query>
    )


};

export default productSide;
