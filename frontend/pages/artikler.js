import React from "react"
import Articles from "../components/articles/articles";
import AllArticles from "../components/articles/AllArticles";
import Head from 'next/head'
// Side for alle Artikler
const Artikler = () => {

    return (
        <div>
            <Head>
                <title> Alle Artikler</title>
            </Head>

            <AllArticles />
        </div>
    )
};

export default Artikler;
