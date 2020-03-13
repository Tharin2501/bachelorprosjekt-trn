import React, { useState } from "react";
import Link from "next/link";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import {
  Navbar,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { GiHamburgerMenu } from "react-icons/gi";

export const MyHeader = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <div className="mr-auto">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle color="transparent">
              <GiHamburgerMenu />
            </DropdownToggle>
            <DropdownMenu
              modifiers={{
                setModifiers: {
                  enabled: true,
                  fn: data => {
                    return {
                      ...data,
                      styles: {
                        ...data.styles,
                        overflow: "auto",
                        minHeight: "500px",
                        minWidth: "500px"
                      }
                    };
                  }
                }
              }}
            >
              <DropdownItem header>Alle produkter</DropdownItem>
              <Link href="profile">
                <a title="min profil">
                  <DropdownItem>Dynamisk brukerprofil</DropdownItem>
                </a>
              </Link>
              <DropdownItem divider />
              <Link href="lojalitet">
                <a title="lojalitet">
                  <DropdownItem>Tax Free and Me</DropdownItem>
                </a>
              </Link>
              <DropdownItem divider />
              <Link href="parfyme">
                <a title="parfyme">
                  <DropdownItem>Parfyme</DropdownItem>
                </a>
              </Link>
              <DropdownItem divider />
              <Link href="category">
                <a title="makeup">
                  <DropdownItem>Makeup</DropdownItem>
                </a>
              </Link>
              <DropdownItem divider />
              <Link href="hudpleie">
                <a title="hudpleie">
                  <DropdownItem>Hudpleie</DropdownItem>
                </a>
              </Link>
              <DropdownItem divider />
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="col-4">
          <a className="nav-item" href="#">
            Searchbar
          </a>
        </div>
        <div className="mx-auto">
          <a href="index">
            <img src="/images/logo.png" width="50px" height="55px" alt="logo" />
          </a>
        </div>
        <div className="col-2">
          <a className="nav-item" href="favorites">
            <FaHeart color="black" />
          </a>
        </div>
        <div className="ml-auto">
          <a className="nav-item" href="shoppingcart">
            <FaShoppingCart color="black" />
          </a>
        </div>
      </Navbar>
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
