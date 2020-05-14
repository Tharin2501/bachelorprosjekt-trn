import React, { useState, useEffect } from "react";
import { Nav, NavItem, NavLink, Container, Row, Col, Input, Button } from "reactstrap";
import QuerybrandsOnString from "../querybrandsOnString";
import BRANDS_QUERY from "../../apollo/queries/brand/brands";
import GETBRANDSBASEDONSTRING_QUERY from "../../apollo/queries/brand/getBrandsbasedOnString";
import Link from "next/link";


// debounce
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {

      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);


      return () => {
        clearTimeout(handler);
      };
    },
    [value]
  );

  return debouncedValue;
}





const BrandPage = (props) => {
  // faktisk brukt i spørring
  const [searchTerm, setSearchTerm] = useState("");
  // used in input field to user
  const [inputTextTerm, setInputTextTerm] = useState("");
  // State for search status (whether there is a pending API request)


  const debounceSearchTerm = useDebounce(inputTextTerm, 200);

  useEffect(() => {
    if (debounceSearchTerm) {
      setSearchTerm(inputTextTerm);
    }
  }), [debounceSearchTerm];

  const handleSerachFieldChanged = (e) => {
    setInputTextTerm(e.target.value);
  }

  const divStyle = {
    padding: '1.5em',

  };
  return (

    <div>
      <Input type="textarea" name="serach" id="searchbar" placeholder="Søk etter merke her" onChange={handleSerachFieldChanged} />
      <hr />
      <QuerybrandsOnString query={GETBRANDSBASEDONSTRING_QUERY} searchString={searchTerm}>
        {({ data: { brands } }) => {
          return brands.map((brand) => {
            return (
              <Container className="text-center">
                <Row>
                  <Nav vertical sm="6">
                    <Col className="pm-3">
                      <Link
                        href={{
                          pathname: "merkesidedetalj",
                          query: { id: brand.id },
                        }}
                      >
                        <Button style={divStyle} className="text-dark bg-white p-2 border-0" >
                          <a className="nav-link frontpageIconsText">{brand.name}</a>


                        </Button>
                      </Link>
                    </Col>
                  </Nav>
                </Row>
              </Container>
            );
          });
        }}
      </QuerybrandsOnString>
    </div >
  );
};

export default BrandPage;

/**
 *
 *
 *       <Container className="bg-danger">
        <Col className="bg-primary">
          <h1 className="text-lg-left text-center">A</h1>
          <Row className="bg-success p-3">

            <Nav vertical sm="6">
              <Col className="bg-danger pm-3">
                <NavItem>
                  <NavLink>Abercrombie & Fitch</NavLink>
                </NavItem>
              </Col>
              <Col className="bg-success">
                <NavItem>
                  <NavLink>APM Monaco</NavLink>
                </NavItem>
              </Col>
              <Col className="bg-info">
                <NavItem>
                  <NavLink>Anton Berg</NavLink>
                </NavItem>
              </Col>
              <Col className="bg-warning">
                <NavItem>
                  <NavLink>Antonio Banderas</NavLink>
                </NavItem>
              </Col>
            </Nav>

            <Nav vertical sm="6">
              <Col className="bg-danger">
                <NavItem>
                  <NavLink>Abercrombie & Fitch</NavLink>
                </NavItem>
              </Col>
              <Col className="bg-success">
                <NavItem>
                  <NavLink>APM Monaco</NavLink>
                </NavItem>
              </Col>
              <Col className="bg-info">
                <NavItem>
                  <NavLink>Anton Berg</NavLink>
                </NavItem>
              </Col>
              <Col className="bg-warning">
                <NavItem>
                  <NavLink>Antonio Banderas</NavLink>
                </NavItem>
              </Col>
            </Nav>

            <Nav vertical sm="6">
              <Col className="bg-danger">
                <NavItem>
                  <NavLink>Abercrombie & Fitch</NavLink>
                </NavItem>
              </Col>
              <Col className="bg-success">
                <NavItem>
                  <NavLink>APM Monaco</NavLink>
                </NavItem>
              </Col>
              <Col className="bg-info">
                <NavItem>
                  <NavLink>Anton Berg</NavLink>
                </NavItem>
              </Col>
              <Col className="bg-warning">
                <NavItem>
                  <NavLink>Antonio Banderas</NavLink>
                </NavItem>
              </Col>
            </Nav>
          </Row>
        </Col>
      </Container>
 *
 *
 *
 *
 *
 *
<NavItem>
                  <NavLink>Ardbeg</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Auchentoshan</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Akevitt</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Aurora</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>A. de Fussigny </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Akevitt Blank</NavLink>
                </NavItem>
              </Col>
              <Col>
                <NavItem>
                  <NavLink>Aegir</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Avivir</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>AC/DC </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>American Crew</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Ayala</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Aberlour</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Aberfeldy</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Artdeco</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Amrut</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Ardmore</NavLink>
                </NavItem>
              </Col>
              <Col>
                <NavItem>
                  <NavLink>Absente</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Akashi</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Axoco</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Appleton Rum</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Aramis</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Austmann</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Azzaro</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>After Eight</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Alize</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Affligem</NavLink>
                </NavItem>
              </Col>
              <Col>
                <NavItem>
                  <NavLink>Aass</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Anthon Berg</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Alexander</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Ahlgrens</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Aperol</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Asbach</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Amundsen</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Amarula</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Arvesølvet</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Absolut</NavLink>
                </NavItem>
              </Col>
              <Col>
                <NavItem>
                  <NavLink>Aalborg</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Al Capone</NavLink>
                </NavItem>
              </Col>
 */
