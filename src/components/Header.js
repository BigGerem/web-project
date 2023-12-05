// src/components/Header.js
import React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import styles from '../styles/style.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';

const Header = () => {
  const counterValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className={styles.headerDiv}>
      <Link className={styles.headerLink} to="/">
        <h1>MyBooks</h1>
      </Link>
      <Menu />
      <div style={{ color: 'white' }}>
        Лічильник покупок: {counterValue}
        <button onClick={handleIncrement}>Додати</button>
        <button onClick={handleDecrement}>Прибрати</button>
      </div>
    </div>
  );
};

export default Header;



