import React from "react";
import styles from "./BigPicture.module.css";
import containersImg from "@/assets/images/homepage/containers.png";
import Image from "next/image";

const data = [
  "Spot Trends in Seconds: No more digging through numbers.",
  "Get Everyone on the Same Page: Share easy-to-understand reports with your team.",
  "Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.",
  "Your Global Snapshot: Get a quick, clear overview of your entire operation.",
];

const BigPicture = () => {
  return (
    <section className={styles.big_picture}>
      <div className={styles.box}>
        <div className={styles.textbox}>
          <div className="outerline"></div>
          <div className={styles.heading_box}>
            <h3>See the Big Picture</h3>
            <p className={styles.subheading}>
              Area turns your data into clear, vibrant visuals that show you
              exactly what&apos;s happening in each region.
            </p>
          </div>

          <div className={styles.list}>
            {data.map((item, index) => (
              <>
                <div className="outerline"></div>
                <div className={styles.list_item}>
                  <p>0{index + 1}</p>
                  <p className={styles.list_item_text}>{item}</p>
                </div>
              </>
            ))}
          </div>

          <button>Discover More</button>
        </div>
        <div className={styles.img_box}>
          <Image
            className={styles.big_picture_img}
            src={containersImg}
            alt="containersImg"
          />
        </div>
      </div>
    </section>
  );
};

export default BigPicture;
