import React from "react";
import st from "./Menu.module.css";

const menuLinks = [
  { id: 1, name: "About Us" },
  { id: 2, name: "Solutions" },
  { id: 3, name: "Pricing" },
  { id: 4, name: "Resources" },
];

export const Menu = () => {
  return (
    <nav className={st.menuBody}>
      <ul className={st.menuList}>
        <li className={st.menuItem}>
          {menuLinks.map((link) => {
            return (
              <li className={st.menuLink} key={link.id}>
                <a href="#">{link.name}</a>
              </li>
            );
          })}
        </li>
      </ul>
    </nav>
  );
};
