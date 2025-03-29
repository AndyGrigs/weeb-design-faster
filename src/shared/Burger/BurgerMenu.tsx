import React from "react";
import styles from "../../components/Header/Header.module.css";

// interface BurgerMenuProps {
//   isMenuOpen: boolean;
//   onClose: ()=>void;
// }

const BurgerMenu = () => {
  return (
    <button
      type="button"
      className={`${styles.iconMenu}`}
      
    >
      <span></span>
    </button>
  );
};

export default BurgerMenu;
