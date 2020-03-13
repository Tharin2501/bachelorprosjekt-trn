import React from "react"
import Head from 'next/head'
import "bootstrap/dist/css/bootstrap.min.css";
import ARTICLES_QUERY from "../apollo/queries/article/articles";
import Query from '../components/query';

import { Frontpage } from "../components/Frontpage";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from "reactstrap";


const Home = () => {
    return (
        <div>
            <Head>

                <title>Tax free</title>

            </Head>

            {/*
            <Query query={ARTICLES_QUERY} id={null}>
                {({data: {articles}}) => {
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
            */}
            <Frontpage />
        </div>
    );
};


export default Home;
