Щоб створити універсальний компонент `Button`, який підтримує різні теми, ми будемо передавати **`theme`** як пропс і змінювати стилі відповідно до теми.  

---

## 📁 **Структура файлів**
```
/src
 ├── components
 │   ├── Button
 │   │   ├── Button.jsx
 │   │   ├── Button.module.css
```

---

## **1️⃣ Код `Button.jsx`**
```js
import React, { FC, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  theme?: string;
  onClick?: () => void;
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, theme = "default", onClick, className = "" }) => {
  const buttonClass = `${styles.button} ${styles[theme]} ${className}`.trim();

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
```

---

## **2️⃣ Стилі `Button.module.css`**
```css
.button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* 🎨 Тема за замовчуванням */
.default {
  background: #ddd;
  color: #333;
}

.default:hover {
  background: #ccc;
}

/* 🔵 Синя тема */
.primary {
  background: #007bff;
  color: white;
}

.primary:hover {
  background: #0056b3;
}

/* 🟢 Зелена тема */
.success {
  background: #28a745;
  color: white;
}

.success:hover {
  background: #1e7e34;
}

/* 🔴 Червона тема */
.danger {
  background: #dc3545;
  color: white;
}

.danger:hover {
  background: #a71d2a;
}

/* ⚫ Чорна тема */
.dark {
  background: #333;
  color: white;
}

.dark:hover {
  background: #000;
}
```

---

## **3️⃣ Використання компонента `Button`**
```jsx
import React from "react";
import Button from "./components/Button/Button";

const App = () => {
  return (
    <div>
      <Button theme="default">Default</Button>
      <Button theme="primary">Primary</Button>
      <Button theme="success">Success</Button>
      <Button theme="danger">Danger</Button>
      <Button theme="dark">Dark</Button>
    </div>
  );
};

export default App;
```

---

## ✅ **Що отримали?**
- Універсальний компонент `Button`, який підтримує **різні теми**.
- Легке розширення: якщо потрібно більше тем — просто додайте нові класи у `Button.module.css`.
- Можливість передавати **`className`** для додаткового стилю.
- 🚀 **Оптимізовано та просто у використанні!**