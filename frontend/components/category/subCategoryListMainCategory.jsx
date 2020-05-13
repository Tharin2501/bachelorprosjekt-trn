import React from "react";
import HorizontalMenuItem from "./common/horizontalMenuItem"
import Link from "next/link";
const SubCategoryListMainCategory = ({ subCategoryList, categoryName }) => {


    return (
        <div className="scrollmenu">
            {subCategoryList.map((category) => {
                return (
                    <HorizontalMenuItem key={category.id} pathnamekatOrSub={"/subCategory"} category={category}></HorizontalMenuItem>
                )
            })
            }

        </div>



    )

}


export default SubCategoryListMainCategory
