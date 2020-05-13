import Link from "next/link";
import React from "react";
import { checkIfSpaceOrEnterPressed } from "../utils/accessibilityUtil"
const HamburgermenuItem = props => {

    if (props.type == "category") {
        return (

            <div tabindex="0" onClick={() => props.listFunction(props.category)} onKeyDown={() => { checkIfSpaceOrEnterPressed(event) ? props.listFunction(props.category) : null }}>

                <div className="myImg">
                    <img className="myImg" src={"https://trnbackend.herokuapp.com" + props.category.image.url} alt="" />
                </div>

                <p className="nav-link">{props.category.name}</p>

            </div>


        )
    } else {
        return (
            <Link href={{ pathname: "/subCategory", query: { id: props.category.StrapiName } }} >
                <div tabindex="0" onClick={props.closeNav} onKeyDown={() => { checkIfSpaceOrEnterPressed(event) ? props.closeNav : null }}>
                    <div className="myImg">
                        <img className="myImg" src={"https://trnbackend.herokuapp.com" + props.category.image[0].url} alt="" />
                    </div>

                    <p className="nav-link">{props.category.categoryName}</p>

                </div>
            </Link>

        )
    }


}

export default HamburgermenuItem


