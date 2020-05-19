import React from "react"
import FavoritesList from "../components/Favorites/FavoritesList"
import Head from 'next/head'
const Favorites = () => (
    <div>
        <Head>
            <title> Favoritter </title>
        </Head>
        <FavoritesList></FavoritesList>
    </div>
);

export default Favorites;