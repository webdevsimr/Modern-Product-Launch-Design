import React from "react";
import styles from "./WhyChooseArea.module.css";
import tickImg from "@/assets/images/icons/tick.svg";
import crossImg from "@/assets/images/icons/cross.svg";
import Image from "next/image";
import ballImg from "@/assets/images/homepage/ball.png";

const cards = [
  {
    title: "Area",
    border: true,
    options: [
      { text: "Ultra-fast browsing", type: "tick" },
      { text: "Advanced AI insights", type: "tick" },
      { text: "Seamless integration", type: "tick" },
      { text: "Advanced AI insights", type: "tick" },
      { text: "Ultra-fast browsing", type: "tick" },
      { text: "Full UTF-8 support", type: "tick" },
    ],
  },
  {
    title: "WebSurge",
    border: false,
    options: [
      { text: "Fast browsing", type: "tick" },
      { text: "Basic AI recommendations", type: "tick" },
      { text: "Restricts customization", type: "tick" },
      { text: "Basic AI insights", type: "cross" },
      { text: "Fast browsing", type: "tick" },
      { text: "Potential display errors", type: "cross", hasborder: true },
    ],
  },
  {
    title: "HyperView",
    border: false,
    options: [
      { text: "Moderate speeds", type: "cross" },
      { text: "No AI assistance", type: "cross" },
      { text: "Steep learning curve", type: "cross" },
      { text: "No AI assistance", type: "cross" },
      { text: "No AI assistance", type: "cross" },
      { text: "Moderate speeds", type: "cross", hasborder: true },
    ],
  },
];

const WhyChooseArea = () => {
  return (
    <div className={styles.WhyChooseArea} id="specifications">
      <div className={styles.container}>
        <div className={styles.box}>
          <p>Specs</p>
          <h3 className={styles.heading}>Why Choose Area?</h3>
          <p className={styles.desc}>
            You need a solution that keeps up. That’s why we developed Area. A
            developer-friendly approach to streamline your business.{" "}
          </p>

          <button>Discover More</button>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.card_options}>
            {cards.map((card, i) => (
              <div
                key={i}
                className={`${styles.card} ${
                  i === 2 ? styles.hideHyperView : ""
                }`}
                id={card.border ? styles.area : ""}
              >
                <h5>{card.title}</h5>

                {card.options.map((item, idx) => (
                  <div
                    className={`${styles.card_option} ${
                      card.title === "WebSurge" ? styles.websurgeRight : ""
                    } ${item.hasborder ? styles.hasborder : ""}`}
                    key={idx}
                  >
                    <Image
                      src={item.type === "tick" ? tickImg : crossImg}
                      alt={item.type}
                      className={styles.tick_cross}
                    />
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.authorBox}>
        <Image src={ballImg} alt="ball.png" className={styles.ballImg} />

        <div className={styles.authorBox_content}>
          <h5>
            “I was skeptical, but Area has completely transformed the way I
            manage my business. The data visualizations are so clear and
            intuitive, and the platform is so easy to use. I can&apos;t imagine
            running my company without it.”
          </h5>
          <p className={styles.authorName}>John Smith</p>
          <p>Head of Data</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseArea;
