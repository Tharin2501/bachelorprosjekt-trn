import React from "react";
import HorizontalMenuItem from "./common/horizontalMenuItem"
import Link from "next/link";
const SubCategoryListSubCategory = ({ subCategoryList, categoryName, mainCategory }) => {

    return (
        <div className="scrollmenu">

            <div className="navitem">
                <div>
                    <Link href={{ pathname: "/category", query: { id: categoryName } }}>
                        <a> <div className="nav-link imageSize"> <img src={"/images/arrowLeftpng.png"} alt=""></img> </div></a>
                    </Link>

                </div>
                <div>
                    <Link href={{ pathname: "/category", query: { id: categoryName } }}>
                        <a className="nav-link frontpageIconsText"> Til {mainCategory.name}</a>
                    </Link>
                </div>
                <div className="verticalLine"></div>
            </div>



            {subCategoryList.map((category) => {
                return (
                    <HorizontalMenuItem key={category.id} pathnamekatOrSub={"/subCategory"} category={category}></HorizontalMenuItem>
                )
            })
            }

        </div>



    )

}


export default SubCategoryListSubCategory 
