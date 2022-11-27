import React from "react";
import styles from "../../styles/Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <img src="/Muflix.svg" alt="" />
      </div>
      <div>
        <ul className={styles.nav}>
          <li>FAQ</li>
          <li>Catálogo</li>
        </ul>
      </div>
    </div>
  );
};
