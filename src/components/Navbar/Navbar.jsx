/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Button from "../../libs/Button/Button";

import LOGO from "../../assets/icons/logo.svg";
import styles from "./Navbar.module.css";
import { Image } from "react-bootstrap";
import SubMenu from "../SubMenu";
import { FiChevronDown } from "react-icons/fi";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const Menu = ({ mobile, setToggleMenu }) => {
  const [isSubMenu, setSubMenu] = useState(false);
  const [isActive, setIsActive] = useState("");
  const currentUrl = window.location.pathname;

  const ref = useRef(null);

  const handleCloseSubMenu = () => {
    setSubMenu(false);
  };

  useOnClickOutside(ref, () => handleCloseSubMenu);

  useEffect(() => {
    setIsActive(currentUrl.slice(1));
  }, [currentUrl]);
  return (
    <>
      <p>
        <Link
          onClick={() => {
            setIsActive("");
            setToggleMenu(false);
          }}
          className={`${!isActive.length && styles.active} fw-bold `}
          to="/"
        >
          Home
        </Link>
      </p>
      <p>
        {!mobile ? (
          <Link
            // onMouseOut={() => setSubMenu(false)}
            onMouseEnter={() => {
              // setIsActive("our-services");
              setSubMenu(!isSubMenu);
            }}
            onClick={() => setIsActive("our-services")}
            className={`${isActive === "our-services" && styles.active} ${
              styles.services
            } fw-bold d-flex align-items-center gap-1`}
          >
            Our Services
            {!mobile && <FiChevronDown fontWeight={700} color="#c701ff" />}
          </Link>
        ) : (
          <Link
            // onMouseOut={() => setSubMenu(false)}
            onClick={() => {
              setIsActive("our-services");
              !mobile && setSubMenu(!isSubMenu);
              setToggleMenu(false);
            }}
            className={`${isActive === "our-services" && styles.active} ${
              styles.services
            } fw-bold d-flex align-items-center gap-1`}
            to={`${mobile && "our-services"}`}
          >
            Our Services
            {!mobile && <FiChevronDown fontWeight={700} color="#c701ff" />}
          </Link>
        )}
        <SubMenu
          ref={ref}
          closeSubMenu={handleCloseSubMenu}
          active={isSubMenu}
          setIsActive={setSubMenu}
        />{" "}
      </p>
      <p>
        <Link
          onClick={() => {
            setIsActive("about");
            setToggleMenu(false);
          }}
          className={`${isActive === "about" && styles.active} fw-bold `}
          to="about"
        >
          About Us
        </Link>
      </p>
      {/* <p>
        <Link
          onClick={() => {
            setIsActive("portfolio");
            setToggleMenu(false);
          }}
          className={`${isActive === "portfolio" && styles.active} fw-bold `}
          to="portfolio"
        >
          Portfolio
        </Link>
      </p> */}
      <p>
        <Link
          onClick={() => {
            setIsActive("career");
            setToggleMenu(false);
          }}
          className={`${isActive === "career" && styles.active} fw-bold `}
          to="career"
        >
          Career
        </Link>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={`${styles["__navbar"]} section-padding`}>
      <div className={styles["__navbar-links"]}>
        <div className={styles["__navbar-links_logo"]}>
          <Link to="/">
            <Image src={LOGO} alt="Anaghasoftech" />
          </Link>
        </div>
        <div className={`${styles["__navbar-links_container"]}`}>
          <Menu />
        </div>
      </div>

      <div className={`${styles["__navbar-sign"]} gap-2`}>
        <Button className="border">
          <Link to="/contact">Contact Us</Link>
        </Button>
        <Button
          onClick={() =>
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            })
          }
        >
          Get a call
        </Button>
      </div>
      <div className={styles["__navbar-menu"]}>
        {toggleMenu ? (
          <RiCloseLine
            color="000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div
            className={`${styles["__navbar-menu_container"]} ${styles["slide-left"]}`}
          >
            <div className={styles["__navbar-menu_container-links"]}>
              <Menu setToggleMenu={setToggleMenu} mobile />
              <div className={styles["__navbar-menu_container-links-sign"]}>
                <Button onClick={() => setToggleMenu(false)} className="border">
                  <Link to="/contact">Contact Us</Link>
                </Button>

                <Button
                  onClick={() => {
                    window.scrollTo({
                      top: document.documentElement.scrollHeight,
                      behavior: "smooth",
                    });
                    setToggleMenu(false);
                  }}
                >
                  Get a call
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
