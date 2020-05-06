import React from "react";
import BrandPage from "../components/brandPage/brandPage";
import BrandPageOverView from "../components/brandPage/brandPageOverView";
import SpecificBrandPage from "../components/brandPage/specificBrandPage";

const merkeSide = () => {
  return (
    <div>
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
