import React from "react";
import { useRouter } from "next/router";
import SubCategoryList from "../components/category/subCategoryList"
import CategoryProductsComonent from "../components/category/categoryProductsComponent";
import Highlight3Articles from "../components/category/highlight3Articles"
import CATEGORYGETSUBCATEGOREISWITHNAME_QUERY from "../apollo/queries/Category/CategoryGetSubcategoriesWithName"
import QuerySubCategory from "../components/querySubCategory";


const Category = () => {



  const router = useRouter()

  return (

    <QuerySubCategory query={CATEGORYGETSUBCATEGOREISWITHNAME_QUERY} nametoInsert={router.query.id}>
      {({ data: { categories } }) => {
        //console.log(categories)
        return (
          <div>
            {/* first*/}
            <SubCategoryList subCategoryList={categories[0].sub_categories} categoryName={router.query.id}></SubCategoryList>


            <Highlight3Articles ></Highlight3Articles>

            <CategoryProductsComonent categoriesList={categories} isSubCategoryGrid={false} pageTitle={router.query.id}></CategoryProductsComonent>
          </div >
        )
      }}
    </QuerySubCategory>



  );





};
export default Category;
