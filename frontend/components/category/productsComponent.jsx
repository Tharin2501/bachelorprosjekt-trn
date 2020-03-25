import React, { useState, useEffect } from "react";
import Query from "../../components/query"
import PRODUCTS_QUERY from "../../apollo/queries/product/products"
import Productgrid from "../../components/category/productgrid";
import "bootstrap/dist/css/bootstrap.min.css";
import CheckBox from "./common/checkbox"
import { Collapse, Button, CardBody, Card } from 'reactstrap';
const ProductsComonent = ({ categoriesList, isSubCategoryGrid }) => {
    const [productsArray, setProductsArray] = useState([]);


    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    // general
    const [generalListIsOpen, setGeneralListIsIsOpen] = useState(true);
    const toggleGeneralList = () => setGeneralListIsIsOpen(!generalListIsOpen);

    // Types
    const [typesListIsOpen, setTypesListIsIsOpen] = useState(true);
    const toggleTypesList = () => setTypesListIsIsOpen(!typesListIsOpen);

    // Attributes
    const [attributesalListIsOpen, setAttributesListIsIsOpen] = useState(true);
    const toggleAttributesList = () => setAttributesListIsIsOpen(!attributesalListIsOpen);


    // general
    const [generalCheckboxes, setGenerealCheckboxes] = useState(
        [{ id: 1, value: "Pris", isChecked: false },
        { id: 2, value: "Merke", isChecked: false },
        ]

    )
    // Types
    const [typesCheckboxes, setTypesCheckboxes] = useState(
        [{ id: 1, value: "Rødvin", isChecked: false },
        { id: 2, value: "Hvitvin", isChecked: false },
        { id: 3, value: "Rosevin", isChecked: false },
        { id: 4, value: "Dessertvin", isChecked: false },
        { id: 5, value: "Mussenede", isChecked: false },
        ]

    )


    const getProductsArray = (categories) => {
        if (isSubCategoryGrid) {
            console.log("Yas")
            setProductsArray(categories)
        } else {
            //console.log(categories[0].sub_categories.length)
            //console.log(categories[0].sub_categories[1])
            var tempproductsArray = []
            var subcatcount;

            for (subcatcount = 0; subcatcount < categories[0].sub_categories.length; subcatcount++) {
                tempproductsArray = tempproductsArray.concat(categories[0].sub_categories[subcatcount].products)
            }
            console.log(tempproductsArray)
            setProductsArray(tempproductsArray)
        }


    }

    useEffect(() => {
        getProductsArray(categoriesList)
    }, [categoriesList])

    //getProductsArray(categoriesList)

    return (

        <Query query={PRODUCTS_QUERY} id={null}>
            {({ data: { products } }) => {

                const handleCheckChieldElement = (event) => {
                    console.log(event)
                    let fruites = generalCheckboxes
                    fruites.forEach(fruite => {
                        if (fruite.value === event.target.value)
                            fruite.isChecked = event.target.checked
                    })
                    setGenerealCheckboxes(fruites)
                    //console.log(generalCheckboxes)
                }

                const handleCheckChieldElementTypes = (event) => {
                    console.log(event)
                    let fruites = typesCheckboxes
                    fruites.forEach(fruite => {
                        if (fruite.value === event.target.value)
                            fruite.isChecked = event.target.checked
                    })
                    setTypesListIsIsOpen(fruites)

                }

                return (
                    <div>
                        <h1>Makeup</h1>
                        <p>

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

                        <div className="row">
                            <div className="col-md-3 order-md-first">
                                <Button type="button" onClick={toggle} className="d-block d-md-none btn btn-primary btn-block mb-3"> Filters &dtrif;</Button>

                                <Collapse isOpen={isOpen}>
                                    {/* General */}
                                    <div className="col-md-1">
                                        <Button type="button" onClick={toggleGeneralList}>General</Button>
                                        <Collapse isOpen={generalListIsOpen}>
                                            <div id="filters" className="d-md-block">
                                                {generalCheckboxes.map((object) => {
                                                    return (



                                                        <CheckBox handleCheckChieldElement={handleCheckChieldElement} key={object.id}{...object} />

                                                    )
                                                })}

                                            </div>

                                        </Collapse>
                                    </div>
                                    {/* General END */}

                                    {/* Types Start */}
                                    <div className="col-md-1">
                                        <Button type="button" onClick={toggleTypesList}>Types</Button>
                                        <Collapse isOpen={typesListIsOpen}>
                                            <div id="filters" className="d-md-block">
                                                {typesCheckboxes.map((object) => {
                                                    return (



                                                        <CheckBox handleCheckChieldElement={handleCheckChieldElementTypes} key={object.id}{...object} />

                                                    )
                                                })}

                                            </div>
                                        </Collapse>
                                    </div>
                                    {/* Types END */}

                                    {/* Attributes Start */}
                                    <div className="col-md-1">
                                        <Button type="button" onClick={toggleAttributesList}>Attributes</Button>
                                        <Collapse isOpen={attributesalListIsOpen}>
                                            <div id="filters" className="d-md-block">
                                                {generalCheckboxes.map((object) => {
                                                    return (



                                                        <CheckBox handleCheckChieldElement={handleCheckChieldElement} key={object.id}{...object} />

                                                    )
                                                })}

                                            </div>
                                        </Collapse>
                                    </div>
                                    {/* Attributes END */}




                                </Collapse>

                            </div>
                            <div className="col-md-9 order-md-last">
                                <Productgrid productgrid={productsArray} />;
                        </div>

                        </div>

                    </div>

                );
            }}
        </Query>

    )

}

export default ProductsComonent

// product array
