import React, {useState} from "react"
import Link from "next/link";
import {FaHeart, FaShoppingCart} from 'react-icons/fa';
import {GiHamburgerMenu} from "react-icons/gi";
import {GoSearch} from "react-icons/go";
import {Navbar, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
import {InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';

export const MyHeader = (props) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div className="row">
            <div className="col">
                <Navbar light expand="md">
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
                                <DropdownItem header>Alle produkter</DropdownItem>
                                <Link href="profil"><a title="min profil"><DropdownItem>Dynamisk
                                    brukerprofil</DropdownItem></a></Link>
                                <DropdownItem divider/>
                                <Link href="lojalitet"><a title="lojalitet"><DropdownItem>Tax Free and Me</DropdownItem></a></Link>
                                <DropdownItem divider/>
                                <Link href="parfyme"><a title="parfyme"><DropdownItem>Parfyme</DropdownItem></a></Link>
                                <DropdownItem divider/>
                                <Link href="makeup"><a title="makeup"><DropdownItem>Makeup</DropdownItem></a></Link>
                                <DropdownItem divider/>
                                <Link href="hudpleie"><a
                                    title="hudpleie"><DropdownItem>Hudpleie</DropdownItem></a></Link>
                                <DropdownItem divider/>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    {/* mx-auto -> margin-left and margin-right: auto. Center an element .*/}
                    <div className="mx-auto">
                        <img src="/images/logo.png" width="50px" height="55px" alt="logo"/>
                    </div>
                    {/*
                <div className="col-2">
                    <a className="nav-item" href="#"><FaHeart color="black"/></a>
                </div>
                */}
                    {/* ml-auto -> margin-left: auto which aligns an element to the right.*/}
                    <div className="ml-auto">
                        <a className="nav-item" href="handlekurv"><FaShoppingCart color="black"/></a>
                    </div>
                </Navbar>
                <MySearchbar/>
            </div>
        </div>
    );
};

const MySearchbar = () => {
    return (
        <div className="row mx-auto w-80 pt-3 pb-3">
            <div className="col">
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText><GoSearch/></InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="søk..."/>
                </InputGroup>
            </div>
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
