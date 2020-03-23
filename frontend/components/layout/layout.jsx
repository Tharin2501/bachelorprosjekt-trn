import React, {useState, useEffect} from "react"
import Link from "next/link";
import {FaHeart, FaShoppingCart} from 'react-icons/fa';
import {
    Collapse,
    NavbarToggler,
    NavbarBrand,
    Navbar,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input
} from "reactstrap";
import {GiHamburgerMenu} from "react-icons/gi";
import {GoSearch} from "react-icons/go";
import Menu, {SubMenu, Item as MenuItem, Divider} from 'rc-menu';
import "rc-menu/assets/index.css"
import Cookie from "js-cookie";
import MyDrawer from "../MyDrawer";


/*
export const MyHeader = (props) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const [totalprice, setTotalprice] = useState(0);


  useEffect(() => {
    getCartPrice()
  }, [])

  function getCartPrice() {
    if (typeof window !== "undefined") {
      var newtotalprice = 0
      var cart = Cookie.getJSON("cartStorage")
      if (cart === undefined || cart.length === 0) {
        console.log("YAS")
        return;
      }

      cart.map((item, i) => {
        newtotalprice += item.quantity * item.price
      })
      console.log(newtotalprice)
      setTotalprice(newtotalprice)
    }

  }




  return (
    <div>
      <Navbar color="light" light expand="md">
        <div className="mr-auto">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle color="transparent">
              <GiHamburgerMenu />
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
              <Link href="profile"><a title="min profil"><DropdownItem>Dynamisk brukerprofil</DropdownItem></a></Link>
              <DropdownItem divider />
              <Link href="lojalitet"><a title="lojalitet"><DropdownItem>Tax Free and Me</DropdownItem></a></Link>
              <DropdownItem divider />
              <Link href="parfyme"><a title="parfyme"><DropdownItem>Parfyme</DropdownItem></a></Link>
              <DropdownItem divider />
              <Link href="category"><a title="makeup"><DropdownItem>Makeup</DropdownItem></a></Link>
              <DropdownItem divider />
              <Link href="hudpleie"><a title="hudpleie"><DropdownItem>Hudpleie</DropdownItem></a></Link>
              <DropdownItem divider />
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="col-4">
          <a className="nav-item" href="#">Searchbar</a>
        </div>
        <div className="mx-auto">
          <a href="index"><img src="/images/logo.png" width="50px" height="55px" alt="logo" /></a>
        </div>
        <div className="col-2">
          <a className="nav-item" href="favorites"><FaHeart color="black" /></a>
        </div>
        <div className="ml-auto">
          <a className="nav-item" href="shoppingcart"><FaShoppingCart color="black" /></a>
          <p>{totalprice} kr</p>
        </div>
      </Navbar>
      <MySearchbar>

      </MySearchbar>
    </div>
  );
};
*/
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
export const MyHeader = (props) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [totalprice, setTotalprice] = useState(0);


    useEffect(() => {
        getCartPrice()
    }, [])

    function getCartPrice() {
        if (typeof window !== "undefined") {
            var newtotalprice = 0
            var cart = Cookie.getJSON("cartStorage")
            if (cart === undefined || cart.length === 0) {
                console.log("YAS")
                return;
            }

            cart.map((item, i) => {
                newtotalprice += item.quantity * item.price
            })
            console.log(newtotalprice)
            setTotalprice(newtotalprice)
        }

    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light nav-container">

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <MyDrawer/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <div className="menu-container">

                        <ul className="nav__menu">
                            <li className="nav__menu-item">
                                <Link href="#">
                                    <a className="nav-link">Alle produkter</a>
                                </Link>
                                <MySubMenu
                                    firstItem="Parfyme" secondItem="Makeup" thirdItem="Hudpleie"
                                    fourthItem="Hår" fifthItem="Solkrem" sixthItem="Alkohol" seventhItem="Tobakkvare"
                                    eigthItem="Søtsaker" ninthItem="Til Reisen" tenthItem="Mote"
                                />
                            </li>
                            <li className="nav__menu-item">
                                <Link href="#">
                                    <a className="nav-link">Inspirasjon og guider</a>
                                </Link>
                                <MySubMenu/>
                            </li>
                            <li className="nav__menu-item">
                                <Link href="#">
                                    <a className="nav-link">Merker</a>
                                </Link>
                                <MySubMenu/>
                            </li>
                            <li className="nav__menu-item">
                                <Link href="#">
                                    <a className="nav-link">Tilbud</a>
                                </Link>
                                <MySubMenu/>
                            </li>
                            <li className="nav__menu-item">
                                <Link href="#">
                                    <a className="nav-link">Tax Free and Me</a>
                                </Link>
                                <MySubMenu/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <MySearchbar/> */}
        </div>
    );
};

