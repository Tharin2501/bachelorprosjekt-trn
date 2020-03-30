import React, { useState, useEffect } from "react";
import Productgrid from "./productgrid";
import "bootstrap/dist/css/bootstrap.min.css";
import CheckBox from "./common/checkbox"
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import QueryCategoryFilter from "../../components/queryCategoryFilter"
import CATEGORIESFILTER_QUERY from "../../apollo/queries/Category/CategoriesFilter"
const CategoryProductsComonent = ({ categoriesListInput, isSubCategoryGrid, pageTitle }) => {

    const [categoriesList, setcategoriesList] = useState(categoriesListInput)
    // products
    const [productsArray, setProductsArray] = useState([]);
    //const [defaultProductsArray, setDefaultProductsArray] = useState([]);


    // subcategories array
    const [subcategoriesArray, setSubcategoriesArray] = useState([]);
    const [defaultSubcategoriesArray, setDefaultSubcategoriesArray] = useState([])
    const [isSubcatroiesDefaultInitialized, setIsSubcatroiesDefaultInitialized] = useState(false)

    // type

    const [typesInitArray, setTypesInitArray] = useState([]);

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

    // Types
    const [typesCheckboxes, setTypesCheckboxes] = useState([]

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

    /*
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
    */
    /*
 
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
     */


    const getSubcategoryArrayAndTypes = () => {



        /*
                console.log(categoriesList[0].sub_categories[0].products[0].type_of_products[0].StrapiName)
                for (var i = 0; i < categoriesList[0].sub_categories.length; i++) {
                    tempArray = tempArray.concat(categoriesList[0].sub_categories[i].StrapiName)
        
                }
                */
        //let testArray = categoriesList[0].sub_categories.forEach(subcategory => subcategory.products.forEach(product => product.type_of_products.forEach(type => console.log(type.StrapiName))))
        //.products[0].type_of_products[0].StrapiName
        let categoryArrayMakeObselete = categoriesList[0].sub_categories.map(a => a.StrapiName)
        var typesArrayMakeObselete = []
        var typesArrayWithCategories = []
        for (var i = 0; i < categoriesList[0].sub_categories.length; i++) {
            typesArrayMakeObselete = typesArrayMakeObselete.concat(categoriesList[0].sub_categories[i].type_of_products.map(type => type.StrapiName))
            typesArrayWithCategories.push(categoriesList[0].sub_categories[i].type_of_products)
        }
        // push
        console.log(typesArrayWithCategories)


        setSubcategoriesArray(categoryArrayMakeObselete)
        setTypesInitArray(typesArrayMakeObselete)

    }

    const getArrayOfTypes = () => {
        var tempArray = []

    }
    useEffect(() => {

        getSubcategoryArrayAndTypes(categoriesList)
        createSubCategoryCheckboxes()
        //createTypesCheckboxes()
        //getTypeOfProductsList()



    }, [categoriesList])



    // async
    const filterProductsToShow = (listToCheck) => {

        var isAnyChecked = false;
        var filteredArray = []
        var subcategoryNames = []
        for (var checkboxCount = 0; checkboxCount < listToCheck.length; checkboxCount++) {


            if (listToCheck[checkboxCount].isChecked == true) {
                isAnyChecked = true

                subcategoryNames.push(listToCheck[checkboxCount].value)




                /*
                for (var i = 0; i < defaultProductsArray.length; i++) {

                    for (var j = 0; j < defaultProductsArray[i].type_of_products.length; j++) {

                        if (defaultProductsArray[i].type_of_products[j].StrapiName === listToCheck[checkboxCount].value) {
                            filteredArray.push(defaultProductsArray[i]) // kan skape duplicates
                        }

                    }

                } */
            }
        }



        if (isAnyChecked == false) {
            // return with showing every product in category
            setSubcategoriesArray(defaultSubcategoriesArray)
            return
        } else {
            setSubcategoriesArray(subcategoryNames)

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
        // kanskje putte logikk inn her for filtrering
        let checkboxesArray = subcategoryCheckboxes
        checkboxesArray.forEach(checkBox => {
            if (checkBox.value === event.target.value)
                checkBox.isChecked = event.target.checked
        })

        //console.log(checkboxesArray)





        InsertIntoSubcategoryCheckBoxesArray(checkboxesArray)


        filterProductsToShow(checkboxesArray)
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

                                                        {typesCheckboxes.map((test) => {
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
                    <QueryCategoryFilter query={CATEGORIESFILTER_QUERY} categoryName={pageTitle} arrayOfSubcat={subcategoriesArray} arrayOfTypes={typesInitArray}>
                        {({ data: { categories } }) => {
                            const productsArray = getProducts(categories)
                            if (isSubcatroiesDefaultInitialized == false) {
                                setDefaultSubcategoriesArray(subcategoriesArray)
                                setIsSubcatroiesDefaultInitialized(true)
                            }
                            return (
                                <Productgrid productgrid={productsArray} />
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
    return tempproductsArray
}

// product array
