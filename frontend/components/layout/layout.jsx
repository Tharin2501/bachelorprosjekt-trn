import React, {useState, useContext, useEffect} from "react"
import Link from "next/link";
import {FaHeart, FaShoppingCart} from 'react-icons/fa';
import {FiUser} from "react-icons/fi";
import {GoSearch} from "react-icons/go";
import {AiOutlineMail} from "react-icons/ai";
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
  Input,
} from "reactstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';

import Cookie from "js-cookie";
import { MyDrawer } from "../MyDrawer";
import { useRouter } from "next/router"
/* import CartTotalPriceContext from "../../components/context/cartTotalPriceContext"; */
import { calculatePrice } from "../cookieHandler"
const MySearchbar = () => {
    const router = useRouter();
    if (router.pathname === "/hudpleievelger") {
        return (
            null
        )
    } else {
        return (
            <div className="row mr-5 ">
                <div className="col ">
                    <InputGroup className="p-0">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText style={{backgroundColor:"white"}}><GoSearch/></InputGroupText>
                        </InputGroupAddon>
                        <Input className="font-weight-light "  placeholder="Søk... "/>
                    </InputGroup>
                </div>
            </div>

        );
    }

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
        //console.log("YAS")
        return;
      }

      cart.map((item, i) => {
        newtotalprice += item.quantity * item.price
      })
      //console.log(newtotalprice)
      setTotalprice(newtotalprice)
    }

  }

    {/*
    return (

        <div>

            <Navbar color="light">

                {   <div className="float-left mt-5">
                    <a href="/" ><img src="../images/logo4.png"  width="70px" alt="logo"/></a>
                </div>
                <MySearchbar/>
                <a className=" nav-item  mb-3 mr-5" href="favorites"><FaHeart color="black"/></a>
                <a className="nav-item mr-5" href="favorites"><FaShoppingCart className="ml-2 mr-4 mt-3" color="black"/></a>
                <p className="mt-0 mb-0 mr-5">{totalprice}kr</p>
                <FiUser className=" mb-2 mr-5"/>

                {/*}
                <a className=" nav-item  mb-3 mr-5" href="favorites"><FaHeart color="black"/></a>
                <a className="nav-item mr-5" href="favorites"><FaShoppingCart className="ml-2 mr-4 mt-3" color="black"/></a>
                <p className="mt-0 mb-0 ml-2">{totalprice}kr</p>
                <FiUser className=" mb-2 mr-5"/>


            </Navbar>
            <SecondNav/>
        </div>


    );
*/}
    return (
        <Navbar color="light">

            {/* Bilde leg i samme komponent som searchbar?*/}
            <div className="">
                <a href="/"><img src="../images/logo4.png" className="mt-4 ml-5" width="70px" alt="logo" /></a>
            </div>
            <div className="col-10 mr-2">
                <MySearchbar />
            </div>
            {/* Logo*/}
            <div className="">
                <a className="nav-item mr-2" href="shoppingcart"><FaShoppingCart className="ml-2 mr-4 mt-3" color="black" /></a>
                <p className="mt-0 mb-0 ml-2">{totalprice}kr</p>
            </div>

            <a className="nav-item  mb-3 p-1 mr-3" href="favorites"><FaHeart color="black" /></a>

            <FiUser className=" nav-item  mb-2" />

            {/* Searchbar*/}

        </Navbar>
    );
};

export const SecondNav = () => {
    return(
        <div>
            <Navbar color="light">

                <div className="col-xs mr-5">
                    <MyDrawer/>
                </div>
                <a className="col-xs" href="#">
                    Alle produkter
                </a>
                <a className="col-xs" href="#">
                    Inspirasjon og guider
                </a>
                <a className="col-xs" href="#">
                    Merker
                </a>
                <a className="col-xs" href="#">
                    Tilbud
                </a>
                <a className="col-xs mr-3" href="#">
                    Klikk og hent
                </a>

                <a className="col-xs nav-item ml-5" href="favorites">Tax free & me</a>
                <a className="col-xs mr-4" href="#"> Kvote og kundeservice</a>

            </Navbar>
        </div>
    )
}


