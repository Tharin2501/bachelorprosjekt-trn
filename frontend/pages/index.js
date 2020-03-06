import React from "react"
import Head from 'next/head'
import {Button} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ARTICLES_QUERY from "../apollo/queries/article/articles";
import Query from '../components/query';
import {MyFooter, MyHeader, } from "../components/layout/layout";
import {MyMarquee} from "../components/MyMarquee";

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
        </div>
    );
};


export default Home;
