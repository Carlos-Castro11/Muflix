import { React, useState, useEffect } from "react";
import styles from "../../styles/Header.module.css";

export const Nav = () => {
  // SHOW BLACK BACKGROUND NAV
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
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
