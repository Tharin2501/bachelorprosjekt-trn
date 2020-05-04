import React from "react";
import BrandPage from "../components/brandPage/brandPage";
import BrandPageOverView from "../components/brandPage/brandPageOverView";
import SpecificBrandPage from "../components/brandPage/specificBrandPage";

const merkeSide = () => {
  return (
    <div>
      <h1>Dette er merkesiden</h1>
      <BrandPageOverView />
      <BrandPage />
    </div>
  );
};

export default merkeSide;

/**
 * 
 *
      <SpecificBrandPage />
 */
