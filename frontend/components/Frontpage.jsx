import React from "react"
import MyCarousel from "../components/MyCarousel"
import Link from "next/link";
import { MyMarquee } from "./MyMarquee";
import MyDrawer from "./MyDrawer";
import GETCATEGORIES_QUERY from "../apollo/queries/Category/GetCategories"
import Query from "../components/query";
import Category from "../pages/category";
export const Frontpage = () => {
    return (
        <div>

            <MyMarquee />
            <MyCarousel />

            <FrontpageGrid />

            <hr />
            <ShowIdBanner/>

        </div>
    );
};

export const ShowIdBanner = () => {
    return(
    <div className="container-fluid">
        <div className="row justify-content-center py-5">
           <img src="/images/showId.jpg" alt="logo"/>
        </div>
    </div>
    );
};

export const FrontpageGrid = () => {

    return (
        <div>
            <h3 className="horizontal-line1">
                <span className="horizontal-line2">Våre Kategorier</span>
            </h3>


            <div className="container-fluid">
                <div className="row justify-content-center py-5">

                    <Query query={GETCATEGORIES_QUERY}>
                        {({ data: { categories } }) => {
                            console.log(categories)
                            return (
                                categories.map((category) => {
                                    return (
                                        <div key={category.id} className="col-lg-sm-6 px-3">
                                            <Link href={{ pathname: "/category", query: { id: category.StrapiName } }}>
                                                <a className="nav-link imageSize"><img src={"https://trnbackend.herokuapp.com" + category.image.url} alt="logo" /></a>
                                            </Link>
                                            <Link href={{ pathname: "/category", query: { id: category.StrapiName } }}>
                                                <a className=".frontpageIconsText">{category.name}</a>
                                            </Link>
                                        </div>
                                    )
                                })
                            )
                        }}
                    </Query>






                </div>
            </div>
        </div>
    );
};

