
import React, { useState, useEffect } from "react"
import Link from "next/link";
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Navbar, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSearch } from "react-icons/go";

import Cookie from "js-cookie";

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

const MySearchbar = () => {
  return (
    <div className="row mx-auto w-80 pt-3 pb-3">
      <div className="col">

        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText><GoSearch /></InputGroupText>
          </InputGroupAddon>
          <Input placeholder="søk..." />
        </InputGroup>
      </div>
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
