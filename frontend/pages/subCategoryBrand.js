import React from "react";
import { useRouter } from "next/router";
import SubCategoryList from "../components/category/subCategoryList"
import SubCategoryProductsComponent from "../components/category/subCategory/subCategoryProductsComponent";
import BRAND_QUERY from "../apollo/queries/brand/brand";
import Query from "../components/query";

import SubCategoryBrandcomponent from "../components/brandPage/subCategoryBrandcomponent"
/*
<SubCategoryList subCategoryList={subCategories[0].category.sub_categories} categoryName={subCategories[0].category.StrapiName}></SubCategoryList>
                        <SubCategoryProductsComponent typesDefault={subCategories[0].type_of_products} pageTitle={router.query.id} description={subCategories[0].description} ></SubCategoryProductsComponent>
                        */
const SubCategoryBrand = () => {

    const router = useRouter()
    return (
        <div>

            <Query query={BRAND_QUERY} id={router.query.brandID}>
                {({ data: { brand, productid } }) => {
                    return (
                        <div>
                            <SubCategoryBrandcomponent brand={brand} subCategoryName={router.query.id} brandName={router.query.brandName} />
                        </div>
                    );
                }}
            </Query>

        </div>
    );
};
export default SubCategoryBrand;
