import React from "react";
import styles from "../../components/Header/Header.module.css";

interface BurgerMenuProps {
  open: () => void;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const BurgerMenu = ({ open, isOpen }: BurgerMenuProps) => {
  return (
    <button
      type="button"
      className={`${styles.iconMenu} ${isOpen ? styles.active : ''}`}
      onClick={() => open()}
    >
      <span></span>
    </button>
  );
};

export default BurgerMenu;