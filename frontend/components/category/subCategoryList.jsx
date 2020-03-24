import React from "react";
import QuerySubCategory from "../../components/querySubCategory"
import HorizontalMenuItem from "../../components/category/common/horizontalMenuItem"
import CATEGORYGETSUBCATEGOREISWITHNAME_QUERY from "../../apollo/queries/Category/CategoryGetSubcategoriesWithName"
import Link from "next/link";
const SubCategoryList = (props) => {
    var test = "Ansiktspleie"
    //console.log(props.SubCategoryList)
    return (
        <QuerySubCategory query={CATEGORYGETSUBCATEGOREISWITHNAME_QUERY} nametoInsert={props.SubCategoryList}>
            {({ data: { categories } }) => {

                return (
                    <div className="scrollmenu">
                        <div className="navitem">
                            <Link href={{ pathname: "/category", query: { id: props.SubCategoryList } }}>
                                <button type="button" className="btn btn-primary btn-circle btn-sm">Se alt</button>
                            </Link>
                        </div>
                        {categories[0].sub_categories.map((category) => {
                            return (

                                <HorizontalMenuItem key={category.id} HorizontalMenuItem={category}></HorizontalMenuItem>

                            )
                        })}
                    </div>
                )

            }}
        </QuerySubCategory>

    )

}

export default SubCategoryList
