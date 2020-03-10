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
import { FaInfo, FaVial, FaStar } from "react-icons/fa";

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
              Lorizzle ipsizzle hizzle sit amizzle, consectetuer own yo' the
              bizzle. Phat sapien velizzle, shizzlin dizzle volutpat,
              suscipizzle stuff, gravida izzle, funky fresh. Pellentesque yo
              tortor. Sheezy erizzle. Sizzle go to hizzle fizzle mah nizzle
              break yo neck, yall for sure pizzle.
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row className="p-3">
            <Col>
              Do what you can, with what you have, where you are. First we form
              habits, then they form us. Conquer your bad habits, or they will
              eventually conquer you. Imagine you only have one year to live.
              What important things would you be doing? How would you be
              allotting your time to accomplish the most you could? This
              exercise is one method of going after your priorities.
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row className="p-3">
            <Col>
              Bulbasaur Ivysaur Venusaur Charmander Charmeleon Charizard
              Squirtle Wartortle Blastoise Caterpie Metapod Butterfree Weedle
              Kakuna Beedrill Pidgey Pidgeotto Pidgeot Rattata Raticate Spearow
              Fearow Ekans Arbok Pikachu Raichu Sandshrew Sandslash Nidoran
              Nidorina Nidoqueen Nidoran Nidorino Nidoking Clefairy Clefable
              Vulpix Ninetales.
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ProduktTab;
