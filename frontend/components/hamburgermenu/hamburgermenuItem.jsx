import Link from "next/link";
import React from "react";
import { checkIfSpaceOrEnterPressed } from "../utils/accessibilityUtil"
const HamburgermenuItem = props => {
    if (props.type == "category") {
        return (

            <div tabindex={props.tabindexNumber} onClick={() => props.listFunction(props.category)} onKeyDown={() => { checkIfSpaceOrEnterPressed(event) ? props.listFunction(props.category) : null }}>

                <div className="myImg">
                    <img className="myImg" src={"https://trnbackend.herokuapp.com" + props.category.image.url} alt="" />
                </div>

                <p className="nav-link">{props.category.name}</p>

            </div>


        )
    } else {
        return (

            <div tabindex={props.tabindexNumber} onClick={() => props.categoryClickFunction(props.category.StrapiName)} onKeyDown={() => { checkIfSpaceOrEnterPressed(event) ? props.categoryClickFunction(props.category.StrapiName) : null }}>
                <div className="myImg">
                    <img className="myImg" src={"https://trnbackend.herokuapp.com" + props.category.image[0].url} alt="" />
                </div>

                <p className="nav-link ">{props.category.categoryName}</p>

            </div>


        )
    }


}

export default HamburgermenuItem


