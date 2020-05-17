import React from "react"
import Query from "../query";
import Link from "next/link";
import ARTICLES_QUERY from "../../apollo/queries/article/articles";

export const DisplayAllArticles = () => {

    return (
        <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
                console.log(articles);
                return (
                    articles.map((article) => {
                        return (
                            <div key={article.id} className="col-lg-sm-6 mx-5 px-5">

                                <div className="card" tabIndex="1">

                                    <div className="mycard-header">
                                        <img
                                            src={"https://trnbackend.herokuapp.com" + article.headerImage[0].url}
                                            alt={article.headerImage[0].url} />
                                    </div>

                                    <div className="card-body">

                                        <div className="card-body-header">
                                            <h1>{article.title}</h1>
                                        </div>
                                        <div>
                                            <div className="card-body-description pt-3 mt-3">
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
                                            <h6 style={{ color: "#757B82" }}>
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
    )
}

const AllArticles = () => {

    return (
        <div>
            <h3 className="horizontal-line1 pt-4">
                <span className="horizontal-line2">Våre Artikler</span>
            </h3>
            <div className="container-fluid">
                {/*<h4 className="text-left text-wrap mt-5 pl-4">Populære artikler </h4> */}
                <div className="row justify-content-center">
                    <DisplayAllArticles />
                </div>
            </div>
        </div>
    );
};


export default AllArticles;
