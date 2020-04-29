import React from "react"
import {AiOutlineMail} from "react-icons/ai"
import Link from "next/link";
import Query from "../query";
import ARTICLES_QUERY from "../../apollo/queries/article/articles";


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
        authors: props.artikkel.authors.name
    }


    return (

        <div className="justify-content-center text-center"> {/* Fjern text-center kanskje??*/}

            <div>
                <h1 className="pb-4"> {articleContext.title}</h1>

                <div className="square">
                    <p>{articleContext.introduction}
                    </p>
                </div>
                <img className="w-100"
                    src={"https://trnbackend.herokuapp.com" + articleContext.headerImage[0].url}
                    alt="logo"/>

                    {/*{ArticleContent()}*/}
                <div className="square">
                    <div className="content">
                        <div className="article-main-container pt-5">
                            <div>
                                {articleContext.content}
                            </div>

                            <img className="mt-5 mx-auto rounded "style={{width: "50rem"}}
                                src={"https://trnbackend.herokuapp.com" + articleContext.contentImage.url}
                                alt="logo"/>

                            {/* {ArticleProductCard()} */}
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xs-12">
                                        <div className="card" style={{width: "14rem"}}>
                                            <img className="card-img-top" src={"https://trnbackend.herokuapp.com" + articleContext.productImage.url} alt="Card image cap"/>
                                            <div className="card-body">
                                                <h5 className="card-title">{articleContext.productTitle}</h5>
                                                <p className="card-text">{articleContext.productText}</p>
                                                <h6 className="card-text">{articleContext.price + " kr"} </h6>
                                                <a href="#" className="btn btn-primary">Kjøp</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="square">
                    <div className="content">
                        <div className="socialMediaContact-container">
                            <h5>Følg vår egen TaxfreeHanne på Instagram, Facebook og blogg for flere gode tips!</h5>
                            <div className="row">
                                <div className="col-xs">
                            <div className="article-img-container mx-auto ">
                                <img
                                    src={"https://trnbackend.herokuapp.com" + articleContext.socialmediaImage.url}
                                    alt="logo"/>
                            </div>
                                </div>
                        </div>
                    </div>
                    </div>


                    <div className="row text-left mt-3">
                        <div className="col-sm-12">
                            {/* <p><AiOutlineMail style={{margin: 15}}/> Skrevet av {articleContext.authors.name}</p> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

/*
// Social media contact content (Pink box)
const SocialMediaContactBox = () => {
    return (
        <div className="square">
            <div className="content">
                <div className="socialMediaContact-container">
                    <h5>Følg vår egen TaxfreeHanne på Instagram, Facebook og blogg for flere gode tips!</h5>



                    <div className="article-img-container">
                        <img
                            src={"https://trnbackend.herokuapp.com" + articleContext.headerImage[0].url}
                            alt="logo"/>
                    </div>

                </div>
            </div>
            <div className="row text-left mt-3">
                <div className="col-sm-12">
                    <p><AiOutlineMail style={{margin: 15}}/> Skrevet av author fra strapi</p>

                </div>
            </div>
        </div>
    )
};
*/
/*

const ArticleContent = (props) => {
    return (
        <div className="square">
            <div className="content">

                <div className="article-main-container pt-5">
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            It has survived not only five centuries, but also the leap into electronic
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                        </p>
                        <h2>Undertittel 1</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            It has survived not only five centuries, but also the leap into electronic
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                        </p>
                    </div>
                    <img className="py-3"
                         src={"https://trnbackend.herokuapp.com" + props.articleContext.headerImage.image[0].url}
                         alt="logo"/>
                    <h2>Undertittel 2</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        It has survived not only five centuries, but also the leap into electronic
                        remaining essentially unchanged. It was popularised in the 1960s with the release of
                    </p>
                    {ArticleProductCard()}
                </div>
            </div>
        </div>
    )
}

export const ArticleProductCard = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <img className="card-img-top" src="/images/articles/flerefolk.jpg" alt="Card image cap"></img>
                        <div className="card-body">
                            <h5 className="card-title">{articleContext.productTitle}</h5>
                            <p className="card-text">Her kommer produktbeskrivelsen</p>
                            <a href="#" className="btn btn-primary">Kjøp</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <img className="card-img-top" src="/images/articles/flerefolk.jpg" alt="Card image cap"></img>
                        <div className="card-body">
                            <h5 className="card-title">Produkt tittel</h5>
                            <p className="card-text">Her kommer produktbeskrivelsen</p>
                            <a href="#" className="btn btn-primary">Kjøp</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
*/
export default Articles;
