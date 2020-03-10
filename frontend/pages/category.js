import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import PRODUCTS_QUERY from "../apollo/queries/product/products";
import Query from '../components/query';


import Productgrid from "../components/category/productgrid";
import { SubCategoryList } from "../components/category/subCategoryList";

import Cookie from "js-cookie";
import { useState, useEffect } from "react";
import parsCookies from "../components/cart/parseCookies";

var jsonObj = [

]

jsonObj = JSON.stringify(jsonObj)
const Category = ({ initialRememberValue = jsonObj }) => {

    const [rememberMe, setRememberMe] = useState(() =>
        (initialRememberValue) //  JSON.parse
    );

    useEffect(() => {
        Cookie.set("rememberMe", (rememberMe));// JSON.stringify
    }, [rememberMe]);

    console.log(rememberMe)
    var test4 = {
        id: 4,
        name: 'jævla!'

    }
    function addItem() {

        var test = JSON.parse(rememberMe)
        test.push(test4)
        //console.log(test[2])
        //console.log(test)
        //var restult = JSON.stringify(test)
        //setRememberMe(restult)

    }

    return (
        <div>
            <Query query={PRODUCTS_QUERY} id={null}>
                {({ data: { products } }) => {

                    return (
                        <div>
                            <h1>Makeup</h1>
                            <p> Festlook eller hverdagsmakeup uansett hva du er ute etter finner du alt innen makeup hos Tax Free. Den perfekte maskaraen. Foundations til alle hudtyper og med forskjellige dekkevne. Settingsprayer, concealere, primere og rouger i alle konsistenser – til forskjellige anledninger. Lek deg med øyenskyggene våre og skap det uttrykket du ønsker. Til leppene har vi lippgloss, leppestift, leppepomader og lipliner alt fra den mest shiny til den matteste matte. Her finner du også makeupsett i forskjellige fasonger og farger. Finn din favoritt sminke hos oss til en god pris.</p>
                            <SubCategoryList />
                            <Productgrid productgrid={products} />;
                        </div>


                    );
                }}


            </Query>


        </div>
    );

};

Category.getInitialProps = ({ req }) => {
    const cookies = parsCookies(req);


    return {
        initialRememberValue: cookies.rememberMe
    };
};

export default Category;
