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

const Home = () => {
    return (
        <div>
            <Head>
                <title>Tax free</title>
            </Head>
            <Query query={PRODUCTS_QUERY} id={null}>
                {({ data: { products } }) => {

                    console.log(products)
                    return (
                        <div>
                            <Card style={{ width="15vh" }}>
                                <CardImg top style={{ width: "10%", aspectRatio: 135 / 76 }} top width="10px" src="https://trnbackend.herokuapp.com/files/SPF50+Anthelios.jpg" alt="test" />
                                <CardBody>
                                    <CardTitle> {products[0].name}</CardTitle>
                                    <CardSubtitle>{products[0].id}</CardSubtitle>
                                    <CardText>{products[0].desc}</CardText>
                                    <Button> Add to cart</Button>
                                </CardBody>
                            </Card>
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


        </div>
    );
};


export default Home;
/*
*/
