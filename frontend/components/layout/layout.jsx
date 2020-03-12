import React, {useState} from "react"
import Link from "next/link";
import {FaHeart, FaShoppingCart} from 'react-icons/fa';
import {GiHamburgerMenu} from "react-icons/gi";
import {GoSearch} from "react-icons/go";
import {Navbar} from "reactstrap";
import {InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';
import Menu, {SubMenu, Item as MenuItem, Divider} from 'rc-menu';
import "rc-menu/assets/index.css"

export const MyHeader = () => {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <Navbar light expand="md">
                        <div className="col-sm-lg-4 mr-auto pt-1">
                            <MyDropDown width="50px"/>
                        </div>
                        <div className="col-sm-lg-4 mx-auto pt-1">
                            <img src="/images/trn-logos/trn_header.png" width="125px" height="62px" alt="logo"/>
                        </div>
                        <div className="col-sm-lg-4 ml-auto pt-1">
                            <a className="nav-item" href="handlekurv"><FaShoppingCart color="black" width="50px"/></a>
                        </div>
                    </Navbar>
                </div>
            </div>
            <MySearchbar/>
        </div>
    );
};

const nestSubMenu = (

    <SubMenu title={<span className="submenu-title-wrapper"><GiHamburgerMenu/></span>} key="4" popupOffset={[10, 15]}>
        {/* Menu 1/2 */}
        <MenuItem><Link href="profile"><a title="profil">Dynamisk brukernavn etterpå</a></Link></MenuItem>
        <Divider/>
        {/* Menu 2/2 */}
        <MenuItem><Link href="lojalitet"><a title="lojalitet">Tax Free and Me</a></Link></MenuItem>
        <Divider/>
        {/* Submenu 1/3 */}
        <SubMenu title={<span className="submenu-title-wrapper">
            <Link href="parfyme">
                <a title="parfyme">Parfyme</a>
            </Link>
        </span>}>
            <SubMenu title={<span className="submenu-title-wrapper">Dame</span>}>
                <MenuItem>Parfyme</MenuItem>
                <Divider/>
                <MenuItem>Deodorant</MenuItem>
            </SubMenu>
            <Divider/>
            <SubMenu title={<span className="submenu-title-wrapper">Herre</span>}>
                <MenuItem>Parfyme</MenuItem>
                <Divider/>
                <MenuItem>Deodorant</MenuItem>
            </SubMenu>
        </SubMenu>
        <Divider/>
        {/* Submenu 2/3 */}
        <SubMenu title={<span className="submenu-title-wrapper">
            <Link href="makeup">
                <a title="Makeup">Makeup</a>
            </Link>
        </span>}>
            <SubMenu title={<span className="submenu-title-wrapper">Ansikt</span>}>
                <MenuItem>Parfyme</MenuItem>
                <Divider/>
                <MenuItem>Deodorant</MenuItem>
            </SubMenu>
            <Divider/>
            <SubMenu title={<span className="submenu-title-wrapper">Øyne</span>}>
                <MenuItem>X</MenuItem>
                <Divider/>
                <MenuItem>Y</MenuItem>
            </SubMenu>
            <Divider/>
            <SubMenu title={<span className="submenu-title-wrapper">Lepper</span>}>
                <MenuItem>X</MenuItem>
                <Divider/>
                <MenuItem>Y</MenuItem>
            </SubMenu>
            <Divider/>
        </SubMenu>
        <Divider/>
        {/* Submenu 3/3 */}
        <SubMenu title={<span className="submenu-title-wrapper">
            <Link href="hudpleie">
                <a title="hudpleie">Hudpleie</a>
            </Link>
        </span>}>
            <SubMenu title={<span className="submenu-title-wrapper">Ansikt</span>}>
                <MenuItem>X</MenuItem>
                <Divider/>
                <MenuItem>Y</MenuItem>
            </SubMenu>
            <Divider/>
            <SubMenu title={<span className="submenu-title-wrapper">Kropp</span>}>
                <MenuItem>X</MenuItem>
                <Divider/>
                <MenuItem>Y</MenuItem>
            </SubMenu>
            <Divider/>
            <SubMenu title={<span className="submenu-title-wrapper">Hender og Føtter</span>}>
                <MenuItem>X</MenuItem>
                <Divider/>
                <MenuItem>Y</MenuItem>
            </SubMenu>
            <Divider/>
        </SubMenu>
    </SubMenu>
);

const CommonMenu = ({triggerSubMenuAction, mode, openAnimation, defaultOpenKeys}) => {

    const Mychildren = [nestSubMenu];

    const [children, setChildren] = useState(Mychildren);

    return (
        <div>
            <Menu
                triggerSubMenuAction={triggerSubMenuAction}
                mode={mode}
                openAnimation={openAnimation}
                defaultOpenKeys={defaultOpenKeys}
            >
                {children}
            </Menu>
        </div>
    );
};


const horizontalMenu = (
    <CommonMenu
        mode="horizontal"
        // use openTransition for antd
        openAnimation="slide-up"
        triggerSubMenuAction="click"
    />
);

export const MyDropDown = () => {
    return (
        <div>{horizontalMenu}</div>
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
    <div className="container-fluid">
        <div className="row align-items-start py-3">
            <div className="col-2">
                <Link href="#">
                    <a className="nav-link">Kontakt oss</a>
                </Link>
            </div>
            <div className="w-100 d-none d-block"/>
            <div className="col-2">
                <Link href="#">
                    <a className="nav-link">Om oss</a>
                </Link>
            </div>
            <div className="w-100 d-none d-block"/>
            <div className="col-2">
                <Link href="#">
                    <a className="nav-link">FAQ</a>
                </Link>
            </div>
            <div className="w-100 d-none d-block"/>
            <div className="col-2">
                <Link href="#">
                    <a className="nav-link">Våre butikker</a>
                </Link>
            </div>
            <div className="w-100 d-none d-block"/>
            <div className="col-2">
                <Link href="#">
                    <a className="nav-link">Karriere og ledige stillinger</a>
                </Link>
            </div>
            <div className="w-100 d-none d-block"/>
            <div className="col-2">
                <Link href="#">
                    <a className="nav-link">Presse</a>
                </Link>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-sm-6">
                <Link href="parfyme">
                    <a className="nav-link">
                        <img src="/images/trn-logos/trn_footer.png" width="70px" height="70px" alt="logo"/>
                    </a>
                </Link>
            </div>
            <div className="col-lg-sm-6">
                <Link href="makeup">
                    <a className="nav-link">
                        <img src="/images/trn-logos/trn_footer.png" width="70px" height="70px" alt="logo"/>
                    </a>
                </Link>
            </div>
        </div>
    </div>
);
