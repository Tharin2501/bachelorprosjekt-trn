import React from "react";
import { useRouter } from "next/router";
import SubCategoryList from "../components/category/subCategoryList"
import ProductsComonent from "../components/category/productsComponent";
import Highlight3Articles from "../components/category/highlight3Articles"
import GETCATEGORYFROMSUBCATEGORYSTRAPINAME_QUERY from "../apollo/queries/subCategories/getSubCategoryFromStrapiName"
import QuerySubCategory from "../components/querySubCategory"
//   <Link href={{ pathname: "/produktside", query: { id: productcard.id } }}>
const SubCategory = () => {
    /*
        <SubCategoryList SubCategoryList={router.query.id}></SubCategoryList>
                <h1>{router.query.id}</h1>
    
    
    
                    <div className="scrollmenu">
                            <div className="navitem">
                                <button type="button" class="btn btn-primary btn-circle btn-sm">Se alt</button>
                            </div>
                            {categories[0].sub_categories.map((category) => {
                                return (
    
                                    <HorizontalMenuItem key={category.id} HorizontalMenuItem={category}></HorizontalMenuItem>
    
                                )
                            })}
                        </div>
                */
    const router = useRouter()
    return (
        <div>
            <QuerySubCategory query={GETCATEGORYFROMSUBCATEGORYSTRAPINAME_QUERY} nametoInsert={router.query.id}>
                {({ data: { subCategories } }) => {
                    //console.log(subCategories[0].category.name)
                    return (
                        <SubCategoryList SubCategoryList={subCategories[0].category.name}></SubCategoryList>
                    )

                }}
            </QuerySubCategory>

        </div >
    );
};
export default SubCategory;