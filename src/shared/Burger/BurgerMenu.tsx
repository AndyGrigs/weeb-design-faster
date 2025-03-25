import React from "react";
import styles from "../../components/Header/Header.module.css";

interface BurgerMenuProps {
  isMenuOpen: boolean;
  onClose: ()=>void;
}

const BurgerMenu = ({ isMenuOpen, onClose}: BurgerMenuProps) => {
  return (
    <button
      type="button"
      className={`${styles.iconMenu} ${isMenuOpen ? styles.active : ""}`}
      
    >
      <span></span>
    </button>
  );
};

export default BurgerMenu;
