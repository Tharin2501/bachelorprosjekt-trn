import React from "react";
import { useRouter } from "next/router";
import SubCategoryListSubCategory from "../components/category/subCategoryListSubCategory"
import SubCategoryProductsComponent from "../components/category/subCategory/subCategoryProductsComponent";
import GETSUBCATEGORYPRODUCTSFROMSTRAPINAME_QUERY from "../apollo/queries/subCategories/getSubCategoryProductsFromStrapiName"
import QuerySubCategory from "../components/querySubCategory"
import Head from 'next/head'
const SubCategory = () => {

    const router = useRouter()

    return (

        <QuerySubCategory query={GETSUBCATEGORYPRODUCTSFROMSTRAPINAME_QUERY} categoryName={router.query.id}>
            {({ data: { subCategories } }) => {
                return (
                    <div>
                        <Head>
                            <title> {subCategories[0].categoryName} </title>
                        </Head>

                        <SubCategoryListSubCategory mainCategory={subCategories[0].category} subCategoryList={subCategories[0].category.sub_categories} categoryName={subCategories[0].category.StrapiName}></SubCategoryListSubCategory>



                        <SubCategoryProductsComponent typesDefault={subCategories[0].type_of_products} pageTitle={router.query.id} categoryName={subCategories[0].categoryName} description={subCategories[0].description} ></SubCategoryProductsComponent>
                    </div>
                )
            }}

        </QuerySubCategory>
    );
};
export default SubCategory;
