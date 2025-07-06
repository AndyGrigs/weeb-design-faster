import React, { FC } from 'react'
import styles from './Sidebar.module.css'
import { WeebButton } from '../WeebButton/WeebButton';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const menuLinks = [
  { id: 1, name: "About Us" },
  { id: 2, name: "Solutions" },
  { id: 3, name: "Pricing" },
  { id: 4, name: "Resources" },
];

const Sidebar: FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      {/* Кнопка закриття */}
      <button className={styles.closeBtn} onClick={toggleSidebar}>
        ×
      </button>
      
      {/* Меню */}
      <nav className={styles.sidebarNav}>
        <ul className={styles.sidebarList}>
          {menuLinks.map((link) => (
            <li key={link.id} className={styles.sidebarItem}>
              <a href="./" className={styles.sidebarLink} onClick={toggleSidebar}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Кнопки авторизації */}
      <div className={styles.sidebarActions}>
        <WeebButton theme="buttonSmallTransparent">
          Log in
        </WeebButton>
        <WeebButton>Join Now</WeebButton>
      </div>
    </div>
  )
}

export default Sidebar