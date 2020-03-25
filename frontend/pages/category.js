import React from "react";
import { useRouter } from "next/router";
import SubCategoryList from "../components/category/subCategoryList"
import ProductsComonent from "../components/category/productsComponent";
import Highlight3Articles from "../components/category/highlight3Articles"
import CATEGORYGETSUBCATEGOREISWITHNAME_QUERY from "../apollo/queries/Category/CategoryGetSubcategoriesWithName"
import QuerySubCategory from "../components/querySubCategory";
//   <Link href={{ pathname: "/produktside", query: { id: productcard.id } }}>
const Category = () => {
  var ProductsArray = []
  const router = useRouter()
  return (
    <div>
      <QuerySubCategory query={CATEGORYGETSUBCATEGOREISWITHNAME_QUERY} nametoInsert={router.query.id}>
        {({ data: { categories } }) => {
          getProductsArray(categories)

          return (
            // first
            <SubCategoryList subCategoryList={categories[0].sub_categories} categoryName={router.query.id}></SubCategoryList>
          )
        }}
      </QuerySubCategory>



      <Highlight3Articles ></Highlight3Articles>

      <ProductsComonent ProductsComonent={router.query.id}></ProductsComonent>
    </div >
  );

  // all category items
  function getProductsArray(categories) {

    //console.log(categories[0].sub_categories.length)
    //console.log(categories[0].sub_categories[1])

    var subcatcount;

    for (subcatcount = 0; subcatcount < categories[0].sub_categories.length; subcatcount++) {
      ProductsArray = ProductsArray.concat(categories[0].sub_categories[subcatcount].products)
    }
    console.log(ProductsArray)


  };



};
// Alkohol
export default Category;
