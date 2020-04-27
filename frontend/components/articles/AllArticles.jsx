import React from "react"
import GETCATEGORIES_QUERY from "../../apollo/queries/Category/GetCategories";
import Query from "../query";
import Link from "next/link";
import ARTICLES_QUERY from "../../apollo/queries/article/articles";


const AllArticles = () => {

    return (
        <div>
            <h3 className="horizontal-line1 pt-4">
                <span className="horizontal-line2">Våre Artikler</span>
            </h3>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <Query query={GETCATEGORIES_QUERY}>
                        {({data: {categories}}) => {
                            console.log(categories);
                            return (
                                categories.map((category) => {
                                    return (
                                        <div key={category.id} className="col-lg-sm-6 px-5">
                                            <div className="card text-center h-75" style={{width: "18rem"}}>
                                                {/* HEADERIMAGE*/}
                                                <div className="card-img-top">
                                                    <Link href={{
                                                        pathname: "/category",
                                                        query: {id: category.StrapiName}
                                                    }}>
                                                        <a className="nav-link"><img
                                                            src={"https://trnbackend.herokuapp.com" + category.image.url}
                                                            alt="logo"/></a>
                                                    </Link>
                                                </div>
                                                <div className="card-body">
                                                    <div className="allArticle-main-container">
                                                        {/* TITLE*/}
                                                        <h5 className="card-title">
                                                            <Link href={{
                                                                pathname: "/category",
                                                                query: {id: category.StrapiName}
                                                            }}>
                                                                <a className=".frontpageIconsText">{category.name}</a>
                                                            </Link>
                                                        </h5>
                                                        {/* INTRODUCTION*/}
                                                        <p className="card-text">
                                                            This is the introduction text.
                                                            Vin til and bør være både frisk og smakskraftig.
                                                        </p>
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
};

// https://www.louistiti.fr/tutoriel-html5-css3-carte-article-ui/33
const AllArticles2 = () => {

    return (
        <div>
            <h3 className="horizontal-line1 pt-4">
                <span className="horizontal-line2">Våre Artikler</span>
            </h3>
            <div className="container-fluid">
                <h4 className="text-left text-wrap mt-5">Populære artikler for Skjønnhent og velvære</h4>
                <div className="row justify-content-center">
                    <Query query={ARTICLES_QUERY}>
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
                                                        alt="logo"
                                                    />

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
                                                                <Link href="/artikkel">
                                                                    <button type="button" className="btn btn-primary">
                                                                        <a>Les mer</a>
                                                                    </button>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="pt-5 mt-3"><h6
                                                        style={{color: "#757B82"}}> {article.category}</h6>
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
    );
};


export default AllArticles2;
