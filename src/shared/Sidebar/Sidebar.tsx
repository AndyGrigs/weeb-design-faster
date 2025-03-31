import React, { FC } from 'react'
import styles from './Sidebar.module.css'
import { Menu } from '../Menu/Menu';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar:FC<SidebarProps>= ({isOpen, toggleSidebar}) => {

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <nav>
            <ul>
              <Menu/>
            </ul>
        </nav>
       
    </div>
  )
}

export default Sidebar