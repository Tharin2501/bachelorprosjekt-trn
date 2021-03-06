import React from "react";
import { useRouter } from "next/router";
import BRAND_QUERY from "../apollo/queries/brand/brand";
import Query from "../components/query";
import Head from 'next/head'
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
                {({ data: { brand } }) => {
                    return (
                        <div>
                            <Head>
                                <title> {brand.title} </title>
                            </Head>
                            <SubCategoryBrandcomponent brand={brand} subCategoryName={router.query.id} brandName={router.query.brandName} />
                        </div>
                    );
                }}
            </Query>

        </div>
    );
};
export default SubCategoryBrand;
