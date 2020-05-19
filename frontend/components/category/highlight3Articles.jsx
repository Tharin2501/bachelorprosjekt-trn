import React from "react"
import Link from "next/link";
import { Button } from 'reactstrap';
import { useRouter } from "next/router";
import Query from "../query";
import ARTICLES_QUERY_WITHLIMIT from "../../apollo/queries/article/articleslimit";
import ARTICLES_CATEGORY from "../../apollo/queries/article/articlesCategory";

// https://www.w3schools.com/howto/howto_css_button_on_image.asp USE!
const Highlight3Articles = (props) => {
    const router = useRouter();

    return (


        <Query query={ARTICLES_CATEGORY}>
            {({ data: { articles } }) => {
                return (

                    <div className="container">
                        <div className="row">

                            <div className="col-sm-9">
                                <img src="/images/articles/hudpleievelger_test.png" alt="logo" />

                                <div className="text-block">
                                    <h3>Hudpleievelgeren</h3>
                                    <h6> Finn den perfekte hudpleie rutinen tilpasset din hud.
                                    </h6>

                                    <Link href="/hudpleievelger" >
                                        <button type="button" className="btn btn-info" >Klikk her for å ta
                                        testen</button>
                                    </Link>
                                </div>

                            </div>

                            <div className="col-sm-3">
                                {articles.map((article) => {
                                    return (
                                        <div key={article.id}>
                                            <div className="card">
                                                <div className="mycard-header" >
                                                    <img
                                                        src={"https://trnbackend.herokuapp.com" + article.headerImage[0].url}
                                                        alt="logo" />
                                                </div>

                                                <div className="card-body">

                                                    <div className="card-body-header" tabIndex="0">
                                                        <h1>{article.title}</h1>
                                                    </div>

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
                                                    <div className="pt-5 mt-3">
                                                        <h6 style={{ color: "#757B82" }}>
                                                            {article.category}
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                )
            }}
        </Query>


    )

}



export default Highlight3Articles