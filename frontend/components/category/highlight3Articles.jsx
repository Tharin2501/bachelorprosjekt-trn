import React from "react"
import Link from "next/link";
import {Button} from 'reactstrap';
import {useRouter} from "next/router";
import Query from "../query";
import ARTICLES_QUERY_WITHLIMIT from "../../apollo/queries/article/articleslimit";
import ARTICLES_CATEGORY from "../../apollo/queries/article/articlesCategory";

// https://www.w3schools.com/howto/howto_css_button_on_image.asp USE!
const Highlight3Articles = (props) => {
    const router = useRouter();

    return (
        /*
        <div className="container row">
            <MainArticle/>
                <Query query={ARTICLES_CATEGORY}>
                    {({data: {articles}}) => {
                        return (
                            articles.map((article) => {
                                return (
                                    <div key={article.id} className="col-sm-3 mr-5 saus">

                                        <div className="article_container">
                                            <img
                                                src={"https://trnbackend.herokuapp.com" + article.headerImage[0].url}
                                                alt="logo"/>
                                            <Link href={{
                                                pathname: "artikkel",
                                                query: {id: article.id}
                                            }}>
                                                <button className="btn">les mer</button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }}
                </Query>
            <hr/>
        </div>
        */
        <div className="container">
            <div className=" col-sm-8 mr-auto ml-5 pt-0">
            <MainArticle/>
            </div>
            <div className="row mx-5">

                <Query query={ARTICLES_CATEGORY}>
                    {({data: {articles}}) => {
                        return (
                            articles.map((article) => {
                                return (
                                    <div key={article.id} className="mx-auto">
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
            <hr/>
        </div>
    )

}

const MainArticle = () => {
    return (
        <div className="ml-2">
            <img src="/images/articles/hudpleievelger_test.png" alt="logo"/>

            <div className="text-block">
                <h3>Hudpleievelgeren</h3>
                <h6>Prøv vår nye hudpleievelger!
                </h6>
            </div>

            <Link href="/hudpleievelger">
                <Button className="outlined_btn" outline color="secondary">Klikk her for å ta testen</Button>
            </Link>
        </div>
    )
}

export default Highlight3Articles
