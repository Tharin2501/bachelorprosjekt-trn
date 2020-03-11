import React from "react"
import MyCarousel from "../components/MyCarousel"
import Link from "next/link";
import {MyMarquee} from "./MyMarquee";

export const Frontpage = () => {
    return (
        <div>
            <MyMarquee/>
            <MyCarousel/>
            <FrontpageGrid/>
        </div>
    );
};
{/* numbers in .col-*-* should always add up to 12 for each row.*/}
export const FrontpageGrid = () => {

    return (
        <div className="container-fluid">
            <div className="row justify-content-center py-5">
                <h3>Våre kategorier</h3>
            </div>
            {/* row 1/5*/}
            <div className="row justify-content-center">
                <div className="col-lg-sm-6 px-3">
                    <Link href="parfyme">
                        <a className="nav-link"><img src="/images/parfyme.png" alt="logo"/></a>
                    </Link>
                    <a>Parfyme</a>
                </div>
                <div className="col-lg-sm-6 px-3">
                    <Link href="parfyme">
                        <a className="nav-link"><img src="/images/makeup.png" alt="logo"/></a>
                    </Link>
                    <a>Makeup</a>
                </div>
            </div>
            {/* row 2/5*/}
            <div className="row justify-content-center pt-5">
                <div className="col-sm-lg-6 px-3">
                    <Link href="parfyme">
                        <a className="nav-link"><img src="/images/hudpleie.png" alt="logo"/></a>
                    </Link>
                    <a>Hudpleie</a>
                </div>
                <div className="col-sm-lg-6 px-3">
                    <Link href="parfyme">
                        <a className="nav-link"><img src="/images/solkrem.png" alt="logo"/></a>
                    </Link>
                    <a>Solkrem</a>
                </div>
            </div>
            {/* row 3/5*/}
            <div className="row justify-content-center pt-5">
                <div className="col-sm-lg-6 px-3">
                    <Link href="parfyme">
                        <a className="nav-link"><img src="/images/hår.png" alt="logo"/></a>
                    </Link>
                    <a>Hår</a>
                </div>
                <div className="col-sm-lg-6 px-3">
                    <Link href="parfyme">
                        <a className="nav-link"><img src="/images/godteri.png" alt="logo"/></a>
                    </Link>
                    <a>Godteri</a>
                </div>
            </div>
            {/* row 4/5*/}
            <div className="row justify-content-center pt-5">
                <div className="col-sm-lg-6 px-3">
                    <Link href="parfyme">
                        <a className="nav-link"><img src="/images/alkohol.png" alt="logo"/></a>
                    </Link>
                    <a>Alkohol</a>
                </div>
                <div className="col-sm-lg-6 px-3">
                    <Link href="parfyme">
                        <a className="nav-link"><img src="/images/tobakk.png" alt="logo"/></a>
                    </Link>
                    <a>Tobakk</a>
                </div>
            </div>
            {/* row 5/5*/}
            <div className="row justify-content-center pt-5">
                <div className="col-sm-lg-6 px-3">
                    <Link href="parfyme">
                        <a className="nav-link"><img src="/images/tilreise.png" alt="logo"/></a>
                    </Link>
                    <a>Til reisen</a>
                </div>
                <div className="col-sm-lg-6 px-3">
                    <Link href="parfyme">
                        <a className="nav-link"><img src="/images/mote.png" alt="logo"/></a>
                    </Link>
                    <a>Mote</a>
                </div>
            </div>
        </div>
    );
};
