import React, { useState } from 'react';
import styles from '../Styles/Navbar.module.css';
import { MdViewList } from 'react-icons/md';
const Navbar = ({ togglePopUp, settogglePopUp }) => {
  const showDetailsApp = () => {
    settogglePopUp(!togglePopUp);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <MdViewList />
        <span>TODO APP</span>
      </div>
      <ul className={styles.navLinks}>
        <li>
          {togglePopUp ? (
            <button onClick={() => showDetailsApp()}>My App </button>
          ) : (
            <button onClick={() => showDetailsApp()}>Know More </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
