import React, {Component, useState} from "react";
import Drawer from 'react-motion-drawer-improved';
import {GiHamburgerMenu} from "react-icons/gi";
import {MySubMenu} from "./layout/layout";
import Link from "next/link";

export default class MyDrawer extends Component {
    state = {
        openLeft: false,
        drawerStyle: `
{
  "background": "#F9F9F9",
  "boxShadow": "rgba(0, 0, 0, 0.188235) 0px 10px 20px, rgba(0, 0, 0, 0.227451) 0px 6px 6px"
}`,
        relativeWidth: false,
        width: 300,
        noTouchOpen: false,
        noTouchClose: false,
    };



    render() {


        const {
            drawerStyle: stringDrawerStyle,
            openLeft,
            noTouchOpen,
            noTouchClose
        } = this.state;

        let drawerStyle = {};

        const drawerProps = {
            overlayColor: "rgba(255,255,255,0.6)", drawerStyle
        };

        return (
            <div>

                <div>
                    <ul className="left">
                        <li style={{cursor: "pointer", height: "100%"}}>
                            <a onClick={() => this.setState({openLeft: true})}>
                                <GiHamburgerMenu/>
                            </a>
                        </li>
                    </ul>
                </div>

                <Drawer {...drawerProps}
                        width={this.state.width}
                        fadeOut
                        open={openLeft}
                        onChange={open => this.setState({openLeft: open})}
                        noTouchOpen={noTouchOpen}
                        noTouchClose={noTouchClose}>

                    <div style={{backgroundColor: `red`, width: "100%", height: "100%"}}>
                        <div style={{width: "100%"}}>
                            <ul>
                                <li className="nav_submenu-item">

                                    <a onClick={() => this.setState({openLeft: true})}>
                                        <DrawerContent/>
                                        <DrawerContent3/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </Drawer>

            </div>
        );
    }
}


export function DrawerContent(){

    const [openLeft, setOpenLeft] = useState(false);
    const [width, setWidth] = useState(300);
    const [noTouchOpen, setNoTouchOpen] = useState(false);
    const [noTouchClose, setNoTouchClose] = useState(false);

    const drawerProps = {
        overlayColor: "rgba(255,255,255,0.6)",
    };

    return(
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

                <Drawer {...drawerProps}
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

export function DrawerContent3() {

    const [openLeft, setOpenLeft] = useState(false);
    const [width, setWidth] = useState(300);
    const [noTouchOpen, setNoTouchOpen] = useState(false);
    const [noTouchClose, setNoTouchClose] = useState(false);

    const drawerProps = {
        overlayColor: "rgba(255,255,255,0.6)",
    };

    return(
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

export const MyMakeup = () => {

    return(

        <div style={{backgroundColor: `red`, width: "100%", height: "100%"}}>
            <div style={{width: "100%"}}>
                <ul>
                    <li className="nav_submenu-item">
                        <div className="myImg">
                            <img className="myImg" src="/images/carousel/placeholder1.jpg" alt="logo"/>
                        </div>
                        <h1>Sminke</h1>
                    </li>
                </ul>
            </div>
        </div>

    );
}


export const MyHudpleie = () => {

    return(

        <div style={{backgroundColor: `red`, width: "100%", height: "100%"}}>
            <div style={{width: "100%"}}>
                <ul>
                    <li className="nav_submenu-item">
                        <div className="myImg">
                            <img className="myImg" src="/images/carousel/placeholder1.jpg" alt="logo"/>
                        </div>
                        <h1>fdsfasddsfsdffdfsdasadfssfdsfd</h1>
                    </li>

                </ul>
            </div>
        </div>

    );
}

