import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col, ListGroup, Container
} from "reactstrap";
import classnames from "classnames";
import { FaInfo, FaVial, FaStar } from "react-icons/fa";
import Query from "./query";
import REVIEWS_QUERY from "../apollo/queries/product/reviews"
import ReviewListItem from "./productPage/reviewListItem"
import { checkIfSpaceOrEnterPressed } from "../components/utils/accessibilityUtil"

//TODO: Fikse statisk info-tekst og gjøre den dynamisk for å vise info om hvert enkelt produkt

const ProduktTab = props => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  // clinque liqguid face soap ingrdients
  return (
    <div className="h-100">
      <Nav tabs className="w-auto m-3 mx-auto">
        <NavItem className="mx-auto">
          <NavLink tabIndex="0"
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }} onKeyDown={() => { checkIfSpaceOrEnterPressed(event) ? toggle("1") : null }}
          >
            <Row>
              <Col>
                <FaInfo />
              </Col>
              <Col>Informasjon</Col>
            </Row>
          </NavLink>
        </NavItem>
        <NavItem className="mx-auto">
          <NavLink tabIndex="0"
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }} onKeyDown={() => { checkIfSpaceOrEnterPressed(event) ? toggle("2") : null }}
          >
            <Row>
              <Col>
                <FaVial />
              </Col>
              <Col>Ingredienser</Col>
            </Row>
          </NavLink>
        </NavItem>
        <NavItem className="mx-auto">
          <NavLink tabIndex="0"
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");

            }}
            onKeyDown={() => { checkIfSpaceOrEnterPressed(event) ? toggle("3") : null }}
          >
            <Row>
              <Col>
                <FaStar />
              </Col>
              <Col>Omtale</Col>
            </Row>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} className="container w-100">
        <TabPane tabId="1">
          <Row className="p-3">
            <Col>
              <div>
                {props.product.description}
                <div className="p-1 mx-auto">
                  <p > På dette produktet tjener man {props.collectmePoints} collect me points.</p>
                </div>
              </div>

            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row className="p-3">
            <Col>
              Water\Aqua\Eau, Caprylic/Capric Triglyceride, Glycerin, Olea Europaea (Olive) Fruit Oil, Butylene Glycol, Phenyl Trimethicone, Cucumis Sativus (Cucumber) Fruit Extract, Hordeum Vulgare (Barley) Extract\Extrait D'Orge, Helianthus Annuus (Sunflower) Seedcake, Dimethicone, Sodium Hyaluronate, Tocopheryl Acetate, Dipotassium Glycyrrhizate, Cholesterol, Sucrose Stearate, Sucrose, Caffeine, Ppg-20 Methyl Glucose Ether, Urea, Sodium Pca, Linoleic Acid, Propylene Glycol Dicaprate, Pentylene Glycol, Polyquaternium-51, Trehalose, Caprylyl Glycol, Ammonium Acryloyldimethyltaurate/Vp Copolymer, Phenoxyethanol
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row className="p-3">
            <Col>
              <Query query={REVIEWS_QUERY}>
                {({ data: { reviews } }) => {

                  return reviews.map((review) => {
                    return (
                      <ReviewListItem reviewdata={review}> </ReviewListItem>
                    )
                  })



                }}
              </Query>
              <Container>
                <ListGroup>

                </ListGroup>

              </Container>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ProduktTab;
