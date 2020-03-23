import React from "react";
import QuerySubCategory from "../../components/querySubCategory"
import HorizontalMenuItem from "../../components/category/common/horizontalMenuItem"
import CATEGORYGETSUBCATEGOREISWITHNAME_QUERY from "../../apollo/queries/Category/CategoryGetSubcategoriesWithName"
const SubCategoryList = (props) => {
    var test = "Ansiktspleie"
    //console.log(props.SubCategoryList)
    return (
        <QuerySubCategory query={CATEGORYGETSUBCATEGOREISWITHNAME_QUERY} nametoInsert={props.SubCategoryList}>
            {({ data: { categories } }) => {
                console.log(categories[0].sub_categories)
                return (
                    <div className="scrollmenu">
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
