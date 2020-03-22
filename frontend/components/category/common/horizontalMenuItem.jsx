import Link from "next/link";
import React, { useState, useEffect, useContext } from "react"
const HorizontalMenuItem = ({ product }) => {
    console.log(product[0])
    // change color of hearthfunction
    const [categoryName, setCategoryName] = useState(product.HorizontalMenuItem.categoryName)
    const [categoryImageURL, setCategoryImageURL] = useState(product.HorizontalMenuItem.image[0].url)
    console.log(categoryImageURL)
    const [categoryLink, setCategoryLink] = useState(product.HorizontalMenuItem.categoryName)
    return (
        <div className="navitem">
            <div>
                <Link href={categoryLink}>
                    <a className="nav-link frontpage-img-wh"><img src={"https://trnbackend.herokuapp.com" + categoryImageURL} alt="logo" /></a>
                </Link>
            </div>
            <div>
                <Link href={categoryLink}>
                    <a> {categoryName}</a>
                </Link>
            </div>
        </div>
    )
}

export default HorizontalMenuItem

