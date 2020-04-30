import React from "react";
import { useRouter } from "next/router";
import SubCategoryList from "../components/category/subCategoryList"
import SubCategoryProductsComponent from "../components/category/subCategory/subCategoryProductsComponent";
import GETSUBCATEGORYPRODUCTSFROMSTRAPINAME_QUERY from "../apollo/queries/subCategories/getSubCategoryProductsFromStrapiName"
import QuerySubCategory from "../components/querySubCategory"

const SubCategory = () => {

    const router = useRouter()

    return (

        <QuerySubCategory query={GETSUBCATEGORYPRODUCTSFROMSTRAPINAME_QUERY} categoryName={router.query.id}>
            {({ data: { subCategories } }) => {
                return (
                    <div>
                        <SubCategoryList subCategoryList={subCategories[0].category.sub_categories} categoryName={subCategories[0].category.StrapiName}></SubCategoryList>
                        <SubCategoryProductsComponent typesDefault={subCategories[0].type_of_products} pageTitle={router.query.id} description={subCategories[0].description} ></SubCategoryProductsComponent>
                    </div>
                )
            }}

        </QuerySubCategory>
    );
};
export default SubCategory;
