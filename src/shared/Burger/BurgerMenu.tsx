import React from "react";
import styles from "../../components/Header/Header.module.css";

interface BurgerMenuProps {
  open: ()=>void;
}

const BurgerMenu = ({open}: BurgerMenuProps) => {
  return (
    <button
      type="button"
      className={`${styles.iconMenu}`}
      onClick={()=> open()}
    >
      <span></span>
    </button>
  );
};

export default BurgerMenu;
