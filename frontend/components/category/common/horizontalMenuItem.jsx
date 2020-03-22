import Link from "next/link";
import React, { useState, useEffect, useContext } from "react"
const HorizontalMenuItem = (category) => {
    console.log(category)
    // change color of hearthfunction
    const [categoryName, setCategoryName] = useState(category.HorizontalMenuItem.categoryName)
    const [categoryImageURL, setCategoryImageURL] = useState(category.HorizontalMenuItem.image[0].url)
    const [categoryLink, setCategoryLink] = useState(category.HorizontalMenuItem.categoryName)
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

