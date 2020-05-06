import Link from "next/link";
import React from "react";

const HamburgermenuItem = props => {

    if (props.type == "category") {
        return (
            <div onClick={() => props.listFunction(props.category)}>
                <div className="myImg">
                    <img className="myImg" src={"https://trnbackend.herokuapp.com" + props.category.image.url} alt="logo" />
                </div>

                <p className="nav-link">{props.category.name}</p>

            </div>

        )
    } else {
        return (
            <Link href={{ pathname: "/subCategory", query: { id: props.category.StrapiName } }}>
                <div onClick={props.closeNav}>
                    <div className="myImg">
                        <img className="myImg" src={"https://trnbackend.herokuapp.com" + props.category.image[0].url} alt="logo" />
                    </div>

                    <p className="nav-link">{props.category.categoryName}</p>

                </div>
            </Link>
        )
    }


}

export default HamburgermenuItem


