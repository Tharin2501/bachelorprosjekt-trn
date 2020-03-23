import React from "react";
import QuerySubCategory from "../../components/querySubCategory"
// ../components/querySubCategory
import CATEGORYGETSUBCATEGOREISWITHNAME_QUERY from "../../apollo/queries/Category/CategoryGetSubcategoriesWithName"
//../apollo/queries/Category/CategoryGetSubcategoriesWithName
export const SubCategoryList = () => {
    var test = "Ansiktspleie"

    return (
        <QuerySubCategory query={CATEGORYGETSUBCATEGOREISWITHNAME_QUERY} nametoInsert={test}>
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
