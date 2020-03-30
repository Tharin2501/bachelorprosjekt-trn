import React, { useState, useEffect, useAsync } from "react";
import Query from "../query"
import PRODUCTS_QUERY from "../../apollo/queries/product/products"
import Productgrid from "./productgrid";
import "bootstrap/dist/css/bootstrap.min.css";
import CheckBox from "./common/checkbox"
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import QueryCategoryFilter from "../../components/queryCategoryFilter"
import CATEGORIESFILTER_QUERY from "../../apollo/queries/Category/CategoriesFilter"
import { useQuery } from "@apollo/react-hooks";
const CategoryProductsComonent = ({ categoriesListInput, isSubCategoryGrid, pageTitle }) => {

    const [categoriesList, setcategoriesList] = useState(categoriesListInput)
    // products
    const [productsArray, setProductsArray] = useState([]);
    const [defaultProductsArray, setDefaultProductsArray] = useState([]);

    // subcategories array
    const [subcategoriesArray, setSubcategoriesArray] = useState([]);

    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    // general
    const [generalListIsOpen, setGeneralListIsIsOpen] = useState(true);
    const toggleGeneralList = () => setGeneralListIsIsOpen(!generalListIsOpen);

    // SubCategories
    const [subcategoreisListIsOpen, setSubcategoreisListIsOpen] = useState(true);
    const toggleSubcategoryList = () => setSubcategoreisListIsOpen(!subcategoreisListIsOpen);

    // Types
    const [typesListIsOpen, setTypesListIsIsOpen] = useState(true);
    const toggleTypesList = () => setTypesListIsIsOpen(!typesListIsOpen);

    // Types2
    const [typesListIs2Open, setTypesList2IsOpen] = useState(true);
    const toggleTypesList2 = () => setTypesList2IsOpen(!typesListIs2Open);


    // Attributes
    const [attributesalListIsOpen, setAttributesListIsIsOpen] = useState(true);
    const toggleAttributesList = () => setAttributesListIsIsOpen(!attributesalListIsOpen);



    // general
    const [generalCheckboxes, setGenerealCheckboxes] = useState(


    )



    // price
    const [priceCheckboxes, setPriceCheckboxes] = useState(
        [{ id: 1, value: "vin_rodvin", displayValue: "Under 200kr", isChecked: false },
        { id: 2, value: "vin_hvitvin", displayValue: "200kr-500kr", isChecked: false },
        { id: 3, value: "vin_hvitvin", displayValue: "500kr-1000kr", isChecked: false },
        { id: 4, value: "vin_hvitvin", displayValue: "Over 1000kr", isChecked: false },
        ]

    )

    // Subcategories
    const [subcategoryCheckboxes, setsubcategoryCheckboxes] = useState([]


    )

    // Types
    const [typesCheckboxes, setTypesCheckboxes] = useState([]


    )



    // Types 2 checkboxes display afther types (Category --> subcategory --> types )
    const [typesCheckboxes2, settypesCheckboxes2] = useState(
        [{ id: 1, value: "vin_rodvin", displayValue: "vin_rodvin", isChecked: false },
        { id: 2, value: "vin_hvitvin", displayValue: "vin_hvitvin", isChecked: false },
        { id: 3, value: "vin_hvitvin", displayValue: "500kr-1000kr", isChecked: false },
        { id: 4, value: "vin_hvitvin", displayValue: "Over 1000kr", isChecked: false },
        ]

    )
    const InsertIntoSubcategoryCheckBoxesArray = (newArray) => setsubcategoryCheckboxes(newArray)
    const InsertIntoTypesCheckBoxesArray = (newArray) => setTypesCheckboxes(newArray)



    const createSubCategoryCheckboxes = () => {
        const subCategoryArray = categoriesList[0].sub_categories
        var checkboxReadyArray = []
        for (var i = 0; i < subCategoryArray.length; i++) {
            var type = {
                id: i,
                value: subCategoryArray[i].StrapiName,
                displayValue: subCategoryArray[i].categoryName,
                isChecked: false


            }
            checkboxReadyArray.push(type)

        }

        InsertIntoSubcategoryCheckBoxesArray(checkboxReadyArray)
    }


    const getTypeOfProductsList = () => {

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
        }


    }

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

            for (var subcatcount = 0; subcatcount < categories[0].sub_categories.length; subcatcount++) {
                tempproductsArray = tempproductsArray.concat(categories[0].sub_categories[subcatcount].products)
            }
            setProductsArray(tempproductsArray)
            setDefaultProductsArray(tempproductsArray)
        }


    }


    const getSubcategoryArray = () => {
        // 
        var tempArray = []

        for (var i = 0; i < categoriesList[0].sub_categories.length; i++) {
            tempArray = tempArray.concat(categoriesList[0].sub_categories[i].StrapiName)
        }

        setSubcategoriesArray(tempArray)


    }
    useEffect(() => {

        getSubcategoryArray(categoriesList)
        getProductsArray(categoriesList)
        //getTypesArray()
        createSubCategoryCheckboxes()
        filterProductsQuery()
        //createTypesCheckboxes()
        //getTypeOfProductsList()



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

    }

    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
    }
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";

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

        let checkboxesArray = subcategoryCheckboxes
        checkboxesArray.forEach(checkBox => {
            if (checkBox.value === event.target.value)
                checkBox.isChecked = event.target.checked
        })



        InsertIntoSubcategoryCheckBoxesArray(checkboxesArray)
        //filterProductsToShow(typesCheckboxes)
    }

    const filterProductsQuery = () => {
        var newProductArray = []
        const arraytoSubcatValues = []

        /*
        return (

        )
        */

    }
    // legge til  typisk norsk, vegansk..
    return (

        <div>
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <div className="col-md-3 order-md-first">
                    <Collapse isOpen={isOpen}>
                        {/* General pris */}
                        <div className="col-md-1">
                            <Button type="button" onClick={toggleGeneralList}>Pris</Button>
                            <Collapse isOpen={generalListIsOpen}>
                                <div id="filters" className="d-md-block">
                                    {priceCheckboxes.map((object) => {
                                        return (



                                            <CheckBox handleCheckChieldElement={handleCheckChieldElement} key={object.id}{...object} />

                                        )
                                    })}

                                </div>

                            </Collapse>
                        </div>
                        {/* General END */}

                        {/* Produktkat Start */}
                        <div className="col-md-1">
                            <Button type="button" onClick={toggleSubcategoryList}>ProduktKategorier</Button>
                            <Collapse isOpen={subcategoreisListIsOpen}>
                                <div id="filters" className="d-md-block">
                                    {subcategoryCheckboxes.map((object) => {

                                        return (



                                            <div>
                                                <CheckBox handleCheckChieldElement={handleCheckChieldElementTypes} key={object.id}{...object}>


                                                </CheckBox>
                                                {/* Inside hierachy*/}
                                                <Collapse isOpen={object.isChecked}>
                                                    <div id="filters" className="d-md-block">

                                                        {typesCheckboxes2.map((test) => {
                                                            return (



                                                                <CheckBox handleCheckChieldElement={handleCheckChieldElementTypes} key={test.id}{...test} />

                                                            )
                                                        })}

                                                    </div>
                                                </Collapse>
                                                {/* Inside hierachy end*/}
                                            </div>


                                        )
                                    })}

                                </div>
                            </Collapse>
                        </div>
                        {/* Produktkat END */}
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
                    <QueryCategoryFilter query={CATEGORIESFILTER_QUERY} categoryName={pageTitle} arrayOfSubcat={subcategoriesArray}>
                        {({ data: { categories } }) => {
                            //console.log(categories) 
                            //console.log(productsArray) // subcategoriesArray
                            // getProductsArray(categories)
                            const productsArray2 = getProducts(categories)
                            return (
                                <Productgrid productgrid={productsArray2} />
                            )


                        }}
                    </QueryCategoryFilter>

                </div>

            </div>

        </div>









    )

}

export default CategoryProductsComonent

export const getProducts = (categories) => {
    var tempproductsArray = []

    for (var subcatcount = 0; subcatcount < categories[0].sub_categories.length; subcatcount++) {
        tempproductsArray = tempproductsArray.concat(categories[0].sub_categories[subcatcount].products)
    }
    //console.log(tempproductsArray)
    return tempproductsArray
}

// product array
