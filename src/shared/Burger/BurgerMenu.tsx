import React from "react";
import styles from "../../components/Header/Header.module.css";

interface BurgerMenuProps {
  open: ()=>void;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
