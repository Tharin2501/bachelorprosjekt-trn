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

//TODO: Fikse statisk info-tekst og gjøre den dynamisk for å vise info om hvert enkelt produkt

const ProduktTab = props => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="h-100">
      <Nav tabs className="w-auto m-3 mx-auto">
        <NavItem className="mx-auto">
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
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
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
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
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
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
              {props.product.description}
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row className="p-3">
            <Col>
              {props.product.ingredients}
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
/*
                    {reviews.map((object) => {
                      return (



                          <CheckBox handleCheckChieldElement={handleCheckChieldElement} key={object.id}{...object} />

                      )
                      };
                    }
                    */