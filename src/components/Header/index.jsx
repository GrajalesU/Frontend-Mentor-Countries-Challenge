import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./styles.module.scss";

export default function Header() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <header className={styles.header}>
      <span className={styles.headerText}>Where in the world?</span>
      <button onClick={changeTheme} className={styles.headerButton}>
        <span
          className={
            theme === "light" ? "material-icons-outlined" : "material-icons"
          }
        >
          dark_mode
        </span>
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}
