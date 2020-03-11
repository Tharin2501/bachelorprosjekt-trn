import React, {useState} from "react"
import Link from "next/link";
import {FaHeart, FaShoppingCart} from 'react-icons/fa';
import {GiHamburgerMenu} from "react-icons/gi";
import {GoSearch} from "react-icons/go";
import {Navbar, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
import {InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';
import Menu, {SubMenu, Item as MenuItem, Divider} from 'rc-menu';
import "rc-menu/assets/index.css"

export const MyHeader = (props) => {

    {/*
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    */}

    return (
        <div className="row">
            <div className="col">
                <Navbar light expand="md">
                    <MyDropDown/>
                    {/*
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
                                                minWidth: "50%"
                                            },
                                        };
                                    },
                                },
                            }}
                            >
                                <DropdownItem header><span>Alle produkter</span></DropdownItem>
                                <Link href="profile"><a title="profil"><MyMultiDropDown name="Dynamisk brukernavn etterpå"/></a></Link>
                                <Link href="lojalitet"><a title="lojalitet"><MyMultiDropDown name ="Tax Free and Me"/></a></Link>
                                <Link href="parfyme"><a title="parfyme"><MyMultiDropDown name ="Parfyme"/></a></Link>
                                <Link href="makeup"><a title="makeup"><MyMultiDropDown name ="Makeup"/></a></Link>
                                <Link href="hudpleie"><a title="hudpleie"><MyMultiDropDown name ="Hudpleie"/></a></Link>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    */}
                    {/* mx-auto -> margin-left and margin-right: auto. Center an element .*/}
                    <div className="mx-auto">
                        <img src="/images/logo.png" width="50px" height="55px" alt="logo"/>
                    </div>
                    {/*
                <div className="col-2">
                    <a className="nav-item" href="#"><FaHeart color="black"/></a>
                </div>
                */}
                    <div className="ml-auto">
                        <a className="nav-item" href="handlekurv"><FaShoppingCart color="black"/></a>
                    </div>
                </Navbar>
                <MySearchbar/>
            </div>
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

/*
class CommonMenu extends React.Component {
    state={
        children: Mychildren
    }

    render() {
        const { triggerSubMenuAction } = this.props;
        const { children} = this.state;
        return (
            <div>
                <Menu
                    triggerSubMenuAction={triggerSubMenuAction}
                    selectedKeys={['3']}
                    mode={this.props.mode}
                    openAnimation={this.props.openAnimation}
                    defaultOpenKeys={this.props.defaultOpenKeys}
                >
                    {children}
                </Menu>
            </div>
        );
    }
}
*/

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

{/*
export const MyMultiDropDown = (props) => {

    const myName = <div>{props.name}</div>;

    const leftMenu = (
        <Menu>
            <SubMenu title={myName}>
                <MenuItem><Link href="lojalitet"><a title="lojalitet">{props.name}</a></Link></MenuItem>
                <MenuItem>second</MenuItem>
            </SubMenu>
        </Menu>
    );
    return (
        <div>
            <div style={{width: "100%"}}>{leftMenu}</div>
        </div>
    );
};
*/}

export const MyFooter = () => (
    <div className="container fixed-bottom">
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
