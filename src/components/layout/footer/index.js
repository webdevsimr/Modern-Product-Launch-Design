import React from "react";
import styles from "./Footer.module.css";
import skeltonImg from "@/assets/images/footer/skelton.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="outerSpace">
        <div className="container">
          <div className={styles.links}>
            <h6>Benefits</h6>
            <h6>Specifications</h6>
            <h6>How-to</h6>
          </div>

          <div className={styles.copyright}>
            <Image
              src={skeltonImg}
              alt="skelton.png"
              className={styles.skeltonImg}
            />
            <div className={styles.copyright_text}>
              <div className={styles.copyright_text_left}>
                <p>© Area.</p>
                <p>2025</p>
              </div>
              <p>All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
