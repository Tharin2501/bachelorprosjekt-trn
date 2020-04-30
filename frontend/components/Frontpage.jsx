import React from "react"
import MyCarousel from "../components/MyCarousel"
import Link from "next/link";
import { MyMarquee } from "./MyMarquee";
import MyDrawer from "./MyDrawer";
import GETCATEGORIES_QUERY from "../apollo/queries/Category/GetCategories"
import Query from "../components/query";
import Category from "../pages/category";
import HorizontalMenuItem from "./category/common/horizontalMenuItem"
export const Frontpage = () => {
    return (
        <div>

            <MyMarquee />
            <FrontpageGrid />
            <MyCarousel />

            <hr />
            <ShowIdBanner />

        </div>
    );
};

export const ShowIdBanner = () => {
    return (
        <div className="container">
            <div className="justify-content-center py-5">
                <img className="img-fluid" src="/images/showId.jpg" width="100%" alt="logo" />
            </div>
        </div>
    );
};

export const FrontpageGrid = () => {

    return (
        <div>
            <h3 className="horizontal-line1">
                <span className="horizontal-line2">Våre kategorier</span>
            </h3>


            <div className="container-fluid">
                <div className="row justify-content-center py-5">

                    <Query query={GETCATEGORIES_QUERY}>
                        {({ data: { categories } }) => {
                            return (
                                <div className="scrollmenu">
                                    {categories.map((category) => {
                                        return (
                                            <HorizontalMenuItem key={category.id} pathnamekatOrSub={"/category"} category={category}></HorizontalMenuItem>
                                        )
                                    })}
                                </div>
                            )
                        }}
                    </Query>






                </div>
            </div>
        </div>
    );
};

