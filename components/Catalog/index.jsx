import React from "react";
import styles from "../../styles/Catalog.module.css";

export const Catalog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>O catalógo mais completo!</h1>
      </div>
      <div className={styles.subtitle}>
        <p>Com os melhores filmes</p>
      </div>
      <div className={styles.catalog_films}>
        <img src="/batman.jpg" alt="" />
        <img src="/spider-man.jpg" alt="" />
        <img src="/harry-potter.jpg" alt="" />
        <img src="/deadpool.jpg" alt="" />
      </div>
      <div className={styles.subtitle}>
        <p>e as melhores séries</p>
      </div>
      <div className={styles.catalog_films}>
        <img src="/breaking-bad.jpg" alt="" />
        <img src="/peaky-blinders.jpg" alt="" />
        <img src="/stranger-things.jpg" alt="" />
        <img src="/rick-and-morty.jpg" alt="" />
      </div>
    </div>
  );
};
