import React, { useState, useEffect } from "react";
import Productgrid from "./productgrid";
import CheckBox from "./common/checkbox"
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import QueryCategoryFilter from "../../components/queryCategoryFilter"
import CATEGORIESFILTER_QUERY from "../../apollo/queries/Category/CategoriesFilter"
const CategoryProductsComonent = ({ categoriesListInput, pageTitle }) => {

    const [categoriesList, setcategoriesList] = useState(categoriesListInput)

    // subcategories array
    const [subcategoriesArray, setSubcategoriesArray] = useState([]);
    const [defaultSubcategoriesArray, setDefaultSubcategoriesArray] = useState([])

    // type

    const [typesArray, setTypesArray] = useState([]);
    const [defaultTypesArray, setDefaultTypesArray] = useState([]);

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



    const InsertIntoSubcategoryCheckBoxesArray = (newArray) => setsubcategoryCheckboxes(newArray)


    const createTypesOnCheckboxesList = (typesList) => {
        var typearray = []
        for (var i = 0; i < typesList.length; i++) {
            if (typesList[i].StrapiName != "None") {
                var type = {
                    id: i,
                    value: typesList[i].StrapiName,
                    displayValue: typesList[i].TypeOfProductName,
                    isChecked: false,
                }
                typearray.push(type)
            }

        }
        return typearray
    }

    const createSubCategoryCheckboxes = () => {
        var checkboxReadyArray = []
        for (var i = 0; i < categoriesList[0].sub_categories.length; i++) {
            var type = {
                id: i,
                value: categoriesList[0].sub_categories[i].StrapiName,
                displayValue: categoriesList[0].sub_categories[i].categoryName,
                isChecked: false,
                typesList: categoriesList[0].sub_categories[i].type_of_products


            }

            type.typesList = createTypesOnCheckboxesList(type.typesList)


            checkboxReadyArray.push(type)

        }


        InsertIntoSubcategoryCheckBoxesArray(checkboxReadyArray)
    }


    const getSubcategoryArrayAndTypes = () => {

        let categoryArrayMakeObselete = categoriesList[0].sub_categories.map(a => a.StrapiName)
        var typesArrayMakeObselete = []
        var typesArrayWithCategories = []
        for (var i = 0; i < categoriesList[0].sub_categories.length; i++) {
            typesArrayMakeObselete = typesArrayMakeObselete.concat(categoriesList[0].sub_categories[i].type_of_products.map(type => type.StrapiName))
            typesArrayWithCategories.push(categoriesList[0].sub_categories[i].type_of_products)
        }



        setSubcategoriesArray(categoryArrayMakeObselete)
        setTypesArray(typesArrayMakeObselete)
        setDefaultSubcategoriesArray(categoryArrayMakeObselete)
        setDefaultTypesArray(typesArrayMakeObselete)


    }



    useEffect(() => {

        getSubcategoryArrayAndTypes(categoriesList)
        createSubCategoryCheckboxes()


        //createTypesCheckboxes()
        //getTypeOfProductsList()



    }, [categoriesList])



    // async
    const filterProductsToShow = (listToCheck, isSubcategory) => {

        var isAnyChecked = false;
        var arrayNames = []
        for (var checkboxCount = 0; checkboxCount < listToCheck.length; checkboxCount++) {


            if (listToCheck[checkboxCount].isChecked == true) {
                isAnyChecked = true

                arrayNames.push(listToCheck[checkboxCount].value)

            }
        }
        if (isSubcategory == true) {
            if (isAnyChecked == false) {
                // return with showing every product in category
                setSubcategoriesArray(defaultSubcategoriesArray)
                return
            } else {
                setSubcategoriesArray(arrayNames)

            }
        } else {
            if (isAnyChecked == false) {
                // return with showing every product in category
                setTypesArray(defaultTypesArray)
                return
            } else {
                setTypesArray(arrayNames)

            }
        }



    }

    const filterProductsToShowArray = (listsToCheck, isSubcategory) => {

        var isAnyChecked = false;
        var arrayNames = []
        for (var checkboxCount = 0; checkboxCount < listsToCheck.length; checkboxCount++) {

            for (var typesCount = 0; typesCount < listsToCheck[checkboxCount].typesList.length; typesCount++) {

                if (listsToCheck[checkboxCount].typesList[typesCount].isChecked == true) {
                    isAnyChecked = true

                    arrayNames.push(listsToCheck[checkboxCount].typesList[typesCount].value)

                }
            }

        }
        if (isSubcategory == true) {
            if (isAnyChecked == false) {
                // return with showing every product in category
                setSubcategoriesArray(defaultSubcategoriesArray)
                return
            } else {
                setSubcategoriesArray(arrayNames)

            }
        } else {
            if (isAnyChecked == false) {
                // return with showing every product in category
                setTypesArray(defaultTypesArray)
                return
            } else {

                setTypesArray(arrayNames)

            }
        }



    }





    const openNav = () => {
        document.getElementById("filterMenu").style.width = "250px";
    }
    const closeNav = () => {
        document.getElementById("filterMenu").style.width = "0";

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

    const handleCheckChieldElementSubCategories = (event) => {
        // kanskje putte logikk inn her for filtrering
        let checkboxesArray = subcategoryCheckboxes
        checkboxesArray.forEach(checkBox => {
            if (checkBox.value === event.target.value)
                checkBox.isChecked = event.target.checked

        })







        InsertIntoSubcategoryCheckBoxesArray(checkboxesArray)


        filterProductsToShow(checkboxesArray, true)
    }
    // unødvendig med tre gjør akk det samme
    const handleCheckChieldElementTypes = (event) => {
        // kanskje putte logikk inn her for filtrering
        //var newArray = []
        for (var i = 0; i < subcategoryCheckboxes.length; i++) {
            let checkboxesArray = subcategoryCheckboxes[i].typesList


            checkboxesArray.forEach(checkBox => {
                if (checkBox.value === event.target.value)
                    checkBox.isChecked = event.target.checked

            })


        }

        filterProductsToShowArray(subcategoryCheckboxes, false)


        InsertIntoSubcategoryCheckBoxesArray(subcategoryCheckboxes)



    }


    // legge til  typisk norsk, vegansk..
    return (

        <React.Fragment>
            <div id="filterMenu" className="sidenav">
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



                                            <div key={object.id}>
                                                <CheckBox handleCheckChieldElement={handleCheckChieldElementSubCategories} key={object.id}{...object}>


                                                </CheckBox>
                                                {/* Inside hierachy*/}

                                                <Collapse isOpen={object.isChecked}>
                                                    <div id="filters" className="d-md-block">

                                                        {object.typesList.map((type) => {

                                                            return (



                                                                <CheckBox handleCheckChieldElement={handleCheckChieldElementTypes} key={type.id}{...type} />

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
                {categoriesListInput[0].description}

            </p>

            <div className="row">

                <div className="col-md-9 order-md-last">
                    <QueryCategoryFilter query={CATEGORIESFILTER_QUERY} categoryName={pageTitle} arrayOfSubcat={subcategoriesArray} arrayOfTypes={typesArray}>
                        {({ data: { categories } }) => {
                            const productsArray = getProducts(categories)
                            return (
                                <Productgrid productgrid={productsArray} />
                            )


                        }}
                    </QueryCategoryFilter>

                </div>

            </div>

        </React.Fragment>
    )

}

export default CategoryProductsComonent

export const getProducts = (categories) => {
    var tempproductsArray = []

    for (var subcatcount = 0; subcatcount < categories[0].sub_categories.length; subcatcount++) {
        tempproductsArray = tempproductsArray.concat(categories[0].sub_categories[subcatcount].products)
    }
    return tempproductsArray
}

// product array
