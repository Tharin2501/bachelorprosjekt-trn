import React from "react"
import { AiOutlineMail } from "react-icons/ai"


export const Articles = (props) => {

    let articleContext = {
        id: props.artikkel.id,
        title: props.artikkel.title,
        introduction: props.artikkel.introduction,
        headerImage: props.artikkel.headerImage,
        content: props.artikkel.content,
        contentImage: props.artikkel.contentImage,
        productImage: props.artikkel.productImage,
        productTitle: props.artikkel.productTitle,
        productText: props.artikkel.productText,
        price: props.artikkel.price,
        socialmediaImage: props.artikkel.socialmediaImage,
        authors: props.artikkel.authors
    };

    return (

        <div className="justify-content-center text-center">

            <div>
                <h1 className="pb-4 mt-3"> {articleContext.title}</h1>

                <div className="square">
                    <p>{articleContext.introduction}
                    </p>
                </div>
                <img className="w-100"
                    src={"https://trnbackend.herokuapp.com" + articleContext.headerImage[0].url}
                    alt="logo" />

                {/*{ArticleContent()}*/}
                <div className="square">
                    <div className="content">
                        <div className="article-main-container pt-5">
                            <div>
                                {articleContext.content}
                            </div>

                            <img className="mt-5 mx-auto rounded " style={{ minwidth: "44rem", height: "22rem" }}
                                src={"https://trnbackend.herokuapp.com" + articleContext.contentImage.url}
                                alt="logo" />

                            {/* {ArticleProductCard()} */}
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xs-12">
                                        <div className="card" style={{ width: "14rem" }}>
                                            <img className="card-img-top"
                                                src={"https://trnbackend.herokuapp.com" + articleContext.productImage.url}
                                                alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">{articleContext.productTitle}</h5>
                                                <p className="card-text">{articleContext.productText}</p>
                                                <h6 className="card-text pb-2"
                                                    style={{ color: "red" }}>{articleContext.price} <span
                                                        className="font-weight-light" style={{ color: "black" }}>kr</span>
                                                </h6>
                                                <a href="#" className="btn btn-primary p">Kjøp</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="square pb-2">

                    <div className="content">
                        <div className="socialMediaContact-container">
                            <h3 className="font-italic">Takk for at du leste! </h3>
                            <div className="row">
                                <div className="col-xs">
                                    <div className="article-img-container mx-auto ">
                                        <img className="rounded mt-2"
                                            src={"https://trnbackend.herokuapp.com" + articleContext.socialmediaImage.url}
                                            alt="logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <p className="font-weight-light"><AiOutlineMail style={{ margin: 10 }} />
                        Skrevet av {articleContext.authors[0].name}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default Articles;
