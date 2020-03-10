import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

const ProduktTab = props => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="h-100">
      <Nav tabs className="bg-secondary w-auto m-3 mx-auto">
        <NavItem className="mx-auto">
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Informasjon
          </NavLink>
        </NavItem>
        <NavItem className="mx-auto">
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Ingredienser
          </NavLink>
        </NavItem>
        <NavItem className="mx-auto">
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            Omtale
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} className="container w-100">
        <TabPane tabId="1">
          <Row className="p-3 bg-success">
            <Col>
              Lorizzle ipsizzle hizzle sit amizzle, consectetuer own yo' the
              bizzle. Phat sapien velizzle, shizzlin dizzle volutpat,
              suscipizzle stuff, gravida izzle, funky fresh. Pellentesque yo
              tortor. Sheezy erizzle. Sizzle go to hizzle fizzle mah nizzle
              break yo neck, yall for sure pizzle.
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row className="p-3 bg-danger">
            <Col>
              Lorizzle ipsizzle hizzle sit amizzle, consectetuer own yo' the
              bizzle. Phat sapien velizzle, shizzlin dizzle volutpat,
              suscipizzle stuff, gravida izzle, funky fresh. Pellentesque yo
              tortor. Sheezy erizzle. Sizzle go to hizzle fizzle mah nizzle
              break yo neck, yall for sure pizzle.
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row className="p-3 bg-info">
            <Col>
              Lorizzle ipsizzle hizzle sit amizzle, consectetuer own yo' the
              bizzle. Phat sapien velizzle, shizzlin dizzle volutpat,
              suscipizzle stuff, gravida izzle, funky fresh. Pellentesque yo
              tortor. Sheezy erizzle. Sizzle go to hizzle fizzle mah nizzle
              break yo neck, yall for sure pizzle.
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ProduktTab;

/**
 *
 *
 */

/**
 *
 *
 */
