import Container from "@mui/material/Container";
import React, { useState } from "react";
import Link from "next/link";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Image from "next/image";
import BottomNav from "../BottomNav/BottomNav";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import InventoryIcon from "@mui/icons-material/Inventory";
function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };
  return (
    <>
      <nav>
        <Container maxWidth="xl">
          <div className="nav-wrapper">
            <div className="col">
              <div className="logo">
                <h1>
                  <Link href="/">E-commerce</Link>
                </h1>
              </div>
            </div>
            <div className="menu-icon">
              <MenuIcon
                onClick={toggleNav}
                style={{ cursor: "pointer", fontSize: "2rem" }}
              />
            </div>

            <div className={`col col-nav-wrapper ${navOpen ? "active" : " "}`}>
              <div className="close-icon-wrapper">
                <CloseIcon
                  onClick={toggleNav}
                  style={{ zIndex: "11", cursor: "pointer", fontSize: "2rem" }}
                />
              </div>
              <div className="search-wrapper">
                <picture>
                  <img src="/search-icon.png" alt="search icon" />
                </picture>
                <input
                  type="search"
                  placeholder="بحث"
                  name="search"
                  id="search"
                />
              </div>
              <Link href="/login">
                <span>
                  <PermIdentityIcon />
                  تسجيل الدخول
                </span>
              </Link>
              <Link href="/cart">
                <span>
                  <Image src={"/bag-2.png"} width="24" height="24" alt="bag" />
                  سلة التسوق
                </span>
              </Link>
              <Link href="/orders">
                <span>
                  <InventoryIcon />
                  الطلبات
                </span>
              </Link>
            </div>
          </div>
        </Container>

        <style jsx>
          {`
            nav {
              background-color: #f7f7f7;
              overflow: hidden;
            }

            h1 {
              padding: 2.2rem 0;
              color: black;
              font-size: 1.3rem;
              text-transform: uppercase;
            }
            .menu-icon {
              display: none;
            }
            .close-icon-wrapper {
              display: none;
            }
            .col {
              display: flex;
              gap: 2rem;
              align-items: center;
            }
            .search-wrapper {
              position: relative;
              img {
                position: absolute;
                top: 5px;
                right: 9px;
                cursor: pointer;
              }
            }
            .nav-wrapper {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
            }
            .col-nav-wrapper span {
              padding: 2.2rem 0;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 0.2rem;
              position: relative;
              transition: color 0.25s ease;
              &:hover {
                color: #ffc93c;
              }
            }
            input {
              max-height: 42px;
              border: 1px solid #ccc;
              border-radius: 20px;
              padding: 0.3rem 1rem;
              font-size: 1rem;
              padding-right: 2rem;
              min-width: 250px;
              transition: all 0.25s ease;
              background-color: #dcdcdc;
              &:focus {
                min-width: 350px;
                background-color: #fff;
              }
            }
            a:hover {
              color: gold;
            }
            .close-btn {
              z-index: 11;
            }
            @media (min-width: 768px) {
              input {
                min-width: 350px;
                &:focus {
                  min-width: 450px;
                }
              }
            }
            @media (max-width: 768px) {
              .menu-icon {
                display: block;
              }

              .close-icon-wrapper {
                display: flex;
                padding: 1rem;
                justify-content: flex-start;
                width: 100%;
              }
              .col-nav-wrapper {
                position: fixed;
                top: 0;
                left: 0;
                min-width: 320px;
                height: 100%;
                flex-direction: column;
                background-color: #fff;
                z-index: calc(var(--default-zIndex) + 1);
                gap: 1rem;
                transform: translateX(-100%);
                transition: all 0.3s ease;
                &.active {
                  transform: translateX(0);
                }
              }
            }
          `}
        </style>
      </nav>
      <BottomNav />
    </>
  );
}

export default Navbar;
