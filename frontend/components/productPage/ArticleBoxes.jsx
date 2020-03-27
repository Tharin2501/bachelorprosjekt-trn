import React from "react"
import Link from "next/link";

export const ArticleBoxes = () => {

    return (
        <div className="container">
            <div className="row">

                <div className="col-sm-8 article_container">
                    <img src="/images/carousel/placeholder1.jpg" alt="logo"/>
                        <button className="btn">Button</button>
                </div>

                <div className="col-sm-4">
                    <div className="article_container">
                    <img src="/images/carousel/placeholder1.jpg" alt="logo"/>
                        <button className="btn">Button</button>
                    </div>
                    <div className="row-sm-4 article_container">
                        <img src="/images/carousel/placeholder1.jpg" alt="logo"/>
                        <button className="btn">Button</button>
                    </div>
                </div>

            </div>
            <hr/>
        </div>
    );
}
