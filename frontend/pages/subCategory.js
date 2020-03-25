import React from "react";
import { useRouter } from "next/router";
import SubCategoryList from "../components/category/subCategoryList"
import ProductsComonent from "../components/category/productsComponent";
import Highlight3Articles from "../components/category/highlight3Articles"
import GETCATEGORYFROMSUBCATEGORYSTRAPINAME_QUERY from "../apollo/queries/subCategories/getSubCategoryFromStrapiName"
import CATEGORYGETSUBCATEGOREISWITHNAME_QUERY from "../apollo/queries/Category/CategoryGetSubcategoriesWithName"
import GETSUBCATEGORYPRODUCTSFROMSTRAPINAME_QUERY from "../apollo/queries/subCategories/getSubCategoryProductsFromStrapiName"
import QuerySubCategory from "../components/querySubCategory"
//   må refakorere!!
const SubCategory = () => {

    const router = useRouter()
    //subCategoryList={subCategories[0].category.sub_categories}
    // categoryName={subCategories[0].category.StrapiName}
    return (
        <div>
            <QuerySubCategory query={GETSUBCATEGORYPRODUCTSFROMSTRAPINAME_QUERY} nametoInsert={router.query.id}>
                {({ data: { subCategories } }) => {
                    console.log(subCategories[0].products)
                    return (
                        <div>
                            <SubCategoryList subCategoryList={subCategories[0].category.sub_categories} categoryName={subCategories[0].category.StrapiName}></SubCategoryList>
                            <ProductsComonent categoriesList={subCategories[0].products} isSubCategoryGrid={true}></ProductsComonent>
                        </div>
                    )
                }}

            </QuerySubCategory>


            <QuerySubCategory query={GETCATEGORYFROMSUBCATEGORYSTRAPINAME_QUERY} nametoInsert={router.query.id}>
                {({ data: { subCategories } }) => {
                    //console.log(subCategories[0].category.name)
                    //console.log(subCategories)
                    return (
                        <QuerySubCategory query={CATEGORYGETSUBCATEGOREISWITHNAME_QUERY} nametoInsert={subCategories[0].category.name}>
                            {({ data: { categories } }) => {


                                return (
                                    <div>
                                        {/* // first*/}
                                        <SubCategoryList subCategoryList={categories[0].sub_categories} categoryName={subCategories[0].category.name}></SubCategoryList>
                                        <ProductsComonent categoriesList={categories}></ProductsComonent>
                                    </div >
                                )
                            }}
                        </QuerySubCategory>


                    )

                }}
            </QuerySubCategory>
        </div>


    );
};
export default SubCategory;
