import Link from "next/link";
import React, { Component, useState, useEffect, forwardRef, useImperativeHandle } from "react";
import GETCATEGORIES_QUERY from "../../apollo/queries/Category/GetCategories.js";
import Query from "../../components/query"
import HamburgermenuItem from "../../components/hamburgermenu/hamburgermenuItem.jsx"

// onClickFuntion
//   <li className="nav_submenu-item" onClick={() => { onClickFuntion }}>
// lage annerldes for subcat
const HamburgermenuList = forwardRef((props, ref) => {


    // src={"https://trnbackend.herokuapp.com" + props.productSide.image[0].url}


    const [categoriesToShow, setCategoreisToShow] = useState(props.categories)
    const listToSet = (newlist) => setCategoreisToShow(newlist)

    const [type, setType] = useState("category")
    const typeToSet = (newType) => setType(newType)

    const [hamburgerMenuItemShowAll, setHamburgerMenuItemShowAll] = useState()

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
    if (type == "category") {
        return (


            <ul>
                <li className="nav_submenu-item">
                    <div onClick={() => { handleQuizTestClick() }}>

                        <div className="myImg">
                            <img className="myImg" src={"https://trnbackend.herokuapp.com/files/kosedyr.svg"} alt="logo" />
                        </div>

                        <h1 className="nav-link">{"QuizTest"}</h1>

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

                    <div onClick={() => (setListToDefault())}>
                        <div className="myImg">
                            <img className="myImg" src={"/images/carousel/placeholder1.jpg"} alt="logo" />
                        </div>

                        <p className="nav-link">Gå tilbake</p>

                    </div>

                </li>
                <li className="nav_submenu-item">
                    <Link href={{ pathname: "/category", query: { id: hamburgerMenuItemShowAll.StrapiName } }}>
                        <div onClick={() => (closeNav())}>
                            <div className="myImg">
                                <img className="myImg" src={"https://trnbackend.herokuapp.com" + hamburgerMenuItemShowAll.image} alt="logo" />
                            </div>

                            <p className="nav-link">{hamburgerMenuItemShowAll.categoryName}</p>

                        </div>
                    </Link>
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
