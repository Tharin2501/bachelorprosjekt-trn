import React from "react"
import Link from "next/link";

export const ArticleBoxes = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    <img src="/images/carousel/placeholder1.jpg" alt="logo"/>
                </div>
                <div className="col-sm-4">
                    <img src="/images/carousel/placeholder1.jpg" alt="logo"/>
                    <div className="row-sm-4">
                        <img src="/images/carousel/placeholder1.jpg" alt="logo"/>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
}
