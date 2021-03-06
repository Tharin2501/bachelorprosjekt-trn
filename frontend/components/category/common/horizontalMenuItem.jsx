import Link from "next/link";
import React, { useState, useEffect, useContext } from "react"
const HorizontalMenuItem = (props) => {
    const [categoryStrapiName, setCategoryStrapiName] = useState(props.category.StrapiName)
    if (props.pathnamekatOrSub === "/category") {
        return (

            <div className="navitem">
                <div>
                    <Link href={{ pathname: props.pathnamekatOrSub, query: { id: categoryStrapiName } }}>
                        <div className="nav-link imageSize"><img src={"https://trnbackend.herokuapp.com" + props.category.image.url} alt="" /></div>
                    </Link>
                </div>
                <div>
                    <Link href={{ pathname: props.pathnamekatOrSub, query: { id: categoryStrapiName } }}>
                        <a className="nav-link frontpageIconsText"> {props.category.name}</a>
                    </Link>
                </div>
            </div>
        )
    } else if (props.pathnamekatOrSub === "/subCategoryBrand") {
        return (

            <div className="navitem">
                <div>
                    <Link href={{ pathname: props.pathnamekatOrSub, query: { id: props.category.StrapiName, brandName: props.brandName, brandID: props.brandID } }}>
                        <div className="nav-link imageSize"><img src={"https://trnbackend.herokuapp.com" + props.category.image[0].url} alt="" /></div>
                    </Link>
                </div>
                <div>
                    <Link href={{ pathname: props.pathnamekatOrSub, query: { id: props.category.StrapiName, brandName: props.brandName, brandID: props.brandID } }} >
                        <a className="nav-link frontpageIconsText"> {props.category.categoryName}</a>
                    </Link>
                </div>
            </div>
        )
    }
    else {
        return (

            <div className="navitem">
                <div>
                    <Link href={{ pathname: props.pathnamekatOrSub, query: { id: categoryStrapiName } }}>
                        <div className="nav-link imageSize"><img src={"https://trnbackend.herokuapp.com" + props.category.image[0].url} alt="" /></div>
                    </Link>
                </div>
                <div>
                    <Link href={{ pathname: props.pathnamekatOrSub, query: { id: categoryStrapiName } }}>
                        <a className="nav-link frontpageIconsText"> {props.category.categoryName}</a>
                    </Link>
                </div>
            </div>
        )
    }

}

export default HorizontalMenuItem