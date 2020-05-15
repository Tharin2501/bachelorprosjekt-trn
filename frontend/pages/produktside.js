import React from "react";
import Produktside from "../components/productPage/produktside";
import PRODUCT_QUERY from "../apollo/queries/product/product";
import Query from "../components/query";
import { useRouter } from "next/router";

const productSide = () => {
  const router = useRouter();
  return (
    <Query query={PRODUCT_QUERY} id={router.query.id}>
      {({ data: { product } }) => {

        return (

          <Produktside productSide={product}></Produktside>

        );
      }}
    </Query>
  );
};

export default productSide;