export const MySubMenu = (props) => {
    return (
        <div>
            <ul className="nav__submenu">
                <li className="nav_submenu-item">
                    <h1>{props.firstItem}</h1>
                </li>
                <li className="nav_submenu-item ">
                    <h1>{props.secondItem}</h1>
                </li>
                <li className="nav_submenu-item ">
                    <h1>{props.thirdItem}</h1>
                </li>
                <li className="nav_submenu-item">
                    <h1>{props.fourthItem}</h1>
                </li>
                <li className="nav_submenu-item">
                    <h1>{props.fifthItem}</h1>
                </li>
                <li className="nav_submenu-item">
                    <h1>{props.sixthItem}</h1>
                </li>
                <li className="nav_submenu-item">
                    <h1>{props.seventhItem}</h1>
                </li>
                <li className="nav_submenu-item">
                    <h1>{props.eigthItem}</h1>
                </li>
                <li className="nav_submenu-item">
                    <h1>{props.ninthItem}</h1>
                </li>
                <li className="nav_submenu-item">
                    <h1>{props.tenthItem}</h1>
                </li>
            </ul>
        </div>
    );
};

export const MyFooter = () => (
    <div className="container-fluid">
        <div className="row py-2">
            <div className="col-sm-2">
                <Link href="#">
                    <a className="nav-link">Kontakt oss</a>
                </Link>
            </div>
            <div className="col-sm-2">
                <Link href="#">
                    <a className="nav-link">Om oss</a>
                </Link>
            </div>
            <div className="col-sm-2">
                <Link href="#">
                    <a className="nav-link">FAQ</a>
                </Link>
            </div>
            <div className="col-sm-2">
                <Link href="#">
                    <a className="nav-link">Våre butikker</a>
                </Link>
            </div>
            <div className="col-sm-2">
                <Link href="#">
                    <a className="nav-link">Karriere og ledige stillinger</a>
                </Link>
            </div>
            <div className="col-sm-2">
                <Link href="#">
                    <a className="nav-link">Presse</a>
                </Link>
            </div>
        </div>
        <div className="row px-1">
            <div className="col-lg-sm-6">
                <Link href="#">
                    <a className="nav-link">
                        <img src="/images/trn-logos/heinman_footer.png" width="70px" height="70px" alt="logo"/>
                    </a>
                </Link>
            </div>
            <div className="col-lg-sm-6">
                <Link href="#">
                    <a className="nav-link">
                        <img src="/images/trn-logos/trn_footer.png" width="70px" height="70px" alt="logo"/>
                    </a>
                </Link>
            </div>
        </div>
    </div>
);
{/*
export const MyHeader2 = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
            <a href="#" className="navbar-brand font-weight-bold d-block d-lg-none">MegaMenu</a>
            <button type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbars"
                    aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarContent" className="collapse navbar-collapse">
                <ul className="navbar-nav mx-auto">

                    <li className="nav-item dropdown megamenu"><a id="megamneu" href="" data-toggle="dropdown"
                                                                  aria-haspopup="true" aria-expanded="false"
                                                                  className="nav-link dropdown-toggle font-weight-bold text-uppercase">Mega
                        Menu</a>
                        <div aria-labelledby="megamneu" className="dropdown-menu border-0 p-0 m-0">
                            <div className="container">
                                <div className="row bg-white rounded-0 m-0 shadow-sm">
                                    <div className="col-lg-7 col-xl-8">
                                        <div className="p-4">
                                            <div className="row">
                                                <div className="col-lg-6 mb-4">
                                                    <h6 className="font-weight-bold text-uppercase">MegaMenu
                                                        heading</h6>
                                                    <ul className="list-unstyled">
                                                        <li className="nav-item"><a href=""
                                                                                    className="nav-link text-small pb-0">Unique
                                                            Features</a></li>
                                                        <li className="nav-item"><a href=""
                                                                                    className="nav-link text-small pb-0 ">Image
                                                            Responsive</a></li>
                                                        <li className="nav-item"><a href=""
                                                                                    className="nav-link text-small pb-0 ">Auto
                                                            Carousel</a></li>
                                                        <li className="nav-item"><a href=""
                                                                                    className="nav-link text-small pb-0 ">Newsletter
                                                            Form</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
*/}
