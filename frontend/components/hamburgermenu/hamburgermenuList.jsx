import Link from "next/link";
import React, { Component, useState, useEffect } from "react";
import GETCATEGORIES_QUERY from "../../apollo/queries/Category/GetCategories.js";
import Query from "../../components/query"
import HamburgermenuItem from "../../components/hamburgermenu/hamburgermenuItem.jsx"

// onClickFuntion
//   <li className="nav_submenu-item" onClick={() => { onClickFuntion }}>
// lage annerldes for subcat
const HamburgermenuList = ({ categories }) => {


    // src={"https://trnbackend.herokuapp.com" + props.productSide.image[0].url}


    const [categoriesToShow, setCategoreisToShow] = useState(categories)
    const listToSet = (newlist) => setCategoreisToShow(newlist)

    const [type, setType] = useState("category")
    const typeToSet = (newType) => setType(newType)


    const changeListToShow = (category) => {
        var newList = []
        for (var i = 0; i < categories.length; i++) {
            if (categories[i].StrapiName == category.StrapiName) {
                let showall = {
                    StrapiName: categories[i].StrapiName,
                    categoryName: categories[i].name,
                    image: [[categories[i].image]]
                }
                newList.push(showall)
                newList = newList.concat(categories[i].sub_categories)
                typeToSet("subCategory")
            }
        }
        listToSet(newList)

    }
    return (


        <ul>

            {categoriesToShow.map((category) => {
                return (
                    <li className="nav_submenu-item">
                        <HamburgermenuItem category={category} type={type} listFunction={changeListToShow}>

                        </HamburgermenuItem>
                    </li>
                )
            })}

        </ul>
    )





}

export default HamburgermenuList
