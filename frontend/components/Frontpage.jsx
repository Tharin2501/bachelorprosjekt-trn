import React from "react"
import MyCarousel from "../components/MyCarousel"
import Link from "next/link";
import {MyMarquee} from "./MyMarquee";
import MyDrawer from "./MyDrawer";
import GETCATEGORIES_QUERY from "../apollo/queries/Category/GetCategories"
import Query from "../components/query";
import ARTICLES_QUERY_WITHLIMIT from "../apollo/queries/article/articleslimit";

export const Frontpage = () => {
    return (
        <div>

            <MyMarquee/>
            <FrontpageGrid/>
            <MyCarousel/>
            <DisplayAllArticlesFrontpage/>
            <hr/>
            <ShowIdBanner/>

        </div>
    );
};


export const DisplayAllArticlesFrontpage = () => {

   return(
       <div>
           <h3 className="horizontal-line1 pt-4">
               <span className="horizontal-line2">Våre Artikler</span>
           </h3>
           <div className="container-fluid">
               <h4 className="text-left text-wrap mt-5 pl-4">Populære artikler </h4>
               <div className="row justify-content-center">
                   <Query query={ARTICLES_QUERY_WITHLIMIT}>
                       {({data: {articles}}) => {
                           console.log(articles);
                           return (
                               articles.map((article) => {
                                   return (
                                       <div key={article.id} className="col-lg-sm-6 px-5">

                                           <div className="card">

                                               <div className="mycard-header">
                                                   <img
                                                       src={"https://trnbackend.herokuapp.com" + article.headerImage[0].url}
                                                       alt="logo"/>
                                               </div>

                                               <div className="card-body">

                                                   <div className="card-body-header">
                                                       <h1>{article.title}</h1>
                                                   </div>
                                                   <div className="">
                                                       <div className="card-body-description pt-3 mt-3">
                                                           <p>
                                                               {article.introduction}
                                                           </p>
                                                           <div className="row mt-3 pl-3">
                                                               <Link href={{
                                                                   pathname: "artikkel",
                                                                   query: {id: article.id}
                                                               }}>
                                                                   <button type="button" className="btn btn-primary">
                                                                       <a>Les mer</a>
                                                                   </button>
                                                               </Link>
                                                           </div>
                                                       </div>

                                                   </div>
                                                   <div className="pt-5 mt-3">
                                                       <h6 style={{color: "#757B82"}}>
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

export const ShowIdBanner = () => {
    return (
        <div className="container">
            <div className="justify-content-center py-5">
                <img className="img-fluid" src="/images/showId.jpg" width="100%" alt="logo"/>
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
                        {({data: {categories}}) => {
                            return (
                                categories.map((category) => {
                                    return (
                                        <div key={category.id} className="col-lg-sm-6 px-3">
                                            <Link href={{pathname: "/category", query: {id: category.StrapiName}}}>
                                                <a className="nav-link imageSize"><img
                                                    src={"https://trnbackend.herokuapp.com" + category.image.url}
                                                    alt="logo"/></a>
                                            </Link>
                                            <Link href={{ pathname: "/category", query: { id: category.StrapiName } }}>
                                                <a className="nav-link frontpageIconsText">{category.name}</a>
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

