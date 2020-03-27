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
import {MyDrawer} from "../MyDrawer";


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
      //console.log(newtotalprice)
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

export const MyHeader = () => {

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
            <Navbar color="light">
                <div>
                    <MyDrawer/>
                </div>
                <div className="row mx-auto">
                    <a href="index"><img src="/images/logo.png" width="50px" height="55px" alt="logo"/></a>
                </div>
                <div className="row ml-auto">
                    <div className="col">
                        <a className="nav-item" href="favorites"><FaHeart color="black"/></a>
                    </div>
                    <div className="col">
                        profil
                    </div>
                    <div className="col">
                        <a className="nav-item" href="shoppingcart"><FaShoppingCart color="black "/></a>
                        <p>{totalprice}kr</p>
                    </div>
                </div>
            </Navbar>
            <MySearchbar>

            </MySearchbar>
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

export const MyFooter2 = () => (
    <div className="container-fluid footer-style">
        <div className="py-2">
            <img src="/images/trn-logos/heinman_footer.png" width="70px" height="70px" alt="logo"/>
        </div>
        <div className="row py-2 px-2">
            <div className="col-sm-3">
                {/* Åpningstider*/}
                <h3 className="footer-color">Åpningstider</h3>
                <div className="w-100 py-2"></div>
                <a>Duty-Free butikkene er alltid åpne.</a>
                <div className="w-100 py-1"></div>
                <Link href="#"><a className="footer-color">Se våre åpningstider her.</a></Link>
                <div className="w-100 py-4"></div>

                {/* Telefon*/}
                <h3 className="footer-color">Telefon</h3>
                <a className="footer-color">+47 32 23 09 00</a>
                <div className="w-100 py-2"></div>
                <a>
                    Kontakt oss i tidsrommet mandag til fredag 08:00 til 16:00, med unntak av helligdager.
                </a>
                <div className="w-100 py-2"></div>
            </div>
            {/* Snarveier */}
            <div className="col-sm-3">
                <h3 className="footer-color">Snarveier</h3>
                <div className="w-100 py-2"></div>
                <Link href="#">
                    <a className="footer-color">Kvote</a>
                </Link>
                <div className="w-100 py-2"></div>
                <Link href="#">
                    <a className="footer-color">Produkter</a>
                </Link>
                <div className="w-100 py-2"></div>
                <Link href="#">
                    <a className="footer-color">Klikk og hent</a>
                </Link>
                <div className="w-100 py-2"></div>
                <Link href="#">
                    <a className="footer-color">Tilbud</a>
                </Link>
                <div className="w-100 py-2"></div>
                <Link href="#">
                    <a className="footer-color">Tips og Trender</a>
                </Link>
                <div className="w-100 py-2"></div>
            </div>
            {/* Informasjon*/}
            <div className="col-sm-3">
                <h3 className="footer-color">Informasjon</h3>
                <div className="w-100 py-2"></div>
                <Link href="#">
                    <a className="footer-color">Kundeservice</a>
                </Link>
                <div className="w-100 py-2"></div>
                <Link href="#">
                    <a className="footer-color">Ofte stillte spørsmål</a>
                </Link>
                <div className="w-100 py-2"></div>
                <Link href="#">
                    <a className="footer-color">Reklamasjoner og retur</a>
                </Link>
                <div className="w-100 py-2"></div>
            </div>
            {/* Om Oss*/}
            <div className="col-sm-3">
                <h3 className="footer-color">Om Oss</h3>
                <div className="w-100 py-2"></div>
                <Link href="#">
                    <a className="footer-color">Kontakt oss</a>
                </Link>
                <div className="w-100 py-2"></div>
                <Link href="#">
                    <a className="footer-color">Om oss</a>
                </Link>
                <div className="w-100 py-2"></div>
                <Link href="#">
                    <a className="footer-color">Våre butikker</a>
                </Link>
                <div className="w-100 py-2"></div>
                <Link href="#">
                    <a className="footer-color">Karriere og ledige stillinger</a>
                </Link>
                <div className="w-100 py-2"></div>
                <Link href="#">
                    <a className="footer-color">Presse</a>
                </Link>
            </div>
        </div>

    </div>
);

