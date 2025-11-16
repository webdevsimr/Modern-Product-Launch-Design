import React, { useState } from "react";
import styles from "./Header.module.css";
import arrowUp from "@/assets/images/navbar/arrow-up.svg";
import Image from "next/image";
import menuBtnImg from "@/assets/images/navbar/vector.svg";
import crossImg from "@/assets/images/icons/cross.svg";
import Link from "next/link";

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    console.log("hello");

    setShowMobileNav(!showMobileNav);
  };

  return (
    <div className="header">
      <div className={`${styles.navbar} outerSpace`}>
        <nav className={`container ${styles.main_nav}`}>
          <Link href={"/"}>
            <p className={styles.nav_title}>Area</p>
          </Link>
          <ul className={styles.nav_links}>
            <li>
              <Link href="#benefits">Benefits</Link>
            </li>

            <li>
              <Link href="#specifications">Specifications </Link>
            </li>
            <li>
              <Link href="#how-to">How-to</Link>
            </li>
            <li>
              <Link href="#contact-us">Contact Us</Link>
            </li>
          </ul>

          <button className={styles.learn_more_btn}>
            Learn more{" "}
            <span>
              <Image src={arrowUp} height={20} width={20} alt="arrow-up.svg" />
            </span>{" "}
          </button>

          {!showMobileNav ? (
            <Image
              src={menuBtnImg}
              height={20}
              width={20}
              alt="menu-btn.svg"
              className={styles.mobile_menu_btn}
              onClick={toggleMobileNav}
            />
          ) : (
            <div className={styles.hidemobileNav}>
              <Image
                onClick={toggleMobileNav}
                src={crossImg}
                alt="cross.svg"
                className={styles.crossImg}
              />
            </div>
          )}
        </nav>
        <div
          className={`${styles.mobile_nav} ${showMobileNav ? styles.show : ""}`}
        >
          {/* <p className={styles.nav_title}>Area</p> */}
          <ul className={styles.mobile_nav_links}>
            <li onClick={toggleMobileNav}>
              <Link href="#benefits">Benefits</Link>
            </li>

            <li onClick={toggleMobileNav}>
              <Link href="#specifications">Specifications </Link>
            </li>
            <li onClick={toggleMobileNav}>
              <Link href="#how-to">How-to</Link>
            </li>
            <li onClick={toggleMobileNav}>
              <Link href="#contact-us">Contact Us</Link>
            </li>

            <button className={` ${styles.mobile_learn_more_btn}`}>
              Learn more{" "}
              <span>
                <Image
                  src={arrowUp}
                  height={20}
                  width={20}
                  alt="arrow-up.svg"
                  className={styles.arrowImg}
                />
              </span>{" "}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