export const NewsLetter = () => {

    const subscribeToNewsletter = () => {
        // register input from inputfield + check if checkbox is checked. Presist email to db
        //console.log("Subscribe to newsletter here")
    };

    return (
        <div className="container-fluid newsletter-style">
            <div className="row">
                <div className="col-sm-1">
                </div>
                <div className="col-sm py-5">
                    <h3>Hold deg oppdatert</h3>
                    <div className="w-100 py-1"/>
                    <p>Vårt nyhetsbrev gir deg inspirasjon, oppdateringer på våre spesialtilbud og kampanjer</p>
                    <div className="w-100 py-1"/>
                </div>

                <div className="col-sm align-self-center">
                    <div>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><AiOutlineMail/></InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Din e-post"/>
                        </InputGroup>
                        <div className="w-100 py-1"/>
                    </div>


                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="myCheckbox"/>
                        <label className="form-check-label" htmlFor="myCheckbox">
                            <p style={{fontWeight: "bold"}}>
                                Ja, jeg har lest og godkjent
                                <Link href="#">
                  <a className="link-to-condition"> betingelsene</a>
                </Link>
              </p>
            </label>
          </div>
        </div>

        <div className="col-sm pt-1 align-self-center mb-4">
          <button className="newsletter-btn" onClick={subscribeToNewsletter}>
            Meld meg på!
                    </button>
          <div className="w-100 py-3" />
        </div>
      </div>
    </div>
  );
};


export const MyFooter = () => (
  <div className="container-fluid footer-style pt-2">
    <div className="py-2">
      <img src="/images/trn-logos/heinman_footer.png" width="70px" height="70px" alt="logo" />
    </div>
    <div className="row py-2 px-2">
      <div className="col-sm-3">
        {/* Åpningstider*/}
        <h3 className="footer-color">Åpningstider</h3>
        <div className="w-100 py-2" />
        <p>Duty-Free butikkene er alltid åpne.</p>
        <Link href="#"><a className="footer-color">Se våre åpningstider her.</a></Link>
        <div className="w-100 py-4" />

        {/* Telefon*/}
        <h3 className="footer-color">Telefon</h3>
        <p className="footer-color">+47 32 23 09 00</p>
        <div className="w-100 py-2" />
        <p>
          Kontakt oss i tidsrommet mandag til fredag 08:00 til 16:00, med unntak av helligdager.
                </p>
        <div className="w-100 py-1" />
      </div>
      {/* Snarveier */}
      <div className="col-sm-3">
        <h3 className="footer-color">Snarveier</h3>
        <div className="w-100 py-2" />
        <Link href="#">
          <a className="footer-color">Kvote</a>
        </Link>
        <div className="w-100 py-2" />
        <Link href="#">
          <a className="footer-color">Produkter</a>
        </Link>
        <div className="w-100 py-2" />
        <Link href="#">
          <a className="footer-color">Klikk og hent</a>
        </Link>
        <div className="w-100 py-2" />
        <Link href="#">
          <a className="footer-color">Tilbud</a>
        </Link>
        <div className="w-100 py-2" />
        <Link href="#">
          <a className="footer-color">Tips og Trender</a>
        </Link>
        <div className="w-100 py-2" />
      </div>
      {/* Informasjon*/}
      <div className="col-sm-3">
        <h3 className="footer-color">Informasjon</h3>
        <div className="w-100 py-2" />
        <Link href="#">
          <a className="footer-color">Kundeservice</a>
        </Link>
        <div className="w-100 py-2" />
        <Link href="#">
          <a className="footer-color">Ofte stillte spørsmål</a>
        </Link>
        <div className="w-100 py-2" />
        <Link href="#">
          <a className="footer-color">Reklamasjoner og retur</a>
        </Link>
        <div className="w-100 py-2" />
      </div>
      {/* Om Oss*/}
      <div className="col-sm-3">
        <h3 className="footer-color">Om Oss</h3>
        <div className="w-100 py-2" />
        <Link href="#">
          <a className="footer-color">Kontakt oss</a>
        </Link>
        <div className="w-100 py-2" />
        <Link href="#">
          <a className="footer-color">Om oss</a>
        </Link>
        <div className="w-100 py-2" />
        <Link href="#">
          <a className="footer-color">Våre butikker</a>
        </Link>
        <div className="w-100 py-2" />
        <Link href="#">
          <a className="footer-color">Karriere og ledige stillinger</a>
        </Link>
        <div className="w-100 py-2" />
        <Link href="#">
          <a className="footer-color">Presse</a>
        </Link>
      </div>
    </div>

  </div>
);
