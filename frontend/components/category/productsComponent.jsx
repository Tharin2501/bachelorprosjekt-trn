import React, { useState, useEffect, useAsync } from "react";
import Query from "../../components/query"
import PRODUCTS_QUERY from "../../apollo/queries/product/products"
import Productgrid from "../../components/category/productgrid";
import "bootstrap/dist/css/bootstrap.min.css";
import CheckBox from "./common/checkbox"
import { Collapse, Button, CardBody, Card } from 'reactstrap';
const ProductsComonent = ({ categoriesList, isSubCategoryGrid, pageTitle }) => {
    const [productsArray, setProductsArray] = useState([]);
    const [defaultProductsArray, setDefaultProductsArray] = useState([]);

    //console.log(categoriesList)
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
        [{ id: 1, value: "vin_rodvin", displayValue: "Hva", isChecked: false },
        { id: 2, value: "vin_hvitvin", displayValue: "Skal", isChecked: false },
        { id: 3, value: "vin_hvitvin", displayValue: "være", isChecked: false },
        { id: 4, value: "vin_hvitvin", displayValue: "Hær?", isChecked: false },
        ]

    )
    // Types
    const [typesCheckboxes, setTypesCheckboxes] = useState([]


    )

    const InsertIntoTypesCheckBoxesArray = (newArray) => setTypesCheckboxes(newArray)



    const getTypeOfProductsList = () => {

        //var typeOfProductsSet = new Set()
        if (isSubCategoryGrid) {

            var typeOfProductsArray = []
            var i;
            for (i = 0; i < categoriesList.length; i++) {
                var j;
                for (j = 0; j < categoriesList[i].type_of_products.length; j++) {

                    if (!(typeOfProductsArray.some(e => e.StrapiName === categoriesList[i].type_of_products[j].StrapiName))) {
                        typeOfProductsArray.push(categoriesList[i].type_of_products[j])
                    }


                }
            }


            createTypesCheckboxes(typeOfProductsArray)
        } else {
            console.log("NADA")
        }

    }
    //  [{ id: 1, value: "vin_rodvin", displayValue: "Rødvin", isChecked: false },

    const createTypesCheckboxes = (typeOfProductsArray) => {
        var i
        var checkboxReadyArray = []
        for (i = 0; i < typeOfProductsArray.length; i++) {
            var type = {
                id: i,
                value: typeOfProductsArray[i].StrapiName,
                displayValue: typeOfProductsArray[i].TypeOfProductName,
                isChecked: false


            }
            checkboxReadyArray.push(type)

        }

        InsertIntoTypesCheckBoxesArray(checkboxReadyArray)
    }




    const getProductsArray = (categories) => {
        if (isSubCategoryGrid) {

            setProductsArray(categories)
            setDefaultProductsArray(categories)
        } else {

            var tempproductsArray = []
            var subcatcount;

            for (subcatcount = 0; subcatcount < categories[0].sub_categories.length; subcatcount++) {
                tempproductsArray = tempproductsArray.concat(categories[0].sub_categories[subcatcount].products)
            }

            setProductsArray(tempproductsArray)
            setDefaultProductsArray(tempproductsArray)
        }


    }



    useEffect(() => {
        console.log(categoriesList)
        getProductsArray(categoriesList)
        getTypeOfProductsList()



    }, [categoriesList])
    // async
    const filterProductsToShow = (listToCheck) => {

        var isAnyChecked = false;
        var filteredArray = []
        for (var checkboxCount = 0; checkboxCount < listToCheck.length; checkboxCount++) {


            if (listToCheck[checkboxCount].isChecked == true) {
                isAnyChecked = true

                for (var i = 0; i < defaultProductsArray.length; i++) {

                    for (var j = 0; j < defaultProductsArray[i].type_of_products.length; j++) {

                        if (defaultProductsArray[i].type_of_products[j].StrapiName === listToCheck[checkboxCount].value) {
                            filteredArray.push(defaultProductsArray[i]) // kan skape duplicates
                        }

                    }

                }
            }
        }

        if (isAnyChecked == false) {
            // return with showing every product in category
            setProductsArray(defaultProductsArray)
            return
        } else {
            setProductsArray(filteredArray)

        }
        //console.log(filteredArray)

    }

    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
    }
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
        console.log("inside close")
    }

    const handleCheckChieldElement = (event) => {

        let checkboxesArray = generalCheckboxes
        checkboxesArray.forEach(checkBox => {
            if (checkBox.value === event.target.value)
                checkBox.isChecked = event.target.checked

        })


        setGenerealCheckboxes(checkboxesArray)


        //filterProductsToShow(generalCheckboxes)

    }

    const handleCheckChieldElementTypes = (event) => {
        //console.log(event)
        let checkboxesArray = typesCheckboxes
        checkboxesArray.forEach(checkBox => {
            if (checkBox.value === event.target.value)
                checkBox.isChecked = event.target.checked
        })



        InsertIntoTypesCheckBoxesArray(checkboxesArray)
        console.log(typesCheckboxes)
        filterProductsToShow(typesCheckboxes)

    }


    return (

        <div>
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <div className="col-md-3 order-md-first">
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
            </div>



            <h1>{pageTitle}</h1>
            <Button onClick={openNav}>Filter</Button>
            <Button>Sort</Button>
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

                <div className="col-md-9 order-md-last">
                    <Productgrid productgrid={productsArray} />;
                        </div>

            </div>

        </div>









    )

}

export default ProductsComonent

// product array
