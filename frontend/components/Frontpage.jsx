import React from "react"
import MyCarousel from "../components/MyCarousel"
import Link from "next/link";
import { MyMarquee } from "./MyMarquee";
import GETCATEGORIES_QUERY from "../apollo/queries/Category/GetCategories"
import Query from "../components/query";
import HorizontalMenuItem from "./category/common/horizontalMenuItem"
import ARTICLES_QUERY_WITHLIMIT from "../apollo/queries/article/articleslimit";

export const Frontpage = () => {
    return (
        <div>
            <MyMarquee />
            <FrontpageGrid />
            <MyCarousel />
            <DisplayAllArticlesFrontpage />
            <ClickandCollectBanner />
            <ShowIdBanner />
        </div>
    );
};



export const DisplayAllArticlesFrontpage = () => {

    return (
        <div>
            <h3 className="horizontal-line1 p-4 container">
                <span className="horizontal-line2">Artikler</span>
            </h3>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <Query query={ARTICLES_QUERY_WITHLIMIT}>
                        {({ data: { articles } }) => {

                            return (
                                articles.map((article) => {
                                    return (
                                        <div key={article.id} className="col-lg-sm-6 px-5">

                                            <div className="card">

                                                <div className="mycard-header">
                                                    <img
                                                        src={"https://trnbackend.herokuapp.com" + article.headerImage[0].url}
                                                        alt={article.headerImage[0].alternativeText} />
                                                </div>

                                                <div className="card-body">

                                                    <div className="card-body-header" tabIndex="0" >
                                                        <h2>{article.title}</h2>
                                                    </div>
                                                    <div className="" >
                                                        <div className="card-body-description pt-3 mt-3" >
                                                            <p>
                                                                {article.introduction}
                                                            </p>
                                                            <div className="row mt-3 pl-3">
                                                                <Link href={{
                                                                    pathname: "artikkel",
                                                                    query: { id: article.id }
                                                                }}>
                                                                    <button type="button" className="btn btn-primary">
                                                                        <a>Les mer</a>
                                                                    </button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pt-5 mt-3">
                                                        <h6 style={{ color: "#757582" }}>
                                                            {article.category}
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            )
                        }}
                    </Query>
                </div>
            </div>
        </div>

    )
}

export const ClickandCollectBanner = () => {
    return (
        <div className="container">
            <div className="justify-content-center pb-4 pt-3">
                <img className="img-fluid" src="/images/klikkAndHent.png" width="100%" alt="Klikk og hent.Tre sirkler. 1 Viser bilde av en handlekurv med tekst:Velg produkt. Dobble to viser en flybilett med tekst legg til flyinformasjon. 3 viser en figur av en person som holder en pose. Tekst som sier Hent ved ankomt i flyplassen" />
            </div>
        </div>
    );
};

export const ShowIdBanner = () => {
    return (
        <div className="container">
            <div className="justify-content-center pb-4 pt-3">
                <img className="img-fluid" src="/images/showId.jpg" width="100%" alt="Beina til tre forskjellige personer. Med tekst i stor hvit font som sier «Under 25? Vis leg!»" />
            </div>
        </div>
    );
};

export const FrontpageGrid = () => {

    return (
        <div>
            <div className="container-fluid">
                <div className="row justify-content-center  ">

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

