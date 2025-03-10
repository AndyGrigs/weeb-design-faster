import React, { useState } from "react";
import styles from "./Header.module.css";
import { Menu } from "./Menu";
import { WeebButton } from "../../shared/WeebButton/WeebButton";
// import Menu from "./Menu";
// import BurgerMenu from "./BurgerMenu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.hearerBody}>
          <a href="#" className={styles.headerLinkLogo}>
            weeb
          </a>
          <Menu />
          <WeebButton>Log in</WeebButton>
          <WeebButton theme="buttonSmall">Log in</WeebButton>
        </div>
      </div>
    </header>
  );
};
