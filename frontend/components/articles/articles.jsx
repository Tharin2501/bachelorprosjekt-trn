import React from "react"
import {AiOutlineMail} from "react-icons/ai"
import Link from "next/link";
import Query from "../query";
import ARTICLES_QUERY from "../../apollo/queries/article/articles";


export const Articles = (props) => {

    let productContext = {
        id: props.artikkel.id,
        title: props.artikkel.title
    }


    return (

        <div className="justify-content-center text-center"> {/* Fjern text-center kanskje??*/}

            <div>
                <h1 className="pb-4"> {productContext.title}</h1>
                {/*
                <div className="square">
                    <p>This paragraph should be fetched dynamically by strapi.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                </div>

                <img src="/images/articles/folk.jpg" alt="logo"/>

                {ArticleContent()}
                {SocialMediaContactBox()}
                */}
            </div>

        </div>
    );
};


// Social media contact content (Pink box)
const SocialMediaContactBox = () => {
    return (
        <div className="square">
            <div className="content">
                <div className="socialMediaContact-container">
                    <h5>Følg vår egen TaxfreeHanne på Instagram, Facebook og blogg for flere gode tips!</h5>

                    {/* fetch image from strapi */}

                    <div className="article-img-container">
                        <img className="pt-3" src="/images/articles/folk.jpg" alt="logo"/>
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

// Main content for article (white box)
const ArticleContent = () => {
    return (
        <div className="square">
            <div className="content">
                {/* fetch article content from strapi */}
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
                    <img className=" py-3" src="/images/articles/flerefolk.jpg" alt="logo"/>
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
                            <h5 className="card-title">Produkt tittel</h5>
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

export default Articles;
