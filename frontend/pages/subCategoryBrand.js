import React from "react";
import { useRouter } from "next/router";
import SubCategoryList from "../components/category/subCategoryList"
import SubCategoryProductsComponent from "../components/category/subCategory/subCategoryProductsComponent";
import GETSUBCATEGORYPRODUCTSFROMBRANDNAME_QUERY from "../apollo/queries/subCategories/getSubCategoryProductsFromBrandName"
import QuerySubCategoryBrandName from "../components/querySubCategoryBrandName"
import Productgrid from "../components/category/productgrid";
/*
<SubCategoryList subCategoryList={subCategories[0].category.sub_categories} categoryName={subCategories[0].category.StrapiName}></SubCategoryList>
                        <SubCategoryProductsComponent typesDefault={subCategories[0].type_of_products} pageTitle={router.query.id} description={subCategories[0].description} ></SubCategoryProductsComponent>
                        */
const SubCategory = () => {

    const router = useRouter()
    return (

        <QuerySubCategoryBrandName query={GETSUBCATEGORYPRODUCTSFROMBRANDNAME_QUERY} subCategoryName={router.query.id} brandName={router.query.brandName}>

            {({ data: { subCategories } }) => {
                return (
                    <div>


                        <Productgrid productgrid={subCategories[0].products} />
                    </div>
                )
            }}

        </QuerySubCategoryBrandName>
    );
};
export default SubCategory;
