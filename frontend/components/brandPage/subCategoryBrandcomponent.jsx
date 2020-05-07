import React, { useState } from "react";
import { Nav, NavItem, NavLink, Container, Row, Col, Collapse, Card, Button } from "reactstrap";
import Link from "next/link";
import GETSUBCATEGORYPRODUCTSFROMBRANDNAME_QUERY from "../../apollo/queries/subCategories/getSubCategoryProductsFromBrandName";
import QuerySubCategoryBrandName from "../querySubCategoryBrandName";
import Productgrid from "../category/productgrid"
import HorizontalMenuItem from "../category/common/horizontalMenuItem";

export const getSubcategoriesList = (products) => {
    var subcategoriesArray = [];
    var addCategory = true;

    for (var product of products) {
        if (subcategoriesArray.length === 0) {
            subcategoriesArray.push(product.sub_categories[0]);
            continue;
        }
        addCategory = true;
        for (var subcategory of subcategoriesArray) {

            if (product.sub_categories[0].id == subcategory.id) {
                addCategory = false;
            }



        }
        if (addCategory == true) {
            subcategoriesArray.push(product.sub_categories[0]);
        }

    }
    return subcategoriesArray;
}


const SubCategoryBrandcomponent = (props) => {
    const [collapse, setCollapse] = useState(false);
    const [status, setStatus] = useState("Les om merket");
    const onEntering = () => setStatus("Laster...");
    const onEntered = () => setStatus("Lukk");
    const onExiting = () => setStatus("Lukker...");
    const onExited = () => setStatus("Les om merket");
    const toggle = () => setCollapse(!collapse);



    const subcategoryArray = getSubcategoriesList(props.brand.products);

    return (

        <QuerySubCategoryBrandName query={GETSUBCATEGORYPRODUCTSFROMBRANDNAME_QUERY} subCategoryName={props.subCategoryName} brandName={props.brandName}>

            {({ data: { subCategories } }) => {
                return (

                    <div>
                        <Row>
                            <Col>
                                <h1 className="text-center">{props.brand.name}</h1>
                            </Col>
                        </Row>
                        <Row className="p-3">
                            <Col className="text-center">
                                <img
                                    className="mw-25 h-75"
                                    src={
                                        "https://trnbackend.herokuapp.com" +
                                        props.brand.logo.url
                                    }
                                />
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col>
                                <div className="text-center p-0 m-0">
                                    <h5>Les mer om {props.brand.name} her</h5>
                                    <Collapse
                                        isOpen={collapse}
                                        onEntering={onEntering}
                                        onEntered={onEntered}
                                        onExiting={onExiting}
                                        onExited={onExited}
                                    >
                                        <Card className="p-3 m-0 w-75 border-0 text-left">
                                            <p>{props.brand.description}</p>
                                        </Card>
                                    </Collapse>
                                    <Button onClick={toggle} className="bg-dark text-light border-0">
                                        {status}
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div>
                                    <h3 className="horizontal-line1">
                                        <span className="horizontal-line2">Våre kategorier</span>
                                    </h3>


                                    <div className="container-fluid">
                                        <div className="row justify-content-center py-5">



                                            {
                                                <div className="scrollmenu">

                                                    {subcategoryArray.map((category) => {
                                                        return (
                                                            <HorizontalMenuItem key={category.id} pathnamekatOrSub={"/subCategoryBrand"} category={category} brandName={props.brand.name} brandID={props.brand.id} ></HorizontalMenuItem>
                                                        )
                                                    })}
                                                </div>

                                            }

                                        </div>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                        <Row>
                            <Col>




                                <Productgrid productgrid={subCategories[0].products} />




                            </Col>
                        </Row>
                    </div>
                )
            }}
        </QuerySubCategoryBrandName>
    );

};

export default SubCategoryBrandcomponent;
