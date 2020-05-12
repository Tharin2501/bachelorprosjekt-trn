import React from "react";
import SpecificBrandPage from "../components/brandPage/specificBrandPage";
import { useRouter } from "next/router";
import Query from "../components/query";
import BRAND_QUERY from "../apollo/queries/brand/brand";


const merkesidedetalj = () => {
  const router = useRouter();
  console.log(router.query.id)

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
