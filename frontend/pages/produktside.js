import React from "react";
import Produktside from "../components/productPage/produktside";
import PRODUCT_QUERY from "../apollo/queries/product/product";
import Query from "../components/query";
import { useRouter } from "next/router";
import Head from 'next/head'

const productSide = () => {
  const router = useRouter();
  return (
    <Query query={PRODUCT_QUERY} id={router.query.id}>
      {({ data: { product } }) => {

        return (
          <div>
            <Head>
              <title> {product.ProductName} </title>
            </Head>
            <Produktside productSide={product}></Produktside>
          </div>
        );
      }}
    </Query>
  );
};

export default productSide;
