import React, { FC, ReactNode } from "react";
import styles from "./WeebButton.module.css";

interface ButtonProps {
  children: ReactNode;
  theme?: string;
  onClick?: () => void;
  className?: string;
}
export const WeebButton: FC<ButtonProps> = ({ children, theme = "default", onClick, className = "" }) => {
    const buttonClass = `${styles.button} ${styles[theme]} ${className}`.trim();
  
    return (
      <button className={buttonClass} onClick={onClick}>
        {children}
      </button>
    );
  };


