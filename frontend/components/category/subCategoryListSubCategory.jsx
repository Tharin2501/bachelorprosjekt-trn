import React from "react";
import HorizontalMenuItem from "./common/horizontalMenuItem"
import Link from "next/link";
const SubCategoryListSubCategory = ({ subCategoryList, categoryName, mainCategory }) => {

    return (
        <div className="scrollmenu">

            <div className="navitem">
                <div>
                    <Link href={{ pathname: "/category", query: { id: categoryName } }}>
                        <a className="nav-link imageSize"><img src={"https://trnbackend.herokuapp.com" + mainCategory.image.url} alt="" /></a>
                    </Link>
                </div>
                <div>
                    <Link href={{ pathname: "/category", query: { id: categoryName } }}>
                        <a className="nav-link frontpageIconsText"> {mainCategory.name}</a>
                    </Link>
                </div>
                <div className="verticalLine"></div>
            </div>



            {subCategoryList.map((category) => {
                return (
                    <HorizontalMenuItem key={category.id} pathnamekatOrSub={"/subCategory"} category={category}></HorizontalMenuItem>
                )
            })
            }

        </div>



    )

}


export default SubCategoryListSubCategory 
