import React from "react";
import QuerySubCategory from "../../components/querySubCategory"
import HorizontalMenuItem from "../../components/category/common/horizontalMenuItem"
import CATEGORYGETSUBCATEGOREISWITHNAME_QUERY from "../../apollo/queries/Category/CategoryGetSubcategoriesWithName"
import Link from "next/link";
const SubCategoryList = (props) => {
    var ProductsArray = []




    return (
        <QuerySubCategory query={CATEGORYGETSUBCATEGOREISWITHNAME_QUERY} nametoInsert={props.SubCategoryList}>
            {({ data: { categories } }) => {

                getProductsArray(categories)

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
    // all category items
    function getProductsArray(categories) {

        //console.log(categories[0].sub_categories.length)
        //console.log(categories[0].sub_categories[1])

        var subcatcount;

        for (subcatcount = 0; subcatcount < categories[0].sub_categories.length; subcatcount++) {
            ProductsArray = ProductsArray.concat(categories[0].sub_categories[subcatcount].products)
        }
        console.log(ProductsArray)


    };
}


/*
 for (productCount = 0; productCount < categories[0].sub_categories[subcatcount].length; productCount) {
            ProductsArray.concat(categories[0].sub_categories[subcatcount].products)
        }
        */

export default SubCategoryList
