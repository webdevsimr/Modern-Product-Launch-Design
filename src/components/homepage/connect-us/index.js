import React from "react";
import styles from "./ConnectWithUs.module.css";
import Image from "next/image";
import arrowUpImg from "@/assets/images/navbar/arrow-up.svg";

const ConnectWithUs = () => {
  return (
    <div className={styles.ConnectWithUs} id="contact-us">
      <div className={styles.container}>
        <h3>Connect With Us</h3>
        <p className={styles.desc}>
          Schedule a quick call to learn how Area can turn your regional data
          into a powerful advantage.
        </p>
        <button className={styles.learnMorebtn}>
          Learn More{" "}
          <span>
            <Image
              src={arrowUpImg}
              alt="arrow-up.svg"
              className={styles.arrow}
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ConnectWithUs;
