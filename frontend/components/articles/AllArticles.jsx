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
                <div className="row justify-content-center ">
                    <Query query={GETCATEGORIES_QUERY}>
                        {({data: {categories}}) => {
                            console.log(categories)
                            return (
                                categories.map((category) => {
                                    return (
                                        <div key={category.id} className="col-lg-sm-6 px-5">
                                            <div className="card " style={{width: "18rem"}}>
                                                <div className="card-body ">
                                                    {/* TITLE*/}
                                                    <h5 className="card-title">
                                                        <Link href={{
                                                            pathname: "/category",
                                                            query: {id: category.StrapiName}
                                                        }}>
                                                            <a className=".frontpageIconsText">{category.name}</a>
                                                        </Link>
                                                    </h5>
                                                    <div className="card-text">
                                                        <Link href={{
                                                            pathname: "/category",
                                                            query: {id: category.StrapiName}
                                                        }}>
                                                            <a className="nav-link imageSize"><img
                                                                src={"https://trnbackend.herokuapp.com" + category.image.url}
                                                                alt="logo"/></a>
                                                        </Link>
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

export default AllArticles;
