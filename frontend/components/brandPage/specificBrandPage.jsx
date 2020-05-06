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


import QuerySubCategory from "../querySubCategory";

import SubCategoryList from "../../components/category/subCategoryList";
import CategoryProductsComonent from "../../components/category/categoryProductsComponent";
import CATEGORYGETSUBCATEGOREISWITHNAME_QUERY from "../../apollo/queries/Category/CategoryGetSubcategoriesWithName";
import Highlight3Articles from "../category/highlight3Articles";
import HorizontalMenuItem from "../category/common/horizontalMenuItem";

//TODO: Hente inn Logo-bildet og merkenavn fra strapi

const SpecificBrandPage = (props) => {
  {
    /**Collapsing info text */
  }
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState("Les om merket");
  const onEntering = () => setStatus("Laster...");
  const onEntered = () => setStatus("Lukk");
  const onExiting = () => setStatus("Lukker...");
  const onExited = () => setStatus("Les om merket");
  const toggle = () => setCollapse(!collapse);



  console.log(props.brandDetailSide)

  return (
    <div>
      <Row>
        <Col>
          <h1 className="text-center">{props.brandDetailSide.name}</h1>
        </Col>
      </Row>
      <Row className="p-3">
        <Col className="text-center">
          <img
            className="mw-25 h-75"
            src={
              "https://trnbackend.herokuapp.com" +
              props.brandDetailSide.logo.url
            }
          />
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <div className="text-center p-0 m-0">
            <h5>Les mer om {props.brandDetailSide.name} her</h5>
            <Collapse
              isOpen={collapse}
              onEntering={onEntering}
              onEntered={onEntered}
              onExiting={onExiting}
              onExited={onExited}
            >
              <Card className="p-3 m-0 w-75 border-0 text-left">
                <p>{props.brandDetailSide.description}</p>
              </Card>
            </Collapse>
            <Button onClick={toggle} className="bg-dark text-light border-0">
              {status}
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <h2>Faewn</h2>
      </Row>
    </div>
  );
};

export default SpecificBrandPage;