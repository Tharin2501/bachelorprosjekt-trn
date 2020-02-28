import React from "react"
import Link from "next/link";

export const MyHeader = () => (
    <nav className="navbar navbar-expand bg-light">
        <div className="mr-auto">
            <a className="nav-item" href="#">Meny</a>
        </div>
        <div className="mx-auto">
            <img src="/images/logo.png" width="50px" height="55px" alt="logo"/>
        </div>
        <div className="ml-auto">
            <a className="nav-item" href="#">right</a>
        </div>
    </nav>
);


export const MyFooter = () => (
    <div className="container-sm-fluid fixed-bottom">
        <nav className="navbar nav-expand bg-light">
            <div className="row">
                {/* Links*/}
                <div className="col-4">
                    <Link href="parfyme">
                        <a className="nav-link">hei</a>
                    </Link>
                </div>
                <div className="col-4">
                    <Link href="makeup">
                        <a className="nav-link">hei</a>
                    </Link>
                </div>
                <div className="col-4">
                    <Link href="makeup">
                        <a className="nav-link">hei</a>
                    </Link>
                </div>
            </div>
        </nav>
    </div>
);
