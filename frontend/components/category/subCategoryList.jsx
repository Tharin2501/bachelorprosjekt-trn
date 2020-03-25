import React from "react";
import QuerySubCategory from "../../components/querySubCategory"
import HorizontalMenuItem from "../../components/category/common/horizontalMenuItem"
import CATEGORYGETSUBCATEGOREISWITHNAME_QUERY from "../../apollo/queries/Category/CategoryGetSubcategoriesWithName"
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
                    <HorizontalMenuItem key={category.id} HorizontalMenuItem={category}></HorizontalMenuItem>
                )
            })
            }

        </div>



    )

}


export default SubCategoryList
