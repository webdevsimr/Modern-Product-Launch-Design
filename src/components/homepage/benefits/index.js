import React from "react";
import styles from "./Benefits.module.css";
import Image from "next/image";
import cableImg from "@/assets/images/icons/cable.svg";
import earthImg from "@/assets/images/icons/earth.svg";
import loudImg from "@/assets/images/icons/loud.svg";
import entityImg from "@/assets/images/icons/entity.svg";
import hero_img from "@/assets/images/homepage/hero_img.png";

const cardData = [
  {
    img: cableImg,
    title: "Amplify Insights",
    desc: ` Unlock data-driven decisions with comprehensive analytics,
              revealing key opportunities for strategic regional growth.
            `,
  },
  {
    img: earthImg,
    title: "Control Your Global Presence",
    desc: ` Manage and track satellite offices, ensuring consistent
              performance and streamlined operations everywhere.`,
  },
  {
    img: loudImg,
    title: "Remove Language Barriers",
    desc: ` Adapt to diverse markets with built-in localization for clear
              communication and enhanced user experience.`,
  },
  {
    img: entityImg,
    title: "Visualize Growth",
    desc: `Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.`,
  },
];

const Benifits = () => {
  return (
    <section className={styles.benefits} id="benefits">
      {/* <div className={styles.outerline}></div> */}
      <div className="outerline"></div>

      <div className={styles.textbox}>
        <p>Benefits</p>
        <h3>We’ve cracked the code.</h3>
        <p>Area provides real insights, without the data overload.</p>
      </div>

      <div className={styles.benefit_box}>
        <div className={styles.benefit_cards}>
          {cardData.map(({ title, desc, img }, index) => (
            <div key={index}>
              <div className={styles.outerline}></div>
              <div className={`${styles.benefit_card} `}>
                <Image
                  src={img}
                  height={20}
                  width={20}
                  alt={title}
                  className={styles.benefit_cardIcon}
                />
                <h6 className={styles.benefit_cardTitle}>{title}</h6>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.hero_imgBox}>
        <Image src={hero_img} alt="hero_img" className={styles.hero_img} />
      </div>
    </section>
  );
};

export default Benifits;
