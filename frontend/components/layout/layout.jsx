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
import Cookie from "js-cookie";
import {MyDrawer} from "../MyDrawer";
import {useRouter} from "next/router"
import CartTotalPriceContext from "../../components/context/cartTotalPriceContext";
import {calculatePrice} from "../cookieHandler"

const MySearchbar = () => {
    const router = useRouter();
    if (router.pathname === "/hudpleievelger") {
        return (
            null
        )
    } else {
        return (
            <div className="row mx-auto w-80 pt-3 pb-3">
                <div className="col">

                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><GoSearch/></InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Søk... "/>
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


    const {price, ChangeTotalPrice} = useContext(CartTotalPriceContext)
    useEffect(() => {
        getCartPrice();

    }, [Object.values(price)])

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


    return (
        <Navbar color="light">
            <div className="col-xs ml-1">
                <MyDrawer/>
            </div>
            {/* Bilde*/}
            <div className="col-xs-sm mx-auto ml-5">
                <a href="index"><img src="../images/logo4.png" className="mt-4 ml-5 " width="50px" height="55px" alt="logo"/></a>
            </div>
            {/* Logo*/}
            <a className="nav-item mx-3 mb-3" href="favorites"><FaHeart color="black"/></a>
            <FiUser className="mx-2 mb-2"/>
            <div className="">
                <a className="nav-item" href="favorites"><FaShoppingCart className="ml-3 mr-4 mt-3" color="black"/></a>
                <p className="mt-0 mb-0 ml-3">{totalprice}kr</p>
            </div>
            {/* Searchbar*/}
            <div className="col-xs mr-3">
                <MySearchbar/>
            </div>
        </Navbar>
    );
};


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
                                    <a> betingelsene</a>
                                </Link>
                            </p>
                        </label>
                    </div>
                </div>

                <div className="col-sm pt-1 align-self-center mb-4">
                    <button className="newsletter-btn" onClick={subscribeToNewsletter}>
                        Meld meg på!
                    </button>
                    <div className="w-100 py-3"/>
                </div>
            </div>
        </div>
    );
};


export const MyFooter = () => (
    <div className="container-fluid footer-style pt-2">
        <div className="py-2">
            <img src="/images/trn-logos/heinman_footer.png" width="70px" height="70px" alt="logo"/>
        </div>
        <div className="row py-2 px-2">
            <div className="col-sm-3">
                {/* Åpningstider*/}
                <h3 className="footer-color">Åpningstider</h3>
                <div className="w-100 py-2"/>
                <p>Duty-Free butikkene er alltid åpne.</p>
                <Link href="#"><a className="footer-color">Se våre åpningstider her.</a></Link>
                <div className="w-100 py-4"/>

                {/* Telefon*/}
                <h3 className="footer-color">Telefon</h3>
                <p className="footer-color">+47 32 23 09 00</p>
                <div className="w-100 py-2"/>
                <p>
                    Kontakt oss i tidsrommet mandag til fredag 08:00 til 16:00, med unntak av helligdager.
                </p>
                <div className="w-100 py-1"/>
            </div>
            {/* Snarveier */}
            <div className="col-sm-3">
                <h3 className="footer-color">Snarveier</h3>
                <div className="w-100 py-2"/>
                <Link href="#">
                    <a className="footer-color">Kvote</a>
                </Link>
                <div className="w-100 py-2"/>
                <Link href="#">
                    <a className="footer-color">Produkter</a>
                </Link>
                <div className="w-100 py-2"/>
                <Link href="#">
                    <a className="footer-color">Klikk og hent</a>
                </Link>
                <div className="w-100 py-2"/>
                <Link href="#">
                    <a className="footer-color">Tilbud</a>
                </Link>
                <div className="w-100 py-2"/>
                <Link href="#">
                    <a className="footer-color">Tips og Trender</a>
                </Link>
                <div className="w-100 py-2"/>
            </div>
            {/* Informasjon*/}
            <div className="col-sm-3">
                <h3 className="footer-color">Informasjon</h3>
                <div className="w-100 py-2"/>
                <Link href="#">
                    <a className="footer-color">Kundeservice</a>
                </Link>
                <div className="w-100 py-2"/>
                <Link href="#">
                    <a className="footer-color">Ofte stillte spørsmål</a>
                </Link>
                <div className="w-100 py-2"/>
                <Link href="#">
                    <a className="footer-color">Reklamasjoner og retur</a>
                </Link>
                <div className="w-100 py-2"/>
            </div>
            {/* Om Oss*/}
            <div className="col-sm-3">
                <h3 className="footer-color">Om Oss</h3>
                <div className="w-100 py-2"/>
                <Link href="#">
                    <a className="footer-color">Kontakt oss</a>
                </Link>
                <div className="w-100 py-2"/>
                <Link href="#">
                    <a className="footer-color">Om oss</a>
                </Link>
                <div className="w-100 py-2"/>
                <Link href="#">
                    <a className="footer-color">Våre butikker</a>
                </Link>
                <div className="w-100 py-2"/>
                <Link href="#">
                    <a className="footer-color">Karriere og ledige stillinger</a>
                </Link>
                <div className="w-100 py-2"/>
                <Link href="#">
                    <a className="footer-color">Presse</a>
                </Link>
            </div>
        </div>

    </div>
);
