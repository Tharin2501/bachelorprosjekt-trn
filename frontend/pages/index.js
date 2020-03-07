import React from "react"
import Head from 'next/head'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ARTICLES_QUERY from "../apollo/queries/article/articles";
import Query from '../components/query';


const Home = () => {
    return (
        <div>
            <Head>

                <title>Tax free</title>

            </Head>


            {
                <Query query={ARTICLES_QUERY} id={null}>
                    {({ data: { articles } }) => {
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