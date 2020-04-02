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




    return (
        <Query query={GETCATEGORIES_QUERY}>
            {({ data: { categories } }) => {

                return (

                    <ul>

                        {categories.map((category) => {
                            return (
                                <li className="nav_submenu-item">
                                    <HamburgermenuItem category={category} type={"category"}>

                                    </HamburgermenuItem>
                                </li>
                            )
                        })}

                    </ul>
                )


            }}
        </Query>

    )
}

export default HamburgermenuList