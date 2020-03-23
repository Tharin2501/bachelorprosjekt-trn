import React from "react"
import MyCarousel from "../components/MyCarousel"
import Link from "next/link";
import { MyMarquee } from "./MyMarquee";


export const Frontpage = () => {
    return (
        <div>
            <MyMarquee />
            <MyCarousel />
            <FrontpageGrid />
            <hr />
        </div>
    );
};

export const FrontpageGrid = () => {

    return (
        <div>
            <h3 className="horizontal-line1">
                <span className="horizontal-line2">Våre Kategorier</span>
            </h3>

            <div className="container-fluid">
                <div className="row justify-content-center py-5">

                    <div className="col-lg-sm-6 px-3">
                        <Link href="parfyme">
                            <a className="nav-link frontpage-img-wh"><img src="/images/parfyme.png" alt="logo" /></a>
                        </Link>
                        <Link href="parfyme"><a>Parfyme</a></Link>
                    </div>

                    <div className="col-lg-sm-6 px-3">

                        <Link href={{ pathname: "/category", query: { id: "Ansiktspleie" } }}>
                            <a className="nav-link frontpage-img-wh"><img src="/images/makeup.png" alt="logo" /></a>
                        </Link>

                        <Link href="makeup"><a>Makeup</a></Link>
                    </div>

                    <div className="col-sm-lg-6 px-3">
                        <Link href="hudpleie">
                            <a className="nav-link frontpage-img-wh"><img src="/images/hudpleie.png" alt="logo" /></a>
                        </Link>
                        <Link href="hudpleie"><a>Hudpleie</a></Link>
                    </div>

                    <div className="col-sm-lg-6 px-3">
                        <Link href="solkrem">
                            <a className="nav-link frontpage-img-wh"><img src="/images/solkrem.png" alt="logo" /></a>
                        </Link>
                        <Link href="solkrem"><a>Solkrem</a></Link>
                    </div>
                    <div className="col-sm-lg-6 px-3">
                        <Link href="hår">
                            <a className="nav-link frontpage-img-wh"><img src="/images/hår.png" alt="logo" /></a>
                        </Link>
                        <Link href="solkrem"><a>Hår</a></Link>
                    </div><div className="col-sm-lg-6 px-3">
                        <Link href="godteri">
                            <a className="nav-link frontpage-img-wh"><img src="/images/godteri.png" alt="logo" /></a>
                        </Link>
                        <Link href="godteri"><a>Godteri</a></Link>
                    </div>

                    <div className="col-sm-lg-6 px-3">
                        <Link href={{ pathname: "/category", query: { id: "Alkohol" } }}>
                            <a className="nav-link frontpage-img-wh"><img src="/images/alkohol.png" alt="logo" /></a>
                        </Link>
                        <Link href="alkohol"><a>Alkohol</a></Link>
                    </div>

                    <div className="col-sm-lg-6 px-3">
                        <Link href="tobakk">
                            <a className="nav-link frontpage-img-wh"><img src="/images/tobakk.png" alt="logo" /></a>
                        </Link>
                        <Link href="tobakk"><a>Tobakk</a></Link>
                    </div>
                    <div className="col-sm-lg-6 px-3">
                        <Link href="reise">
                            <a className="nav-link frontpage-img-wh"><img src="/images/tilreise.png" alt="logo" /></a>
                        </Link>
                        <Link href="reise"><a>Til Reisen</a></Link>
                    </div>
                    <div className="col-sm-lg-6 px-3">
                        <Link href="mote">
                            <a className="nav-link frontpage-img-wh"><img src="/images/mote.png" alt="logo" /></a>
                        </Link>
                        <Link href="mote"><a>Mote</a></Link>
                    </div>




                </div>
            </div>
        </div>
    );
};

