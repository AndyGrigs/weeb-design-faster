Додамо мобільне меню-бургер, яке відкриватиметься при натисканні кнопки. Використаємо `useState` для управління його видимістю.  

---

### **Оновлена структура файлів:**
```
/src
 ├── components
 │   ├── Header
 │   │   ├── Header.jsx
 │   │   ├── Header.module.css
 │   │   ├── Menu.jsx
 │   │   ├── BurgerMenu.jsx
```

---

## 🔹 **1. Оновлений `Header.jsx`**
```jsx
import React, { useState } from "react";
import styles from "./Header.module.css";
import Menu from "./Menu";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerBody}>
          <a href="#" className={styles.headerLinkLogo}>weeb</a>
          
          {/* Основне меню для десктопу */}
          <Menu />

          {/* Дії та бургер-кнопка */}
          <div className={styles.headerActions}>
            <button 
              type="button" 
              className={`${styles.iconMenu} ${isMenuOpen ? styles.active : ""}`} 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      {/* Мобільне меню */}
      {isMenuOpen && <BurgerMenu closeMenu={() => setIsMenuOpen(false)} />}
    </header>
  );
};

export default Header;
```

---

## 🔹 **2. Оновлений `Menu.jsx` (Залишається без змін, окрім адаптації класів)**
```jsx
import React from "react";
import styles from "./Header.module.css";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menuList}>
        {["About Us", "Solutions", "Pricing", "Resources"].map((item) => (
          <li className={styles.menuItem} key={item}>
            <a href="#" className={styles.menuLink}>{item}</a>
          </li>
        ))}
      </ul>
      <a href="#" className={`${styles.menuButton} ${styles.transparent} ${styles.mini}`}>
        Log In
      </a>
      <a href="#" className={`${styles.menuButton} ${styles.mini}`}>
        Join Now
      </a>
    </nav>
  );
};

export default Menu;
```

---

## 🔹 **3. Створюємо `BurgerMenu.jsx` (Компонент мобільного меню)**
```jsx
import React from "react";
import styles from "./Header.module.css";

const BurgerMenu = ({ closeMenu }) => {
  return (
    <div className={styles.burgerMenu}>
      <ul className={styles.burgerList}>
        {["About Us", "Solutions", "Pricing", "Resources"].map((item) => (
          <li className={styles.burgerItem} key={item}>
            <a href="#" className={styles.burgerLink} onClick={closeMenu}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.burgerButtons}>
        <a href="#" className={`${styles.menuButton} ${styles.transparent}`} onClick={closeMenu}>
          Log In
        </a>
        <a href="#" className={styles.menuButton} onClick={closeMenu}>
          Join Now
        </a>
      </div>
    </div>
  );
};

export default BurgerMenu;
```

---

## 🔹 **4. Оновлений `Header.module.css` (Стилі)**
```css
.header {
  background: #fff;
  padding: 10px 20px;
  position: relative;
}

.headerContainer {
  max-width: 1200px;
  margin: 0 auto;
}

.headerBody {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.headerLinkLogo {
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

/* Десктопне меню */
.menu {
  display: flex;
  align-items: center;
}

.menuList {
  list-style: none;
  display: flex;
  gap: 20px;
}

.menuItem {
  display: inline-block;
}

.menuLink {
  text-decoration: none;
  color: #333;
  font-size: 16px;
}

.menuButton {
  padding: 8px 16px;
  text-decoration: none;
  font-size: 14px;
  border-radius: 4px;
  background: #007bff;
  color: white;
  display: inline-block;
}

.transparent {
  background: transparent;
  border: 1px solid #333;
  color: #333;
}

.mini {
  font-size: 12px;
}

/* Бургер-кнопка */
.iconMenu {
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  flex-direction: column;
  gap: 5px;
  width: 30px;
  height: 25px;
}

.iconMenu span {
  display: block;
  width: 30px;
  height: 3px;
  background: #333;
  transition: 0.3s;
}

/* Анімація бургер-меню */
.iconMenu.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.iconMenu.active span:nth-child(2) {
  opacity: 0;
}
.iconMenu.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Мобільне меню */
.burgerMenu {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.burgerList {
  list-style: none;
  padding: 0;
}

.burgerItem {
  margin-bottom: 15px;
}

.burgerLink {
  text-decoration: none;
  color: #333;
  font-size: 18px;
}

.burgerButtons {
  margin-top: 20px;
}

@media (max-width: 768px) {
  .menu {
    display: none;
  }
  
  .iconMenu {
    display: flex;
  }
}
```

---

## 🎯 **Що змінилося та як це працює?**
1. Додано **стан `isMenuOpen`** у `Header.jsx`, який керує відкриттям мобільного меню.
2. Додано компонент **`BurgerMenu.jsx`**, який показується тільки при `isMenuOpen === true`.
3. **Анімація бургер-кнопки** змінюється при відкритті меню.
4. **Мобільне меню (BurgerMenu)**:
   - Відображається лише на мобільних пристроях (`max-width: 768px`).
   - Закривається при кліку на будь-яку кнопку або посилання.

---

### ✅ **Результат:**
- **На десктопі** меню відображається у вигляді звичайної навігації.
- **На мобільних пристроях** з’являється бургер-кнопка, яка відкриває мобільне меню.
- **Адаптивний дизайн** та **плавна анімація**!  

Тепер у тебе повноцінне бургер-меню для мобільних пристроїв! 🔥🚀