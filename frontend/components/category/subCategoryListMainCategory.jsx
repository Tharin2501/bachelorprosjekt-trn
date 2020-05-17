import React from "react";
import HorizontalMenuItem from "./common/horizontalMenuItem"
import Link from "next/link";
const SubCategoryListMainCategory = ({ subCategoryList, categoryName }) => {


    return (
        <div className="scrollmenu">,

            <div className="navitem">

                <div>
                    <Link href={{ pathname: "/" }}>
                        <a> <div className="nav-link imageSize"> <img src={"/images/arrowLeftpng.png"} alt=""></img> </div></a>
                    </Link>
                </div>

                <div>

                    <a href="/" className="nav-link frontpageIconsText"> Til forsiden</a>

                </div>
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


export default SubCategoryListMainCategory
