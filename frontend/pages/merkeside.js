import React from "react";
/* import { useRouter } from "next/router";
import Query from "../components/query";
import PRODUCT_QUERY from "../apollo/queries/product/product"; */

const merkeside = () => {
  //const router = useRouter();
  return (
    <div>
      <h1>Dette er merkesiden</h1>
    </div>
  );
};

export default merkeside;

/**
 * <Query query={PRODUCT_QUERY} id={router.query.id}>
      {({ data: { product } }) => {
        return (
          <div>
            <h1>Dette er merkesiden</h1>
          </div>
        );
      }}
    </Query>
 * 
 */
