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


const divStyle = {
    border: "5px solid pink",
    width: "10rem",

}


const Home = () => {
    return (
        <div>
            <Head>
                <title>Tax free</title>

                <script src="https://kit.fontawesome.com/b0dd2d05dd.js" crossorigin="anonymous"></script>
            </Head>
            <Query query={PRODUCTS_QUERY} id={null}>
                {({ data: { products } }) => {

                    console.log(products)

                    return (
                        <div className="container-fluid px-5 py-5 mx-auto">
                            <div className="row justify-content-between px-3">
                                <div className="block text-center">
                                    <img className="image" src="https://i.imgur.com/rwdD8hv.png"></img>
                                    <div className="pr-3 row justify-content-end">
                                        <div className="fa fa-heart-o productgridFav"> </div>
                                    </div>
                                    <div className="info py-2 px-2">

                                        <div className="text-center">
                                            <h5 className="mb-0 mt-2">Tittel</h5>
                                            <small className="text-muted mb-1">Beskrivelse</small>
                                        </div>
                                        <div className="row px-3">
                                            <h5> 250ml</h5>
                                            <div className="vl"></div>
                                            <h5> 250kr</h5>
                                            <p className="text-muted ml-2"><del>300kr</del></p>



                                        </div>
                                        <div className="row px-3">
                                            <div className="cartProductCard">
                                                <p className="mb-0 sm-font">Legg til</p>
                                            </div>
                                            <div className="order">
                                                <p className="mb-0 sm-font">Test</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
