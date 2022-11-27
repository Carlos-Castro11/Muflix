import React from "react";
import styles from "../../styles/Header.module.css";

export const Nav = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_contents}>
        <div className={styles.logo}>
          <img src="/Muflix.svg" alt="" />
        </div>
        <div className={styles.nav}>
          <ul className={styles.menu}>
            <li className={styles.menu_item}>
              <a href="#">Fazer Login</a>
            </li>
            <li className={styles.menu_item}>
              <a href="#">Vantagens</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
