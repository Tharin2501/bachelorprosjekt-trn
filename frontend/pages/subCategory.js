import React from "react";
import { useRouter } from "next/router";
import SubCategoryList from "../components/category/subCategoryList"
import ProductsComonent from "../components/category/productsComponent";
import Highlight3Articles from "../components/category/highlight3Articles"
import GETCATEGORYFROMSUBCATEGORYSTRAPINAME_QUERY from "../apollo/queries/subCategories/getSubCategoryFromStrapiName"
import CATEGORYGETSUBCATEGOREISWITHNAME_QUERY from "../apollo/queries/Category/CategoryGetSubcategoriesWithName"
import QuerySubCategory from "../components/querySubCategory"
//   må refakorere!!
const SubCategory = () => {

    const router = useRouter()
    return (
        <div>
            <QuerySubCategory query={GETCATEGORYFROMSUBCATEGORYSTRAPINAME_QUERY} nametoInsert={router.query.id}>
                {({ data: { subCategories } }) => {
                    //console.log(subCategories[0].category.name)
                    //console.log(subCategories)
                    return (
                        <QuerySubCategory query={CATEGORYGETSUBCATEGOREISWITHNAME_QUERY} nametoInsert={subCategories[0].category.name}>
                            {({ data: { categories } }) => {
                                //getProductsArray(categories)

                                return (
                                    // first
                                    <SubCategoryList subCategoryList={categories[0].sub_categories} categoryName={subCategories[0].category.name}></SubCategoryList>
                                )
                            }}
                        </QuerySubCategory>


                    )

                }}
            </QuerySubCategory>

        </div >
    );
};
export default SubCategory;
