import React, {useState} from "react"
import Link from "next/link";
import {FaHeart, FaShoppingCart} from 'react-icons/fa';
import {GiHamburgerMenu} from "react-icons/gi";
import {GoSearch} from "react-icons/go";
import {Navbar} from "reactstrap";
import {InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';
import Menu, {SubMenu, Item as MenuItem, Divider} from 'rc-menu';
import "rc-menu/assets/index.css"

export const MyHeader = (props) => {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                <Navbar light expand="md">
                    <div className="col-sm-lg-4 mr-auto pt-1">
                        <MyDropDown width="50px"/>
                    </div>
                    <div className="col-sm-lg-4 mx-auto pt-1">
                        <img src="/images/logo.png" width="50px" alt="logo"/>
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

    <SubMenu title={<span className="submenu-title-wrapper"><GiHamburgerMenu/></span>} popupOffset={[10, 15]}>
        {/* Menu 1/2 */}
        <MenuItem><Link href="profile"><a title="profil">Dynamisk brukernavn etterpå</a></Link></MenuItem>
        <Divider/>
        {/* Menu 2/2 */}
        <MenuItem key="4-1"><Link href="lojalitet"><a title="lojalitet">Tax Free and Me</a></Link></MenuItem>
        <Divider/>
        {/* Submenu 1/3 */}
        <SubMenu title={<span className="submenu-title-wrapper"><Link href="parfyme"><a title="parfyme">Parfyme</a></Link></span>}>
            <SubMenu title={<span className="submenu-title-wrapper">Dame</span>} key="4-2-2">
                <MenuItem key="4-2-2-1">Parfyme</MenuItem>
                <Divider/>
                <MenuItem key="4-2-2-2">Deodorant</MenuItem>
            </SubMenu>
            <Divider/>
            <SubMenu title={<span className="submenu-title-wrapper">Herre</span>}>
                <MenuItem key="4-2-2-1">Parfyme</MenuItem>
                <Divider/>
                <MenuItem key="4-2-2-2">Deodorant</MenuItem>
            </SubMenu>
        </SubMenu>
        <Divider/>
        {/* Submenu 2/3 */}
        <SubMenu title={<span className="submenu-title-wrapper"><Link href="makeup"><a title="Makeup">Makeup</a></Link></span>}>
            <SubMenu title={<span className="submenu-title-wrapper">Ansikt</span>} key="4-2-2">
                <MenuItem key="4-2-2-1">Parfyme</MenuItem>
                <Divider/>
                <MenuItem key="4-2-2-2">Deodorant</MenuItem>
            </SubMenu>
            <Divider/>
            <SubMenu title={<span className="submenu-title-wrapper">Øyne</span>}>
                <MenuItem key="4-2-2-1">X</MenuItem>
                <Divider/>
                <MenuItem key="4-2-2-2">Y</MenuItem>
            </SubMenu>
            <Divider/>
            <SubMenu title={<span className="submenu-title-wrapper">Lepper</span>}>
                <MenuItem key="4-2-2-1">X</MenuItem>
                <Divider/>
                <MenuItem key="4-2-2-2">Y</MenuItem>
            </SubMenu>
            <Divider/>
        </SubMenu>
        <Divider/>
        {/* Submenu 3/3 */}
        <SubMenu title={<span className="submenu-title-wrapper"><Link href="hudpleie"><a title="hudpleie">Hudpleie</a></Link></span>}>
            <SubMenu title={<span className="submenu-title-wrapper">Ansikt</span>} key="4-2-2">
                <MenuItem key="4-2-2-1">X</MenuItem>
                <Divider/>
                <MenuItem key="4-2-2-2">Y</MenuItem>
            </SubMenu>
            <Divider/>
            <SubMenu title={<span className="submenu-title-wrapper">Kropp</span>}>
                <MenuItem key="4-2-2-1">X</MenuItem>
                <Divider/>
                <MenuItem key="4-2-2-2">Y</MenuItem>
            </SubMenu>
            <Divider/>
            <SubMenu title={<span className="submenu-title-wrapper">Hender og Føtter</span>}>
                <MenuItem key="4-2-2-1">X</MenuItem>
                <Divider/>
                <MenuItem key="4-2-2-2">Y</MenuItem>
            </SubMenu>
            <Divider/>
        </SubMenu>
    </SubMenu>
);

const CommonMenu = ({triggerSubMenuAction,mode,openAnimation,defaultOpenKeys}) => {

    const Mychildren = [nestSubMenu];

    const [children, setChildren] = useState(Mychildren);

        return (
            <div>
                <Menu
                    triggerSubMenuAction={triggerSubMenuAction}
                    selectedKeys={['3']}
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
                <div className="w-100 d-none d-block"></div>
                <div className="col-2">
                    <Link href="#">
                        <a className="nav-link">Om oss</a>
                    </Link>
                </div>
                <div className="w-100 d-none d-block"></div>
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
            <div className="col-lg-sm-6 px-3">
                <Link href="parfyme">
                    <a className="nav-link"><img  src="/images/parfyme.png" alt="logo"/></a>
                </Link>
            </div>
            <div className="col-lg-sm-6 px-3">
                <Link href="makeup">
                    <a className="nav-link"><img src="/images/makeup.png" alt="logo"/></a>
                </Link>
            </div>
        </div>
    </div>
);
