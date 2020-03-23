import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PRODUCTS_QUERY from "../apollo/queries/product/products";
import Query from "../components/query";
import HorizontalMenuItem from "../components/category/common/horizontalMenuItem"
import Productgrid from "../components/category/productgrid";
import { SubCategoryList } from "../components/category/subCategoryList";
import CATEGORYGETSUBCATEGOREISWITHNAME_QUERY from "../apollo/queries/Category/CategoryGetSubcategoriesWithName"
import { useQuery } from "@apollo/react-hooks";
import QuerySubCategory from "../components/querySubCategory"
//   <Link href={{ pathname: "/produktside", query: { id: productcard.id } }}>
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

  var test = "Ansiktspleie"
  /*
            {
            categories[0].sub_categories.map((category) => {
              return (
                <div key={category.id}>
                  <HorizontalMenuItem key={category.id} HorizontalMenuItem={category}></HorizontalMenuItem>
                </div>
              )

            }

            )
          }
          */

  return (
    <div>

      <QuerySubCategory query={CATEGORYGETSUBCATEGOREISWITHNAME_QUERY} nametoInsert={test}>
        {({ data: { categories } }) => {
          console.log(categories[0].sub_categories)
          return (
            <div className="scrollmenu">
              {categories[0].sub_categories.map((category) => {
                return (

                  <HorizontalMenuItem key={category.id} HorizontalMenuItem={category}></HorizontalMenuItem>

                )
              })}
            </div>
          )

        }}
      </QuerySubCategory>

      <div classname="container">

        <div className="row">
          <div className="col-lg">

            <div className="jumbotron featured-article">

              <img src="images/hudpleievelger.png"></img>



            </div>
          </div>
          {/* featured article end*/}
          <div className="col-sm">
            <ul >
              <li>
                <div className="jumbotron">

                  <img src="images/groon.png"></img>


                </div>
              </li>

              <li>
                <div className="jumbotron">

                  <img src="images/red.png"></img>



                </div>
              </li>
            </ul>
          </div>





        </div>
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
              <Productgrid productgrid={products} />;
            </div>
          );
        }}
      </Query>
    </div >
  );
};

export default Category;
