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

      {/**Brand info */}
      <Query query={BRAND_QUERY} id={router.query.id}>
        {({ data: { brand, productid } }) => {
          return (
            <div>
              <SpecificBrandPage brandDetailSide={brand} key={productid} />
            </div>
          );
        }}
      </Query>
      {/**Products */}
    </div>
  );
};

export default merkesidedetalj;
