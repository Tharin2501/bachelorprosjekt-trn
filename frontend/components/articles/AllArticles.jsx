import React from "react"
import GETCATEGORIES_QUERY from "../../apollo/queries/Category/GetCategories";
import Query from "../query";
import Link from "next/link";
import ARTICLES_QUERY from "../../apollo/queries/article/articles";
import {useRouter} from "next/router";
import Articles from "./articles";
import HorizontalMenuItem from "../category/common/horizontalMenuItem";



// https://www.louistiti.fr/tutoriel-html5-css3-carte-article-ui/33
const AllArticles2 = () => {

    return (
        <div>
            <h3 className="horizontal-line1 pt-4">
                <span className="horizontal-line2">Våre Artikler</span>
            </h3>
            <div className="container-fluid">
                <h4 className="text-left text-wrap mt-5">Populære artikler </h4> {/* for Skjønnhent og velvære*/}
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
                                                                <Link href= {{pathname: "artikkel", query: {id: article.id}}}>
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
    );
};


export default AllArticles2;
