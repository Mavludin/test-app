import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink exact to="/characters" activeClassName={styles.active}>
          Characters
        </NavLink>
        <NavLink exact to="/episodes" activeClassName={styles.active}>
          Episodes
        </NavLink>
        <NavLink exact to="/locations" activeClassName={styles.active}>
          Locations
        </NavLink>
        <NavLink exact to="/quotes" activeClassName={styles.active}>
          Quotes
        </NavLink>
      </nav>
    </header>
  );
};
