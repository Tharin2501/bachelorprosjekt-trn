import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import ARTICLES_QUERY from "../apollo/queries/article/articles";
import PRODUCTS_QUERY from "../apollo/queries/product/products";
import Query from '../components/query';


import Productgrid from "../components/category/productgrid";
import { SubCategoryList } from "../components/category/subCategoryList";

const Category = () => {
    return (
        <div>
            <Query query={PRODUCTS_QUERY} id={null}>
                {({ data: { products } }) => {

                    return (
                        <div>
                            <SubCategoryList />
                            <Productgrid productgrid={products} />;
                        </div>


                    );
                }}


            </Query>


        </div>
    );
};

export default Category;
