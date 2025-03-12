import React, { Fragment, useState } from "react";
import Media from "react-media";
import styles from "./Header.module.css";
import { Menu } from "../../shared/Menu/Menu";
import { WeebButton } from "../../shared/WeebButton/WeebButton";
import BurgerMenu from "../../shared/Burger/BurgerMenu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerBody}>
          <a href="./" className={styles.headerLinkLogo}>
            weeb
          </a>
          <Menu />
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
            {/* <Media
              query="(min-width: 599px)"
              render={() => (
                <Fragment>
                </Fragment>
              )}
            /> */}
            {/* <WeebButton theme="buttonSmallTransparent">Log in</WeebButton>
            <WeebButton>Join Now</WeebButton> */}
            <div className={styles.headerBurger}>
              <BurgerMenu
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
