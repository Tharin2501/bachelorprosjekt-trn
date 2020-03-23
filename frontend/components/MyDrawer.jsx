import React, {Component, useState} from "react";
import Drawer from 'react-motion-drawer-improved';
import {GiHamburgerMenu} from "react-icons/gi";
import {MySubMenu} from "./layout/layout";
import Link from "next/link";

export const MyDrawer = () => {

    const [openLeft, setOpenLeft] = useState(false);
    const [width, setWidth] = useState(300);
    const [noTouchOpen, setNoTouchOpen] = useState(false);
    const [noTouchClose, setNoTouchClose] = useState(false);
    const [overLay, setOverlay] = useState("rgba(255,255,255,0.6)");

    return (

        <div>
            <div>
                <ul className="left">
                    <li style={{cursor: "pointer", height: "100%"}}>
                        <a onClick={() => setOpenLeft({openLeft: true})}>
                            <GiHamburgerMenu/>
                        </a>
                    </li>
                </ul>
            </div>

            <Drawer overlayColor={overLay}
                    width={width}
                    fadeOut
                    open={openLeft}
                    noTouchOpen={noTouchOpen}
                    noTouchClose={noTouchClose}>

                <div style={{backgroundColor: `red`, width: "100%", height: "100%"}}>
                    <div style={{width: "100%"}}>
                        <ul>
                            <li className="nav_submenu-item">
                                <a><DrawerContent1/></a>
                            </li>
                            <li className="nav_submenu-item">
                                <a><DrawerContent2/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Drawer>
        </div>
    );
};

export const DrawerContent1 = () => {

    const [openLeft, setOpenLeft] = useState(false);
    const [width, setWidth] = useState(300);
    const [noTouchOpen, setNoTouchOpen] = useState(false);
    const [noTouchClose, setNoTouchClose] = useState(false);
    const [overLay, setOverlay] = useState("rgba(255,255,255,0.6)");

    return (
        <div>
            <div>
                <ul>
                    <li className="nav_submenu-item" onClick={() => setOpenLeft({openLeft: true})}>
                        <div className="myImg">
                            <img className="myImg" src="/images/carousel/placeholder1.jpg" alt="logo"/>
                        </div>
                        <h1>Makeup</h1>
                    </li>
                </ul>

                <Drawer overlayColor={overLay}
                        width={width}
                        fadeOut
                        open={openLeft}
                        noTouchOpen={noTouchOpen}
                        noTouchClose={noTouchClose}>
                    {MyMakeup}
                </Drawer>
            </div>
        </div>
    );
}


export const MyMakeup = () => {

    return (

        <div style={{backgroundColor: `red`, width: "100%", height: "100%"}}>
            <div style={{width: "100%"}}>
                <ul>
                    <li className="nav_submenu-item">
                        <div className="myImg">
                            <img className="myImg" src="/images/carousel/placeholder1.jpg" alt="logo"/>
                        </div>
                        <h1>Ansikt</h1>
                    </li>
                    <li className="nav_submenu-item">
                        <div className="myImg">
                            <img className="myImg" src="/images/carousel/placeholder1.jpg" alt="logo"/>
                        </div>
                        <h1>Øyne</h1>
                    </li>
                </ul>
            </div>
        </div>

    );
};


export function DrawerContent2() {

    const [openLeft, setOpenLeft] = useState(false);
    const [width, setWidth] = useState(300);
    const [noTouchOpen, setNoTouchOpen] = useState(false);
    const [noTouchClose, setNoTouchClose] = useState(false);

    const drawerProps = {
        overlayColor: "rgba(255,255,255,0.6)",
    };

    return (
        <div>
            <div>
                <ul>
                    <li className="nav_submenu-item" onClick={() => setOpenLeft({openLeft: true})}>
                        <div className="myImg">
                            <img className="myImg" src="/images/carousel/placeholder1.jpg" alt="logo"/>
                        </div>
                        <h1>Hudpleie</h1>
                    </li>
                </ul>

                <Drawer {...drawerProps}
                        width={width}
                        fadeOut
                        open={openLeft}
                        noTouchOpen={noTouchOpen}
                        noTouchClose={noTouchClose}>
                    {MyHudpleie}
                </Drawer>
            </div>
        </div>
    );
}

export const MyHudpleie = () => {

    return (

        <div style={{backgroundColor: `red`, width: "100%", height: "100%"}}>
            <div style={{width: "100%"}}>
                <ul>
                    <li className="nav_submenu-item">
                        <div className="myImg">
                            <img className="myImg" src="/images/carousel/placeholder1.jpg" alt="logo"/>
                        </div>
                        <h1>Ansikt</h1>
                    </li>
                    <li className="nav_submenu-item">
                        <div className="myImg">
                            <img className="myImg" src="/images/carousel/placeholder1.jpg" alt="logo"/>
                        </div>
                        <h1>Kropp</h1>
                    </li>
                </ul>
            </div>
        </div>

    );
};
