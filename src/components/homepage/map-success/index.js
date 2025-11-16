import React from "react";
import styles from "./MapYourSuccess.module.css";
import Image from "next/image";
import greenHeroImg from "@/assets/images/homepage/greenhero.png";

const MapYourSuccess = () => {
  return (
    <div className={styles.MapYourSuccess} id="how-to">
      <div className={styles.container}>
        <div className={styles.header}>
          <h3>Map Your Success</h3>
          <button>Discover More</button>
        </div>

        <div className={styles.count}>
          <div id={styles.count1}>
            <h2>01</h2>
            <p className={styles.heading}>Get Started</p>
            <p>With our intuitive setup, you’re up and running in minutes.</p>
          </div>

          <div id={styles.count2}>
            <h2>02</h2>
            <p className={styles.heading}>Customize and Configure</p>
            <p>Adapt Area to your specific requirements and preferences.</p>
          </div>

          <div id={styles.count3}>
            <h2>03</h2>
            <p className={styles.heading}>Grow Your Business</p>
            <p>Make informed decisions to exceed your goals.</p>
          </div>
        </div>
      </div>

      <div>
        <Image src={greenHeroImg} className={styles.heroImg} alt="" />
      </div>
    </div>
  );
};

export default MapYourSuccess;
