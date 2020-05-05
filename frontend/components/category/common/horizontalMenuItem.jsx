import Link from "next/link";
import React, { useState, useEffect, useContext } from "react"
const HorizontalMenuItem = (props) => {
    const [categoryStrapiName, setCategoryStrapiName] = useState(props.category.StrapiName)

    if (props.pathnamekatOrSub === "/category") {
        return (

            <div className="navitem">
                <div>
                    <Link href={{ pathname: props.pathnamekatOrSub, query: { id: categoryStrapiName } }}>
                        <a className="nav-link imageSize"><img src={"https://trnbackend.herokuapp.com" + props.category.image.url} alt="logo" /></a>
                    </Link>
                </div>
                <div>
                    <Link href={{ pathname: props.pathnamekatOrSub, query: { id: categoryStrapiName } }}>
                        <a className="category-link">> {props.category.name}</a>
                    </Link>
                </div>
            </div>
        )
    } else {
        return (

            <div className="navitem">
                <div>
                    <Link href={{ pathname: props.pathnamekatOrSub, query: { id: categoryStrapiName } }}>
                        <a className="nav-link imageSize"><img src={"https://trnbackend.herokuapp.com" + props.category.image[0].url} alt="logo" /></a>
                    </Link>
                </div>
                <div>
                    <Link href={{ pathname: props.pathnamekatOrSub, query: { id: categoryStrapiName } }}>
                        <a className="category-link"> {props.category.categoryName}</a>
                    </Link>
                </div>
            </div>
        )
    }

}

export default HorizontalMenuItem

