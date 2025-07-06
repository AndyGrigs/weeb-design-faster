import React, { Fragment, useState } from "react";
import Media from "react-media";
import styles from "./Header.module.css";
import { Menu } from "../../shared/Menu/Menu";
import { WeebButton } from "../../shared/WeebButton/WeebButton";
import BurgerMenu from "../../shared/Burger/BurgerMenu";
import Sidebar from "../../shared/Sidebar/Sidebar";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(prev=>!prev);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerBody}>
          <a href="./" className={styles.headerLinkLogo}>
            weeb
          </a>
          
          {/* Приховуємо меню на мобільних пристроях */}
          <Media queries={{ mobile: { maxWidth: 1135.98 } }}>
            {(matches) =>
              matches.mobile ? null : <Menu />
            }
          </Media>
          
          <div className={styles.headerActions}>
            <Media queries={{ small: { maxWidth: 768.98 } }}>
              {(matches) =>
                matches.small ? (
                  <></>
                ) : (
                  <>
                    <WeebButton theme="buttonSmallTransparent">
                      Log in
                    </WeebButton>
                    <WeebButton>Join Now</WeebButton>
                  </>
                )
              }
            </Media>

            <Media queries={{ mobile: { maxWidth: 1135.98 } }}>
              {(matches) =>
                matches.mobile ? (
                  <div className={styles.headerBurger}>
                    <BurgerMenu open={toggle} setIsMenuOpen={setIsOpen} />
                  </div>
                ) : null
              }
            </Media>
          </div>
        </div>
      </div>
      {/* Overlay для сайдбара */}
      <div 
        className={`${styles.sidebarOverlay} ${isOpen ? styles.open : ''}`}
        onClick={toggle}
      />
      
      <Sidebar isOpen={isOpen} toggleSidebar={toggle} />
    </header>
  );
};