import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Button from "../../libs/Button/Button";

import LOGO from "../../assets/icons/logo.png";
import styles from "./Navbar.module.css";
import { Image } from "react-bootstrap";

const Menu = () => {
  const [isActive, setIsActive] = useState("");
  const currentUrl = window.location.pathname;

  useEffect(() => {
    setIsActive(currentUrl.slice(1));
  }, [currentUrl]);
  return (
    <>
      <p>
        <Link
          onClick={() => setIsActive("")}
          className={`${!isActive.length && styles.active}`}
          to="/"
        >
          Home
        </Link>
      </p>
      <p>
        <Link
          onClick={() => setIsActive("our-services")}
          className={`${isActive === "our-services" && styles.active}`}
          to="our-services"
        >
          Our Services
        </Link>
      </p>
      <p>
        <Link
          onClick={() => setIsActive("about")}
          className={`${isActive === "about" && styles.active}`}
          to="about"
        >
          About Us
        </Link>
      </p>
      <p>
        <Link
          onClick={() => setIsActive("portfolio")}
          className={`${isActive === "portfolio" && styles.active}`}
          to="portfolio"
        >
          Portfolio
        </Link>
      </p>
      <p>
        <Link
          onClick={() => setIsActive("career")}
          className={`${isActive === "career" && styles.active}`}
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
          <Image src={LOGO} alt="Anaghasoftech" />
        </div>
        <div className={`${styles["__navbar-links_container"]}`}>
          <Menu />
        </div>
      </div>

      <div className={`${styles["__navbar-sign"]} gap-2`}>
        <Button className="border">
          <Link to="/contact">Contact Us</Link>
        </Button>

        <Button>Drop a Query</Button>
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
              <Menu />
              <div className={styles["__navbar-menu_container-links-sign"]}>
                <Button className="border">
                  <Link to="/contact">Contact Us</Link>
                </Button>

                <Button>Drop a Query</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
