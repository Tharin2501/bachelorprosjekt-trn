import React from "react"

const Artikler = () => {

    return (
        <div className="justify-content-center text-center">
            <h1 className="pb-4"> Hent tittel fra strapi</h1>

            <div className="square">
                <p>This paragraph shoulb be fetched dynamically by strapi.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
            </div>

            {/* fetch image from strapi */}
            <img src="/images/articles/folk.jpg" alt="logo"/>
            {ArticleContent()}
            {SocialMediaContactBox()}

        </div>
    )
};

const SocialMediaContactBox = () => {
    return (
        <div className="square">
            <div className="content">
                <div className="article-main2">
                    <p>This paragraph shoulb be fetched dynamically by strapi.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
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
                <div className="article-main">
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
                    <img src="/images/articles/flerefolk.jpg" alt="logo"/>
                    <h2>Undertittel 2</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        It has survived not only five centuries, but also the leap into electronic
                        remaining essentially unchanged. It was popularised in the 1960s with the release of
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Artikler;
