import React from "react";
import BrandPage from "../components/brandPage/brandPage";
import Head from 'next/head'
const merkeSide = (props) => {
  return (
    <div>
      <Head>
        <title> Merker</title>
      </Head>
      <BrandPage />
    </div>
  );
};

export default merkeSide;
