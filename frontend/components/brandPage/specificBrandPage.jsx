import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Collapse,
  CardBody,
  Card,
} from "reactstrap";
import { useRouter } from "next/router";
//import Query from "../query";
//import BRAND_QUERY from "../../apollo/queries/brand/brand";
import QuerySubCategory from "../querySubCategory";

import SubCategoryList from "../../components/category/subCategoryList";
import CategoryProductsComonent from "../../components/category/categoryProductsComponent";
import CATEGORYGETSUBCATEGOREISWITHNAME_QUERY from "../../apollo/queries/Category/CategoryGetSubcategoriesWithName";
import Highlight3Articles from "../category/highlight3Articles";
import HorizontalMenuItem from "../category/common/horizontalMenuItem";

//TODO: Hente inn Logo-bildet og merkenavn fra strapi

const SpecificBrandPage = (props) => {
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState("Les om merket");

  const onEntering = () => setStatus("Laster...");

  const onEntered = () => setStatus("Lukk");

  const onExiting = () => setStatus("Lukker...");

  const onExited = () => setStatus("Les om merket");

  const toggle = () => setCollapse(!collapse);

  let brandContext = {
    id: props.brandDetailSide.id,
    brandName: props.brandDetailSide.name,
    brandDescription: props.brandDetailSide.description,
    brandLogo: props.brandDetailSide.logo.url,
    brandproducts: props.brandDetailSide.products[0].name,
  };

  return (
    <div>
      <Row>
        <Col>
          <h1 className="bg-warning text-center">{brandContext.brandName}</h1>
        </Col>
      </Row>
      <Row className="bg-info p-3">
        <Col className="text-center bg-success">
          <img
            className="mw-25 h-75 bg-danger"
            src={
              "https://trnbackend.herokuapp.com" +
              props.brandDetailSide.logo.url
            }
          />
        </Col>
      </Row>
      <Row className="text-center bg-primary">
        <Col>
          <div className="text-center p-0 m-0">
            <h5>Les mer om {brandContext.brandName} her</h5>
            <Collapse
              isOpen={collapse}
              onEntering={onEntering}
              onEntered={onEntered}
              onExiting={onExiting}
              onExited={onExited}
            >
              <Card className="p-0 m-0 w-75 bg-warning text-left">
                <p>{brandContext.brandDescription}</p>
              </Card>
            </Collapse>
            <Button onClick={toggle} className="bg-none">
              {status}
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <div>{brandContext.products}</div>
      </Row>
    </div>
  );
};

export default SpecificBrandPage;

/**
 * 
 * <QuerySubCategory
        query={CATEGORYGETSUBCATEGOREISWITHNAME_QUERY}
        categoryName={router.query.id}
      >
        {({ data: { categories } }) => {
          return (
            <div>
            
              <SubCategoryList
                subCategoryList={categories[0].sub_categories}
                categoryName={router.query.id}
              ></SubCategoryList>

              <Highlight3Articles />

              <CategoryProductsComonent
                categoriesListInput={categories}
                pageTitle={router.query.id}
              ></CategoryProductsComonent>
            </div>
          );
        }}
      </QuerySubCategory>
 */
