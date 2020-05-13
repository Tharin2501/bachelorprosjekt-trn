import Link from "next/link";
import React, { Component, useState, useEffect, forwardRef, useImperativeHandle } from "react";
import GETCATEGORIES_QUERY from "../../apollo/queries/Category/GetCategories.js";
import Query from "../../components/query"
import HamburgermenuItem from "../../components/hamburgermenu/hamburgermenuItem.jsx"
import { useRouter } from 'next/router'
import { checkIfSpaceOrEnterPressed } from "../utils/accessibilityUtil"

const HamburgermenuList = forwardRef((props, ref) => {




    const [categoriesToShow, setCategoreisToShow] = useState(props.categories)
    const listToSet = (newlist) => setCategoreisToShow(newlist)

    const [type, setType] = useState("category")
    const typeToSet = (newType) => setType(newType)

    const [hamburgerMenuItemShowAll, setHamburgerMenuItemShowAll] = useState()
    const router = useRouter()
    const changeListToShow = (category) => {
        var newList = []
        for (var i = 0; i < props.categories.length; i++) {
            if (props.categories[i].StrapiName == category.StrapiName) {
                let showall = {
                    StrapiName: props.categories[i].StrapiName,
                    categoryName: props.categories[i].name,
                    image: props.categories[i].image.url
                }

                setHamburgerMenuItemShowAll(showall)
                //newList.push(showall)
                newList = newList.concat(props.categories[i].sub_categories)
                typeToSet("subCategory")
            }
        }
        listToSet(newList)

    }

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
        setListToDefault()
    }

    const setListToDefault = () => {
        typeToSet("category")
        listToSet(props.categories)
    }

    // for ref bruk i parent https://codesandbox.io/s/variant-1-yvjb1?from-embed
    useImperativeHandle(ref, () => {
        return {
            setListToDefault: setListToDefault
        }
    })

    const handleBrandClick = () => {

        router.push("/merkeside")
    }
    const handlearticlesClick = () => {

        router.push("/artikler")
    }

    const closeNavAndChangeURL = () => {
        handleSubcategoryClick();
        document.getElementById("mySidenav").style.width = "0";
        setListToDefault()
    }

    const handleSubcategoryClick = () => {

        router.push({ pathname: "/category", query: { id: hamburgerMenuItemShowAll.StrapiName } })
    }



    if (type == "category") {
        return (


            <ul>
                <li className="nav_submenu-item">

                    <div tabindex="0" onClick={() => { handlearticlesClick() }} onKeyDown={() => { checkIfSpaceOrEnterPressed(event) ? handlearticlesClick() : null }}>

                        <div className="myImg">
                            <img className="myImg" src={"/images/artikler2.0.svg"} alt="" />
                        </div>

                        <h1 className="nav-link">{"se artikler"}</h1>

                    </div>

                </li>
                <li className="nav_submenu-item">
                    <div tabindex="0" onClick={() => { handleBrandClick() }} onKeyDown={() => { checkIfSpaceOrEnterPressed(event) ? handleBrandClick() : null }}>

                        <div className="myImg">
                            <img className="myImg" src={"/images/brandsikon.svg"} alt="" />
                        </div>

                        <h1 className="nav-link">{"Merker"}</h1>

                    </div>
                </li>
                {categoriesToShow.map((category) => {
                    return (
                        <li className="nav_submenu-item">
                            <HamburgermenuItem category={category} type={type} listFunction={changeListToShow} closeNav={closeNav}>

                            </HamburgermenuItem>
                        </li>
                    )
                })}

            </ul>
        )

    } else {
        return (


            <ul>
                <li className="nav_submenu-item">

                    <div tabindex="0" onClick={() => (setListToDefault())} onKeyDown={() => { checkIfSpaceOrEnterPressed(event) ? setListToDefault() : null }}>
                        <div className="myImg">
                            <img className="myImg" src={"/images/icons/arrowLeftpng.png"} alt="" />
                        </div>

                        <p className="nav-link">Gå tilbake</p>

                    </div>

                </li>

                {/* Subcategoryies MAINCATEGORY*/}
                <li className="nav_submenu-item">


                    <div tabindex="0" onClick={() => (closeNavAndChangeURL())} onKeyDown={() => { checkIfSpaceOrEnterPressed(event) ? closeNavAndChangeURL() : null }}>

                        <div className="myImg">
                            <img className="myImg" src={"https://trnbackend.herokuapp.com" + hamburgerMenuItemShowAll.image} alt="" />
                        </div>

                        <p className="nav-link">{hamburgerMenuItemShowAll.categoryName}</p>

                    </div>


                </li>

                {categoriesToShow.map((category) => {
                    return (
                        <li className="nav_submenu-item">

                            <HamburgermenuItem category={category} type={type} listFunction={changeListToShow} closeNav={closeNav}>

                            </HamburgermenuItem>
                        </li>
                    )
                })}

            </ul>
        )

    }





})

export default HamburgermenuList

/*
    const MaincatInSub = React.forwardRef(({ onClick, href }, ref) => {
        return (
            <a href={href} onClick={onClick} ref={ref}>
                <div tabindex="0" onClick={() => (closeNav())} onKeyDown={() => { checkIfSpaceOrEnterPressed(event) ? closeNav() : null }}>
                    <div className="myImg">
                        <img className="myImg" src={"https://trnbackend.herokuapp.com" + hamburgerMenuItemShowAll.image} alt="" />
                    </div>

                    <p className="nav-link">{hamburgerMenuItemShowAll.categoryName}</p>

                </div>
            </a>
        )
    })
*/