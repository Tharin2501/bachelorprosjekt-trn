import Link from "next/link";
import React, { Component, useState, useEffect } from "react";
import { Button } from 'reactstrap';
// onClickFuntion
//   <li className="nav_submenu-item" onClick={() => { onClickFuntion }}>
// lage annerldes for subcat
const HamburgermenuItem = ({ category }, type) => {

    //console.log(category.image.url)
    // src={"https://trnbackend.herokuapp.com" + props.productSide.image[0].url}
    //  <Link href={{ pathname: "/" + { type }, query: { id: category.StrapiName } }}>  </Link>
    const cliked = (category) => {
        console.log(category)

        return (
            <Button> Test</Button>
        )

    }


    return (
        <div onClick={() => cliked(category)}>
            <div className="myImg">
                <img className="myImg" src={"https://trnbackend.herokuapp.com" + category.image.url} alt="logo" />
            </div>

            <h1 className="nav-link">{category.name}</h1>

        </div>

    )
}

export default HamburgermenuItem