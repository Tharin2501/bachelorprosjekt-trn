import React from "react"
import Link from "next/link";
import {Button} from 'reactstrap';

export const ArticleBoxes = () => {

    return (
        <div className="container">
            <div className="row">

                <div className="col-sm-8">
                    <img src="/images/articles/hudpleievelger_test.png" alt="logo"/>

                    <div className="text-block">
                        <h3>Hudpleievelgeren</h3>
                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </h6>
                    </div>
                    <Link href="hudpleievelger">
                        <Button className="outlined_btn" outline color="secondary">Klikk her for å ta testen</Button>
                    </Link>
                </div>


                <div className="col-sm-4 pt-3">
                    <div className="article_container">
                        <img src="/images/articles/folk.jpg" alt="logo"/>
                        <Link href="#">
                            <button className="btn">les mer</button>
                        </Link>
                    </div>

                    <div className="row-sm-4 pt-3 article_container">
                        <img src="/images/articles/flerefolk.jpg" alt="logo"/>
                        <Link href="#">
                            <button className="btn">les mer</button>
                        </Link>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
}
