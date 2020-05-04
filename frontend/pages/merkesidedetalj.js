import React from "react";
import BrandPage from "../components/brandPage/brandPage";
import BrandPageOverView from "../components/brandPage/brandPageOverView";
import SpecificBrandPage from "../components/brandPage/specificBrandPage";
import { useRouter } from "next/router";
import Query from "../components/query";
import BRAND_QUERY from "../apollo/queries/brand/brand";
import QuerySubCategory from "../components/querySubCategory";
import CATEGORYGETSUBCATEGOREISWITHNAME_QUERY from "../apollo/queries/Category/CategoryGetSubcategoriesWithName";
//TODO: Fikse horizontal scroll + laste inn produkter fra spesifikt merke

const merkesidedetalj = () => {
  const router = useRouter();

  return (
    <div>
      {/**Horizontal scroll menu */}
      {/*<QuerySubCategory
        query={CATEGORYGETSUBCATEGOREISWITHNAME_QUERY}
        categoryName={router.query.id}
      >
        {({ data: { categories } }) => {
          return (
            <div>
              <SubCategoryList
                subCategoryList={categories[0].sub_categories}
                categoryName={router.query.id}
              ></SubCategoryList>
              <CategoryProductsComonent
                categoriesListInput={categories}
                pageTitle={router.query.id}
              ></CategoryProductsComonent>
            </div>
          );
        }}
      </QuerySubCategory>*/}

      {/**Brand info */}
      <Query query={BRAND_QUERY} id={router.query.id}>
        {({ data: { brand } }) => {
          return (
            <div>
              <h1>Dette er merkedetalj siden</h1>
              <SpecificBrandPage brandDetailSide={brand} />
            </div>
          );
        }}
      </Query>
      {/**Products */}
    </div>
  );
};

export default merkesidedetalj;

/**
 * <QuerySubCategory query={CATEGORYGETSUBCATEGOREISWITHNAME_QUERY} categoryName={router.query.id}  >
      {({ data: { categories } }) => {
        return (
          <div>
    
            <SubCategoryList subCategoryList={categories[0].sub_categories} categoryName={router.query.id}></SubCategoryList>


            <Highlight3Articles ></Highlight3Articles>

            <CategoryProductsComonent categoriesListInput={categories} pageTitle={router.query.id}></CategoryProductsComonent>
          </div >
        )
      }}
    </QuerySubCategory>
 */
