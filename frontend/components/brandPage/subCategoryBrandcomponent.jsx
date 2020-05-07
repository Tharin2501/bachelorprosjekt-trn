import React from "react";
import { Nav, NavItem, NavLink, Container, Row, Col } from "reactstrap";
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
    const subcategoryArray = getSubcategoriesList(props.brand.products);

    return (

        <QuerySubCategoryBrandName query={GETSUBCATEGORYPRODUCTSFROMBRANDNAME_QUERY} subCategoryName={props.subCategoryName} brandName={props.brandName}>

            {({ data: { subCategories } }) => {
                return (
                    <div>
                        <div className="scrollmenu">
                            <div className="navitem">
                                <Link href={{ pathname: "/merkesidedetalj", query: { id: props.brand.id } }}>
                                    <button type="button" className="btn btn-circle btn-sm">Se alt</button>
                                </Link>
                            </div>
                            {subcategoryArray.map((category) => {
                                return (
                                    <HorizontalMenuItem key={category.id} pathnamekatOrSub={"/subCategoryBrand"} category={category} brandName={props.brand.name} brandID={props.brand.id} ></HorizontalMenuItem>
                                )
                            })}
                        </div>
                        <Productgrid productgrid={subCategories[0].products} />
                    </div>
                )
            }}

        </QuerySubCategoryBrandName>
    );
};

export default SubCategoryBrandcomponent;
