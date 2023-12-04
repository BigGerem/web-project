// Header.js
import React, { useState } from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import styles from '../styles/style.module.css';

const Header = () => {

  return (
    <div className={styles.headerDiv}>
      <Link className={styles.headerLink} to="/">
        <h1>MyBooks</h1>
      </Link>
      <Menu />
    </div>
  );
};

export default Header;


