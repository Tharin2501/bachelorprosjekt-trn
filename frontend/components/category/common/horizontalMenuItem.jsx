import Link from "next/link";
import React, { useState, useEffect, useContext } from "react"
const HorizontalMenuItem = (product) => {
    console.log({ product })

    // change color of hearthfunction
    const [categoryName, setCategoryName] = useState(product.HorizontalMenuItem.name)
    const [categoryImageURL, setCategoryImageURL] = useState(product.HorizontalMenuItem.imageUrl)
    const [categoryLink, setCategoryLink] = useState(product.HorizontalMenuItem.href)
    console.log(categoryImageURL)
    console.log(categoryName)
    return (
        <div className="navitem">
            <div>
                <Link href={categoryLink}>
                    <a className="nav-link frontpage-img-wh"><img src={categoryImageURL} alt="logo" /></a>
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

