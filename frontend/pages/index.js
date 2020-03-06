import React from "react"
import Head from 'next/head'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ARTICLES_QUERY from "../apollo/queries/article/articles";
import PRODUCTS_QUERY from "../apollo/queries/product/products";
import Query from '../components/query';

import Productgrid from "../components/category/productgrid";
import { SubCategoryList } from "../components/category/subCategoryList";

const Home = () => {
    return (
        <div>
            <Head>

                <title>Tax free</title>

            </Head>
            <Query query={PRODUCTS_QUERY} id={null}>
                {({ data: { products } }) => {

                    //console.log(products)
                    //{products[0].name}
                    return (
                        <div>
                            <SubCategoryList />
                            <Productgrid productgrid={products} />;
                        </div>


                    );
                }}


            </Query>

            {
                <Query query={ARTICLES_QUERY} id={null}>
                    {({ data: { articles } }) => {
                        console.log(articles)
                        console.log(articles[0].name);

                        return (
                            <div className="hero">
                                <h1 className="title">Welcome to Next.js!</h1>

                                <Button color="danger">Pass på!!</Button>
                            </div>
                        );
                    }}
                </Query>
            }


        </div >
    );
};


export default Home;
        /*
*/
