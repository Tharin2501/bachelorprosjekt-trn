import React from "react";
import { useRouter } from "next/router";
import SubCategoryList from "../components/category/subCategoryList"
import ProductsComonent from "../components/category/productsComponent";
import Highlight3Articles from "../components/category/highlight3Articles"
import CATEGORYGETSUBCATEGOREISWITHNAME_QUERY from "../apollo/queries/Category/CategoryGetSubcategoriesWithName"
import QuerySubCategory from "../components/querySubCategory";
//   <Link href={{ pathname: "/produktside", query: { id: productcard.id } }}>
const Category = () => {



  const router = useRouter()

  // all category items


  return (

    <QuerySubCategory query={CATEGORYGETSUBCATEGOREISWITHNAME_QUERY} nametoInsert={router.query.id}>
      {({ data: { categories } }) => {
        { console.log(categories) }




        return (
          <div>
            {/* first*/}
            <SubCategoryList subCategoryList={categories[0].sub_categories} categoryName={router.query.id}></SubCategoryList>


            <Highlight3Articles ></Highlight3Articles>

            <ProductsComonent categoriesList={categories} isSubCategoryGrid={false}></ProductsComonent>
          </div >
        )
      }}
    </QuerySubCategory>



  );





};
export default Category;
