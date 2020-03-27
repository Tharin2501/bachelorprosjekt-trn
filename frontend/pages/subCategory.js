import React from "react";
import { useRouter } from "next/router";
import SubCategoryList from "../components/category/subCategoryList"
import ProductsComonent from "../components/category/productsComponent";
import Highlight3Articles from "../components/category/highlight3Articles"
import GETCATEGORYFROMSUBCATEGORYSTRAPINAME_QUERY from "../apollo/queries/subCategories/getSubCategoryFromStrapiName"
import CATEGORYGETSUBCATEGOREISWITHNAME_QUERY from "../apollo/queries/Category/CategoryGetSubcategoriesWithName"
import GETSUBCATEGORYPRODUCTSFROMSTRAPINAME_QUERY from "../apollo/queries/subCategories/getSubCategoryProductsFromStrapiName"
import QuerySubCategory from "../components/querySubCategory"

const SubCategory = () => {

    const router = useRouter()

    return (

        <QuerySubCategory query={GETSUBCATEGORYPRODUCTSFROMSTRAPINAME_QUERY} nametoInsert={router.query.id}>
            {({ data: { subCategories } }) => {
                //console.log(subCategories[0].products)
                return (
                    <div>
                        <SubCategoryList subCategoryList={subCategories[0].category.sub_categories} categoryName={subCategories[0].category.StrapiName}></SubCategoryList>
                        <ProductsComonent categoriesList={subCategories[0].products} isSubCategoryGrid={true} pageTitle={router.query.id}></ProductsComonent>
                    </div>
                )
            }}

        </QuerySubCategory>
    );
};
export default SubCategory;
