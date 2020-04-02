import Link from "next/link";
import React, { Component, useState, useEffect } from "react";

const HamburgermenuItem = props => {

    if (props.type == "category") {
        return (
            <div onClick={() => props.listFunction(props.category)}>
                <div className="myImg">
                    <img className="myImg" src={"https://trnbackend.herokuapp.com" + props.category.image.url} alt="logo" />
                </div>

                <h1 className="nav-link">{props.category.name}</h1>

            </div>

        )
    } else {
        console.log(props.category)
        return (
            <Link href={{ pathname: "/subCategory", query: { id: props.category.StrapiName } }}>
                <div onClick={closeNav}>
                    <div className="myImg">
                        <img className="myImg" src={"https://trnbackend.herokuapp.com" + props.category.image[0].url} alt="logo" />
                    </div>

                    <h1 className="nav-link">{props.category.categoryName}</h1>

                </div>
            </Link>
        )
    }


}

export default HamburgermenuItem

export const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";

}