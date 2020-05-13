import React from "react";
import HorizontalMenuItem from "./common/horizontalMenuItem"
import Link from "next/link";
const SubCategoryList = ({ subCategoryList, categoryName }) => {


    return (
        <div className="scrollmenu">

            <Link href={{ pathname: "/category", query: { id: categoryName } }}>
                <button type="button" className="btn btn-circlebtn-sm">Se alt</button>
            </Link>

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
