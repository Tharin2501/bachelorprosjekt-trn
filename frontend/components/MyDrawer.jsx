import React, { Component, useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import HamburgermenuList from "../components/hamburgermenu/hamburgermenuList.jsx"
import GETCATEGORIES_QUERY from "../apollo/queries/Category/GetCategories.js";
import Query from "../components/query"
export const MyDrawer = (props) => {
    const tabindexNumber = "-1";

    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";


    }
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
        ref.current.setListToDefault()
    }

    const ref = useRef(null)
    return (
        <div>
            <div>
                <ul className="left">
                    <li style={{ cursor: "pointer", height: "100%" }}>
                        <a href="#" onClick={openNav}>
                            <GiHamburgerMenu style={{ color: props.hamburgerIconColor }} />
                        </a>

                    </li>
                </ul>
            </div>
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" tabIndex={tabindexNumber} className="closebtn" onClick={closeNav}>&times;</a>
                <Query query={GETCATEGORIES_QUERY}>
                    {({ data: { categories } }) => {

                        return (

                            <HamburgermenuList tabindexNumber={tabindexNumber} ref={ref} categories={categories}></HamburgermenuList>
                        )
                    }}
                </Query>



            </div>
        </div>
    )
}








