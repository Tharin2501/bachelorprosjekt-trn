import Link from "next/link";
import React, { Component, useState, useEffect } from "react";
// onClickFuntion
//   <li className="nav_submenu-item" onClick={() => { onClickFuntion }}>
// lage annerldes for subcat
const HamburgermenuItem = ({ category }, type) => {

    console.log(category.image.url)
    // src={"https://trnbackend.herokuapp.com" + props.productSide.image[0].url}
    return (
        <React.Fragment>
            <div className="myImg">
                <img className="myImg" src={"https://trnbackend.herokuapp.com" + category.image.url} alt="logo" />
            </div>
            <Link href={{ pathname: "/" + { type }, query: { id: category.StrapiName } }}>
                <h1 className="nav-link">{category.name}</h1>
            </Link>
        </React.Fragment>

    )
}

export default HamburgermenuItem