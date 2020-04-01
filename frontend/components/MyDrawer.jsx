import React, { Component, useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import GETCATEGORIES_QUERY from "../apollo/queries/Category/GetCategories.js";
import Query from "../components/query"
import HamburgermenuItem from "../components/hamburgermenu/hamburgermenuItem.jsx"
export const MyDrawer = () => {



    const MyMakeup = () => {
        return (
            <ul>
                <li className="nav_submenu-item" onClick={() => { closeNav() }}>
                    <div className="myImg">
                        <img className="myImg" src="/images/carousel/placeholder1.jpg" alt="logo" />
                    </div>
                    <Link href="makeup">
                        <h1 className="nav-link">All Makeup</h1>
                    </Link>
                </li>
                <li className="nav_submenu-item">
                    <div className="myImg">
                        <img className="myImg" src="/images/carousel/placeholder1.jpg" alt="logo" />
                    </div>
                    <Link href="#">
                        <h1 className="nav-link">Ansikt</h1>
                    </Link>
                </li>
                <li className="nav_submenu-item">
                    <div className="myImg">
                        <img className="myImg" src="/images/carousel/placeholder1.jpg" alt="logo" />
                    </div>
                    <Link href="#">
                        <h1 className="nav-link">Øyne</h1>
                    </Link>
                </li>
            </ul>
        )

    }



    const [openLeft, setOpenLeft] = useState(false);
    const [listToShow, setListToShow] = useState()

    const listToset = (newlist) => setListToShow(newlist)
    const MyCategories = () => {
        return (
            <ul>
                <li className="nav_submenu-item">
                    <div className="myImg">
                        <img className="myImg" src="/images/carousel/placeholder1.jpg" alt="logo" />
                    </div>

                    <h1 onClick={() => listToset(MyMakeup)} className="nav-link">Makeup</h1>

                </li>
                <li className="nav_submenu-item">
                    <div className="myImg">
                        <img className="myImg" src="/images/carousel/placeholder1.jpg" alt="logo" />
                    </div>
                    <Link href="makeup">
                        <h1 className="nav-link">Alkohol</h1>
                    </Link>
                </li>
            </ul>
        )

    }
    useEffect(() => {
        listToset(MyCategories)
    }, []);


    const handleOpenLeftChange = () => setOpenLeft(!openLeft)






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

                            <ul>

                                {categories.map((category) => {
                                    return (
                                        <li className="nav_submenu-item">
                                            <HamburgermenuItem category={category} type={"category"} >

                                            </HamburgermenuItem>
                                        </li>
                                    )
                                })}

                            </ul>
                        )









                    }}
                </Query>
            </div>
        </div>
    )
}

export const MainMenu = ({ openLeft }) => {




    return (
        null
    )

}






