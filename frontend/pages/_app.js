import React, { useState } from "react";
import Head from "next/head";
import "../assets/css/style.css";
import "../assets/css/styleScrollbar.css";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/apollo";
import { MyFooter, MyHeader, } from "../components/layout/layout";
import CartTotalPriceContext from "../components/context/cartTotalPriceContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";


const App = ({ Component, pageProps, apollo }) => {
    const [price, setTotalPrice] = useState(0);
    const ChangeTotalPrice = (newValue) => setTotalPrice(newValue);
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
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            </Head>

            <html lang="nb">
                <body>

                    <CartTotalPriceContext.Provider value={{ price, ChangeTotalPrice }}>

                        <MyHeader />

                        <Component {...pageProps} />
                        <MyFooter />

                    </CartTotalPriceContext.Provider>

                </body>
            </html >
        </ApolloProvider>


    )
};
// Wraps all components in the tree with the data provider
export default withData(App);
