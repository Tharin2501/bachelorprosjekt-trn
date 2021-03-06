import React, { useState, useEffect } from "react";
import Productgrid from ".././productgrid";
import CheckBox from ".././common/checkbox"
import { Button } from 'reactstrap';
import QuerySubCategoryFilter from "../../../components/querySubCategoryFilter"
import SUBCATEGORYFILTER_QUERY from "../../../apollo/queries/subCategories/subCategoryFilter"

const SubCategoryProductsComponent = ({ typesDefault, pageTitle, description, categoryName }) => {

    const [typesArray, setTypesArray] = useState([]);
    const [defaultTypesArray, setDefaultTypesArray] = useState([]);
    // types
    const [typesCheckboxes, settypesCheckboxes] = useState([]


    )

    const createTypesCheckboxes = () => {
        var checkboxReadyArray = []
        for (var i = 0; i < typesDefault.length; i++) {
            if (typesDefault[i].StrapiName != "None") {
                var type = {
                    id: i,
                    value: typesDefault[i].StrapiName,
                    displayValue: typesDefault[i].TypeOfProductName,
                    isChecked: false,

                }



                checkboxReadyArray.push(type)
            }


        }
        settypesCheckboxes(checkboxReadyArray)


    }

    const createTypeArray = () => {
        let result = typesDefault.map(t => t.StrapiName)
        setTypesArray(result)
        setDefaultTypesArray(result)
    }

    useEffect(() => {


        createTypeArray();
        createTypesCheckboxes()






    }, [])

    const handleCheckChieldElementSubCategories = (event) => {
        // kanskje putte logikk inn her for filtrering
        let checkboxesArray = typesCheckboxes
        checkboxesArray.forEach(checkBox => {
            if (checkBox.value === event.target.value)
                checkBox.isChecked = event.target.checked

        })
        settypesCheckboxes(checkboxesArray)


        filterProductsToShow(checkboxesArray)
    }

    const filterProductsToShow = (listToCheck) => {
        var isAnyChecked = false;
        var arrayNames = []
        for (var checkboxCount = 0; checkboxCount < listToCheck.length; checkboxCount++) {
            if (listToCheck[checkboxCount].isChecked == true) {
                isAnyChecked = true
                arrayNames.push(listToCheck[checkboxCount].value)
            }
        }

        if (isAnyChecked == false) {
            // return with showing every product in category
            setTypesArray(defaultTypesArray)
            return
        } else {
            setTypesArray(arrayNames)

        }

    }



    return (
        <React.Fragment>

            <div className="container">
                <h3 className="text-center">{categoryName}</h3>
                <div class="container">
                    <p className="text-center">

                        {description}
                    </p>
                </div>

                <h3 className="horizontal-line1">
                    <span className="horizontal-line2">Produkter</span>
                </h3>
                <div className="">
                    <QuerySubCategoryFilter query={SUBCATEGORYFILTER_QUERY} SubcategoryName={pageTitle} arrayOfTypes={typesArray}>
                        {({ data: { subCategories } }) => {
                            return (
                                <Productgrid productgrid={subCategories[0].products} />
                            )


                        }}
                    </QuerySubCategoryFilter>
                </div>
            </div>
        </React.Fragment>
    )




}


export default SubCategoryProductsComponent

