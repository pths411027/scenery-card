"use client";
import { useState } from "react";
import styles from "./Page.module.css";
import { images, defaultText } from "./config";
export default function Home() {
  const [hoverIndex, setHoverIndex] = useState(-1);
  return (
    <main className={styles.container}>
      <div className={styles.title}>{defaultText}</div>
      <div className={styles.cards_container}>
        {images.map((item, index) => {
          const isHoverCondition = hoverIndex !== -1 && hoverIndex !== index;
          return (
            <div
              className={styles.card}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(-1)}
            >
              <img
                className={`${styles.img} ${
                  isHoverCondition ? styles.un_hover_card : ""
                }`}
                src={`/img/${item}`}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
