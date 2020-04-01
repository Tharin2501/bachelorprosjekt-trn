import React, { Component, useState, useEffect } from "react";
import Drawer from 'react-motion-drawer-improved';
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

export const MyDrawer = () => {
    const [openLeft, setOpenLeft] = useState(false);

    const handleOpenLeftChange = () => setOpenLeft(!openLeft)

    return (
        <div>
            <div>
                <ul className="left">
                    <li style={{ cursor: "pointer", height: "100%" }}>
                        <a onClick={() => setOpenLeft({ openLeft: true })}>
                            <GiHamburgerMenu />
                        </a>

                    </li>
                </ul>
            </div>
            <MainMenu openLeft={openLeft} handleOpenLeftChange={handleOpenLeftChange}></MainMenu>
        </div>
    )
}

export const MainMenu = ({ openLeft }, handleOpenLeftChange) => {

    //const [currentOpenLeft, setCurrentOpenLeft] = useState(false);




    //const setOpenLeft = () => setCurrentOpenLeft(!currentOpenLeft)
    /*
        useEffect(() => {
            setCurrentOpenLeft(openLeft)
        }, [openLeft])
    
    */
    //handleOpenLeftChange()
    const [width, setWidth] = useState(300);
    const [noTouchOpen, setNoTouchOpen] = useState(false);
    const [noTouchClose, setNoTouchClose] = useState(false);
    const [overLay, setOverlay] = useState("rgba(255,255,255,0.6)");

    return (
        <Drawer overlayColor={overLay}
            width={width}
            fadeOut
            open={openLeft}
            noTouchOpen={noTouchOpen}
            noTouchClose={noTouchClose}>

            <div style={{ backgroundColor: `grey`, width: "100%", height: "100%" }}>
                <ul>
                    <li className="nav_submenu-item">
                        <a>Test</a>
                    </li>
                    <li className="nav_submenu-item">
                        <a><MySubMenu></MySubMenu></a>
                    </li>
                </ul>
            </div>
        </Drawer>
    )


}

export const MySubMenu = () => {
    const [openLeft, setOpenLeft] = useState(false);
    var testing
    const [width, setWidth] = useState(300);
    const [noTouchOpen, setNoTouchOpen] = useState(false);
    const [noTouchClose, setNoTouchClose] = useState(false);
    const [overLay, setOverlay] = useState("rgba(255,255,255,0.6)");


    const [openLefttest, setOpenLefttest] = useState(false);

    const test = () => {
        //setOpenLefttest(!openLefttest)
        console.log(openLefttest)

    }

    return (
        <div>
            <ul>
                <li className="nav_submenu-item" onClick={() => setOpenLeft({ openLeft: true })}>
                    <div className="myImg">
                        <img className="myImg" src="/images/carousel/placeholder1.jpg" alt="logo" />
                    </div>
                    <h1>Makeup</h1>
                </li>
            </ul>


            <Drawer overlayColor={overLay}
                width={width}
                fadeOut
                open={openLeft}
                noTouchOpen={noTouchOpen}
                noTouchClose={noTouchClose}
                onChange={test()}
            >
                {MyMakeup}
            </Drawer>
        </div>
    );
}

export const MyMakeup = () => {

    return (
        <div style={{ backgroundColor: `grey`, width: "100%", height: "100%" }}>
            <ul>
                <li className="nav_submenu-item">
                    <div className="myImg">
                        <img className="myImg" src="/images/carousel/placeholder1.jpg" alt="logo" />
                    </div>
                    <Link href="makeup">
                        <h1 className="nav-link">All Makeup</h1>
                    </Link>
                </li>
                <li className="nav_submenu-item">
                    <div className="myImg">
                        <img className="myImg" src="/images/carousel/placeholder1.jpg" alt="logo" />
                    </div>
                    <Link href="#">
                        <h1 className="nav-link">Ansikt</h1>
                    </Link>
                </li>
                <li className="nav_submenu-item">
                    <div className="myImg">
                        <img className="myImg" src="/images/carousel/placeholder1.jpg" alt="logo" />
                    </div>
                    <Link href="#">
                        <h1 className="nav-link">Øyne</h1>
                    </Link>
                </li>
            </ul>
        </div>
    );
};


