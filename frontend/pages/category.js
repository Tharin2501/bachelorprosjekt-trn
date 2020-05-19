import React from "react";
import { useRouter } from "next/router";
import SubCategoryListMainCategory from "../components/category/subCategoryListMainCategory"
import CategoryProductsComonent from "../components/category/categoryProductsComponent";
import Highlight3Articles from "../components/category/highlight3Articles"
import CATEGORYGETSUBCATEGOREISWITHNAME_QUERY from "../apollo/queries/Category/CategoryGetSubcategoriesWithName"
import QuerySubCategory from "../components/querySubCategory";
import Head from 'next/head'

const Category = () => {



  const router = useRouter()

  return (

    <QuerySubCategory query={CATEGORYGETSUBCATEGOREISWITHNAME_QUERY} categoryName={router.query.id}  >
      {({ data: { categories } }) => {
        return (
          <div>
            <Head>
              <title> {categories[0].categoryName} </title>
            </Head>
            {/* first*/}
            <SubCategoryListMainCategory subCategoryList={categories[0].sub_categories} categoryName={router.query.id}></SubCategoryListMainCategory>


            <Highlight3Articles ></Highlight3Articles>

            <CategoryProductsComonent categoriesListInput={categories} pageTitle={router.query.id}></CategoryProductsComonent>
          </div >
        )
      }}
    </QuerySubCategory>



  );





};
export default Category;
