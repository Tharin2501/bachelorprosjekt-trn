import React from "react"
import GETCATEGORIES_QUERY from "../../apollo/queries/Category/GetCategories";
import Query from "../query";
import Link from "next/link";

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
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="card">

                            <div className="mycard-header">
                                <img src="/images/articles/folk.jpg" alt="logo"/>

                            </div>

                            <div className="card-body">

                                <div className="card-body-header">
                                    <h1>Alt du trenger å vite om parfyme</h1>
                                </div>


                                <p className="card-body-description pt-3">
                                    Parfyme er en blanding av eteriske oljer og aromatiske dufter.
                                    Det er et kunstverk vi bruker for å uttrykke hvem vi er,
                                    for å forføre og føle oss attraktive.
                                    Parfyme spiller en større rolle inn i dagene våre enn vi tror og det kan kobles til
                                    både minner og følelser.
                                </p>

                                <div className="pt-5"><h6 style={{color: "#757B82"}}>Skjønnhet og velvære</h6></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};



export default AllArticles2;
