import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PRODUCTS_QUERY from "../apollo/queries/product/products";
import Query from "../components/query";
import HorizontalMenuItem from "../components/category/common/horizontalMenuItem"
import Productgrid from "../components/category/productgrid";
import { SubCategoryList } from "../components/category/subCategoryList";


const Category = () => {

  const producttest = {
    id: "test",
    name: "Parfyme",
    imageUrl: "/images/parfyme.png",
    href: "parfyme"
  }

  const producttest2 = {
    id: "test",
    name: "hudpleie",
    imageUrl: "/images/hudpleie.png",
    href: "hudpleie"
  }

  return (
    <div>
      <div className="scrollmenu">
        <HorizontalMenuItem HorizontalMenuItem={producttest}></HorizontalMenuItem>
        <HorizontalMenuItem HorizontalMenuItem={producttest2}></HorizontalMenuItem>
        <HorizontalMenuItem HorizontalMenuItem={producttest}></HorizontalMenuItem>
        <HorizontalMenuItem HorizontalMenuItem={producttest}></HorizontalMenuItem>
        <HorizontalMenuItem HorizontalMenuItem={producttest}></HorizontalMenuItem>
        <HorizontalMenuItem HorizontalMenuItem={producttest}></HorizontalMenuItem>
        <HorizontalMenuItem HorizontalMenuItem={producttest}></HorizontalMenuItem>
        <HorizontalMenuItem HorizontalMenuItem={producttest}></HorizontalMenuItem>
        <HorizontalMenuItem HorizontalMenuItem={producttest}></HorizontalMenuItem>

      </div>
      <Query query={PRODUCTS_QUERY} id={null}>
        {({ data: { products } }) => {
          return (
            <div>
              <h1>Makeup</h1>
              <p>
                {" "}
                Festlook eller hverdagsmakeup uansett hva du er ute etter finner
                du alt innen makeup hos Tax Free. Den perfekte maskaraen.
                Foundations til alle hudtyper og med forskjellige dekkevne.
                Settingsprayer, concealere, primere og rouger i alle
                konsistenser – til forskjellige anledninger. Lek deg med
                øyenskyggene våre og skap det uttrykket du ønsker. Til leppene
                har vi lippgloss, leppestift, leppepomader og lipliner alt fra
                den mest shiny til den matteste matte. Her finner du også
                makeupsett i forskjellige fasonger og farger. Finn din favoritt
                sminke hos oss til en god pris.
              </p>
              <SubCategoryList />
              <Productgrid productgrid={products} />;
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Category;
