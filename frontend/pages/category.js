import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PRODUCTS_QUERY from "../apollo/queries/product/products";
import Query from "../components/query";
import Link from "next/link";
import Productgrid from "../components/category/productgrid";
import { SubCategoryList } from "../components/category/subCategoryList";
import { Navbar, NavItem, Nav, NavbarToggler, NavLink } from "reactstrap";

const Category = () => {
  return (
    <div>
      <div className="scrollmenu">

        <div className="navitem">
          <div>
            <Link href="parfyme">
              <a className="nav-link frontpage-img-wh"><img src="/images/parfyme.png" alt="logo" /></a>
            </Link>
          </div>
          <div>
            <Link href="parfyme">
              <a> parfyme</a>
            </Link>
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
