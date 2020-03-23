import React from "react";
import { useRouter } from "next/router";
import SubCategoryList from "../components/category/subCategoryList"
import ProductsComonent from "../components/category/productsComponent";
import Highlight3Articles from "../components/category/highlight3Articles"
//   <Link href={{ pathname: "/produktside", query: { id: productcard.id } }}>
const Category = () => {

  const router = useRouter()
  return (
    <div>

      <SubCategoryList SubCategoryList={router.query.id}></SubCategoryList>


      <Highlight3Articles></Highlight3Articles>

      <ProductsComonent></ProductsComonent>
    </div >
  );
};
// Alkohol
export default Category;
