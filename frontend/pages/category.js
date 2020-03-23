import React from "react";

import SubCategoryList from "../components/category/subCategoryList"
import ProductsComonent from "../components/category/productsComponent";
import Highlight3Articles from "../components/category/highlight3Articles"
//   <Link href={{ pathname: "/produktside", query: { id: productcard.id } }}>
const Category = () => {


  var categoryToInsert = "Ansiktspleie"

  return (
    <div>

      <SubCategoryList SubCategoryList={categoryToInsert}></SubCategoryList>


      <Highlight3Articles></Highlight3Articles>

      <ProductsComonent></ProductsComonent>
    </div >
  );
};

export default Category;
