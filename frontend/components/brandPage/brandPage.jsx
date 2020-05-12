import React, { useState, useEffect } from "react";
import { Nav, NavItem, NavLink, Container, Row, Col, Input, Button } from "reactstrap";
import QuerybrandsOnString from "../querybrandsOnString";
import GETBRANDSBASEDONSTRING_QUERY from "../../apollo/queries/brand/getBrandsbasedOnString";
import Link from "next/link";

// debounce
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

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
  }),
    [debounceSearchTerm];

  const handleSerachFieldChanged = (e) => {
    setInputTextTerm(e.target.value);
  };
  return (
    <div>
      <Input
        type="textarea"
        name="serach"
        id="searchbar"
        placeholder="Søk etter merke her"
        onChange={handleSerachFieldChanged}
      />
      <hr />
      <QuerybrandsOnString
        query={GETBRANDSBASEDONSTRING_QUERY}
        searchString={searchTerm}
      >
        {({ data: { brands } }) => {
          return brands.map((brand) => {
            return (
              <Container>
                <Row>
                  <Nav sm="6">
                    <Col className="pm-3">
                      <Link
                        href={{
                          pathname: "merkesidedetalj",
                          query: { id: brand.id },
                        }}
                      >
                        <Button className="text-dark bg-white p-2 border-0">
                          {brand.name}
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
    </div>
  );
};

export default BrandPage;

