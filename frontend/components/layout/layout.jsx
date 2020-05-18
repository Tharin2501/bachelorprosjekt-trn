import React, { useState, useContext, useEffect } from "react"
import Link from "next/link";
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { FiUser } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    Navbar,
    NavbarBrand
} from "reactstrap";
import Cookie from "js-cookie";
import { MyDrawer } from "../MyDrawer";
import { useRouter } from "next/router"
import { calculatePrice } from "../cookieHandler"
import CartTotalPriceContext from "../../components/context/cartTotalPriceContext";
import { Media, MediaContextProvider } from "../media"
const MySearchbar = () => {
    const router = useRouter();
    if (router.pathname === "/hudpleievelger") {
        return (
            null
        )
    } else {
        return (


            <InputGroup className=" w-100  mx-auto">
                <InputGroupAddon addonType="prepend" >
                    <InputGroupText style={{ backgroundColor: "white" }} ><GoSearch alt={"forstørrelsesglass "} /></InputGroupText>
                </InputGroupAddon>
                <Input className="font-weight-light" placeholder="Søk... " />
            </InputGroup>



        );
    }

};

export const MyHeader = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [totalprice, setTotalprice] = useState(0);
    const router = useRouter();

    const { price, ChangeTotalPrice } = useContext(CartTotalPriceContext)
    useEffect(() => {
        getCartPrice()
    }, [[Object.values(price)]])

    const divStyle = {
        backgroundColor: "#e3f2fd",
        margin: '0px',
        padding: '0px'

    };

    function getCartPrice() {
        if (typeof window !== "undefined") {
            var newtotalprice = 0
            var cart = Cookie.getJSON("cartStorage")
            if (cart === undefined) {

                return;
            }

            cart.map((item, i) => {
                newtotalprice += item.quantity * item.price
            })
            setTotalprice(newtotalprice)
        }

    }

    if (router.pathname === "/hudpleievelger") {
        return (
            null
        )

    } else {
        return (
            <MediaContextProvider>
                <Media at="sm">
                    <Navbar style={{ backgroundColor: "#042434" }}>
                        <div className="col-xs mx-auto">
                            <MyDrawer hamburgerIconColor={"white"} />
                        </div>
                        {/* Bilde*/}
                        <div className="col-xs mx-auto ">
                            <a href="/"><img src="../images/logo4.png" alt={"Taxfree.no logo"} className="mt-4 ml-5" width="80px" /></a>
                        </div>
                        {/* Logo*/}
                        <a className="nav-item mx-2 mb-3 " href="favorites"><FaHeart className={"iconsNavbar"} alt={"Hjerte,link til favorittside"} color="white" /></a>
                        <FiUser className={"iconsNavbar"} alt={"Person,link til profil"} color="white" className="mx-2 mb-2" />
                        <div className="">
                            <a className="nav-item" href="shoppingcart"><FaShoppingCart className={"iconsNavbar"} alt={"Handlekurv,link til handlekurv"} className="ml-2 mr-4 mt-3" color="white" /></a>
                            <p style={{ color: "white" }} className="mt-0 mb-0 ml-2">{totalprice}kr</p>
                        </div>
                        {/* Searchbar*/}
                        <div className="col-lg mr-2">
                            <MySearchbar />
                        </div>
                    </Navbar>
                </Media>
                <Media greaterThan="sm">
                    <div>
                        <Navbar style={{ backgroundColor: "#042434" }}>
                            <div className="container-fluid">
                                <NavbarBrand><a href="/" ><img src="../images/logo2.png" className="justify-content-center logoSize" alt={"Taxfree.no logo"} /></a></NavbarBrand>
                                <InputGroup className=" w-50 mx-auto">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText style={{ backgroundColor: "white" }}><GoSearch /></InputGroupText>
                                    </InputGroupAddon>
                                    <Input className="font-weight-light " placeholder="Søk... " />
                                </InputGroup>

                                <div className="mt-4">
                                    <a className="nav-item mr-2 ml-1">< FiUser className={"iconsNavbar"} color="white" /></a>
                                    <a className="nav-item  mt-1 mr-3 ml-3" href="favorites"><FaHeart className={"iconsNavbar"} color="white" /></a>
                                    <a className="nav-item mr-2 ml-1" href="shoppingcart"> <FaShoppingCart className={"iconsNavbar"} color="white" /></a>
                                    <p style={{ color: "white" }} className="ml-5 pl-4 padding-right-2"> {totalprice}kr</p>
                                </div>

                            </div>
                        </Navbar>

                        <div>
                            <nav class="navbar-nav nav-fill navbarColor">
                                <div className={"container-fluid"}>
                                    <div className="row justify-content-center ">


                                        <div className="pt-2 nav-link hamburgerIconMargin">
                                            <MyDrawer hamburgerIconColor={"black"} />
                                        </div>
                                        <div className="text-nowrap col-sm  pt-2 ">
                                            <Link href="artikler">
                                                <a className="nav-link frontpageIconsText">Artikler</a>
                                            </Link>
                                        </div>
                                        <div className="col-sm pt-2" >
                                            <Link href="#">
                                                <a className="nav-link frontpageIconsText ">Tilbud</a>
                                            </Link>
                                        </div>
                                        <div className="col-sm px-2 pt-2 ">
                                            <Link href="merkeside">
                                                <a className="nav-link frontpageIconsText">Merker</a>
                                            </Link>
                                        </div>
                                        <div className="text-nowrap col-sm pt-2">
                                            <Link href="hudpleievelger">
                                                <a className="nav-link frontpageIconsText">Hudpleievelger</a>
                                            </Link>
                                        </div>
                                        <div className="text-nowrap col-sm pt-2">
                                            <Link href="klikkOgHent">
                                                <a className="nav-link frontpageIconsText">Klikk og Hent</a>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </nav>
                        </div>


                    </div>
                </Media >
            </MediaContextProvider >
        );
    }

};


export const NewsLetter = () => {

    const subscribeToNewsletter = () => {

    };

    return (
        <div className="container-fluid newsletter-style">
            <div className="row">
                <div className="col-sm-1">
                </div>
                <div className="col-sm py-5">
                    <h3>Hold deg oppdatert</h3>
                    <div className="w-100 py-1" />
                    <p>Vårt nyhetsbrev gir deg inspirasjon, oppdateringer på våre spesialtilbud og kampanjer</p>
                    <div className="w-100 py-1" />
                </div>

                <div className="col-sm align-self-center">
                    <div>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><AiOutlineMail /></InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Din e-post" />
                        </InputGroup>
                        <div className="w-100 py-1" />
                    </div>


                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="myCheckbox" />
                        <label className="form-check-label" htmlFor="myCheckbox">
                            <p style={{ fontWeight: "bold" }}>
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


export const MyFooter = () => {
    const router = useRouter();
    if (router.pathname === "/hudpleievelger") {
        return (
            null
        )
    } else {
        return (
            <div>
                <NewsLetter>

                </NewsLetter>
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
            </div>
        )
    }

};
