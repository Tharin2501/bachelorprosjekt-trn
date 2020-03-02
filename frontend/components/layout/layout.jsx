import React, {useState} from "react"
import Link from "next/link";
import {FaHeart, FaShoppingCart} from 'react-icons/fa';
import {Navbar, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
import {GiHamburgerMenu} from "react-icons/gi";

export const MyHeader = (props) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <div className="mr-auto">
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle color="transparent">
                            <GiHamburgerMenu/>
                        </DropdownToggle>
                        <DropdownMenu modifiers={{
                            setModifiers: {
                                enabled: true,
                                fn: (data) => {
                                    return {
                                        ...data,
                                        styles: {
                                            ...data.styles,
                                            overflow: 'auto',
                                            minHeight: "500px",
                                            minWidth: "500px"
                                        },
                                    };
                                },
                            },
                        }}
                        >
                            <h5>Alle Kategorier</h5>
                            <DropdownItem>DIOR</DropdownItem><DropdownItem divider/>
                            <DropdownItem>DIOR</DropdownItem><DropdownItem divider/>
                            <DropdownItem>DIOR</DropdownItem><DropdownItem divider/>
                            <DropdownItem>DIOR</DropdownItem><DropdownItem divider/>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className="col-4">
                    <a className="nav-item" href="#">Searchbar</a>
                </div>
                <div className="mx-auto">
                    <img src="/images/logo.png" width="50px" height="55px" alt="logo"/>
                </div>
                <div className="col-2">
                    <a className="nav-item" href="#"><FaHeart color="black"/></a>
                </div>
                <div className="ml-auto">
                    <a className="nav-item" href="handlekurv"><FaShoppingCart color="black"/></a>
                </div>
            </Navbar>
        </div>
    );
};

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
