import React, { useState } from "react";
import styles from "./Header.module.css";
import { Menu } from "./Menu";
import { WeebButton } from "../../shared/WeebButton/WeebButton";
import BurgerMenu from './BurgerMenu';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerBody}>
          <a href="#" className={styles.headerLinkLogo}>
            weeb
          </a>
          <Menu />
          <div className={styles.headerActions}>
            <WeebButton theme="buttonSmallTransparent">Log in</WeebButton>
            <WeebButton>Join Now</WeebButton>
            <div className={styles.headerBurger}>
              <BurgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
