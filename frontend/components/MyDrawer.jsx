import React, {Component} from "react";
import Drawer from 'react-motion-drawer';
import { GiHamburgerMenu } from "react-icons/gi";

export default class MyDrawer extends Component {
    state = {
        openLeft: false,
        openRight: false,
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

    setWidth = e => {
        this.setState({
            width: Number(e.target.value) || e.target.value
        });
    };

    setTouch = e => {
        this.setState({
            [e.target.name]: !e.target.checked
        })
    }

    setDrawerStyle = e => {
        e.preventDefault()
        this.setState({
            drawerStyle: this.drawerStyleRef.value
        })
    }

    render() {
        const {
            drawerStyle: stringDrawerStyle,
            openLeft,
            openRight,
            noTouchOpen,
            noTouchClose
        } = this.state;

        let drawerStyle = {}

        const drawerProps = {
            overlayColor: "rgba(255,255,255,0.6)",
            drawerStyle
        };

        return (
            <div>
                {!openRight &&
                <Drawer
                    {...drawerProps}
                    width={this.state.width}
                    fadeOut
                    open={openLeft}
                    onChange={open => this.setState({ openLeft: open })}
                    noTouchOpen={noTouchOpen}
                    noTouchClose={noTouchClose}
                >
                    {val => {
                        var per = val / 300;
                        return (
                            <div
                                style={{
                                    backgroundColor: `rgba(0, 184, 212, ${per})`,
                                    width: "100%",
                                    height: "100%"
                                }}
                            />
                        );
                    }}
                </Drawer>}

                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper cyan accent-4">
                            <ul className="left">
                                <li style={{ cursor: "pointer", height: "100%" }}>
                                    <a
                                        style={{ padding: 15 }}
                                        className=""
                                        onClick={() =>
                                            this.setState({ openLeft: !openLeft, openRight: false })}
                                    >
                                        <GiHamburgerMenu/>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </div>

            </div>
        );
    }
}
