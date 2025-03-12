import React from "react";
import styles from "../../components/Header/Header.module.css";

interface BurgerMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu = ({ isMenuOpen, setIsMenuOpen }: BurgerMenuProps) => {
  return (
    <button
      type="button"
      className={`${styles.iconMenu} ${isMenuOpen ? styles.active : ""}`}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <span></span>
    </button>
  );
};

export default BurgerMenu;
