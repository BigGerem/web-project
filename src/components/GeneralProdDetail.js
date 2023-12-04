import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/style.module.css';

function GeneralProdDetail({ name, author, price, image, productId }) {
  return (
    <Link to={`/product/${productId}`} className={styles.productLink}>
      <div className={styles.productDetail}>
        <img src={image} alt={name} className={styles.productImage} />
        <span className={styles.productName}>{name}</span>
        <span className={styles.productAuthor}>{author}</span>
        <span className={styles.productPrice}>{price} $</span>
      </div>
    </Link>
  );
}

export default GeneralProdDetail;
