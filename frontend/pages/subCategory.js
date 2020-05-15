import React from "react";
import { useRouter } from "next/router";
import SubCategoryListSubCategory from "../components/category/subCategoryListSubCategory"
import SubCategoryProductsComponent from "../components/category/subCategory/subCategoryProductsComponent";
import GETSUBCATEGORYPRODUCTSFROMSTRAPINAME_QUERY from "../apollo/queries/subCategories/getSubCategoryProductsFromStrapiName"
import QuerySubCategory from "../components/querySubCategory"
import { Button, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
const SubCategory = () => {

    const router = useRouter()
    const divStyle = {
        color: "white",

    };
    return (

        <QuerySubCategory query={GETSUBCATEGORYPRODUCTSFROMSTRAPINAME_QUERY} categoryName={router.query.id}>
            {({ data: { subCategories } }) => {
                return (
                    <div>

                        <SubCategoryListSubCategory mainCategory={subCategories[0].category} subCategoryList={subCategories[0].category.sub_categories} categoryName={subCategories[0].category.StrapiName}></SubCategoryListSubCategory>



                        <SubCategoryProductsComponent typesDefault={subCategories[0].type_of_products} pageTitle={router.query.id} categoryName={subCategories[0].categoryName} description={subCategories[0].description} ></SubCategoryProductsComponent>
                    </div>
                )
            }}

        </QuerySubCategory>
    );
};
export default SubCategory;
