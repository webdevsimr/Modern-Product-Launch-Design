import React from "react";
import styles from "./Home.module.css";
import Image from "next/image";
import macImg from "@/assets/images/homepage/mac.png";
import iphone_img from "@/assets/images/homepage/iphone.png";
import logo1 from "@/assets/images/homepage/trustedby/logo1.png";
import logo2 from "@/assets/images/homepage/trustedby/logo2.png";
import logo3 from "@/assets/images/homepage/trustedby/logo3.png";
import logo4 from "@/assets/images/homepage/trustedby/logo4.png";
import logo5 from "@/assets/images/homepage/trustedby/logo5.png";
import logo6 from "@/assets/images/homepage/trustedby/logo6.png";
import Benifits from "./benefits";
import BigPicture from "./big-picture";
import WhyChooseArea from "./choose-area";
import MapYourSuccess from "./map-success";
import ConnectWithUs from "./connect-us";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const Home = () => {
  return (
    <section className={styles.home}>
      <div className="outerSpace">
        <div className="container">
          <h1 className={styles.main_heading}>Browse everything.</h1>

          <div className={styles.efficiency}>
            {/* Mac image */}
            <Image
              src={macImg}
              alt="Mac display"
              className={styles.mac_img}
              priority
            />

            <Image
              src={iphone_img}
              alt="Mac display"
              className={styles.iphone_img}
              priority
            />

            {/* Background color block behind */}
            <div className={styles.efficiency_bg}></div>
          </div>

          <div className={styles.trustedby}>
            <p>Trusted by:</p>

            <div className={styles.trustedby_logos}>
              {logos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  height={20}
                  width={20}
                  alt="logo"
                  className={styles.logo}
                />
              ))}
            </div>
          </div>

          <Benifits />

          <BigPicture />

          <WhyChooseArea />

          <MapYourSuccess />

          <ConnectWithUs />
        </div>
      </div>
    </section>
  );
};

export default Home;
