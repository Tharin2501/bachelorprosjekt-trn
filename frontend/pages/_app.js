import React from "react";
import Head from "next/head";
import "../assets/css/style.css";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/apollo";
import { MyFooter, MyHeader, F } from "../components/layout/layout";
import { MyMarquee } from "../components/MyMarquee";

const App = ({ Component, pageProps, apollo }) => {
    return (
        <ApolloProvider client={apollo}>
            <Head>
                {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Staatliches"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
                />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
                <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
                <script src="https://kit.fontawesome.com/b0dd2d05dd.js" cross0rigin="anonymous"></script>
            </Head>

            <MyHeader />
            <MyMarquee />
            <Component {...pageProps} />
            <MyFooter />
        </ApolloProvider>
    )
};
// Wraps all components in the tree with the data provider
export default withData(App);
