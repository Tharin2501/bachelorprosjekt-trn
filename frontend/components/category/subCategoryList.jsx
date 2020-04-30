import React from "react";
import HorizontalMenuItem from "../category/common/horizontalMenuItem"
import Link from "next/link";
const SubCategoryList = ({ subCategoryList, categoryName }) => {


    return (
        <div className="scrollmenu">
            <div className="navitem">
                <Link href={{ pathname: "/category", query: { id: categoryName } }}>
                    <button type="button" className="btn btn-primary btn-circle btn-sm">Se alt</button>
                </Link>
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


export default SubCategoryList
