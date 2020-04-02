import React, { Component, useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import HamburgermenuList from "../components/hamburgermenu/hamburgermenuList.jsx"
import GETCATEGORIES_QUERY from "../apollo/queries/Category/GetCategories.js";
import Query from "../components/query"
export const MyDrawer = () => {

    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";

    }
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";

    }



    return (
        <div>
            <div>
                <ul className="left">
                    <li style={{ cursor: "pointer", height: "100%" }}>
                        <a onClick={openNav}>
                            <GiHamburgerMenu />
                        </a>

                    </li>
                </ul>
            </div>
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                {/*listToShow*/}
                <Query query={GETCATEGORIES_QUERY}>
                    {({ data: { categories } }) => {

                        return (

                            <HamburgermenuList categories={categories}></HamburgermenuList>
                        )
                    }}
                </Query>



            </div>
        </div>
    )
}








