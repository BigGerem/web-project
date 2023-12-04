// ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';
import GeneralProdDetail from './GeneralProdDetail';
import productsData from '../data/Products';
import styles from '../styles/style.module.css';

export const handleAddToCart = (productId) => {
  const productIndex = productsData.findIndex((product) => product.id === productId);

  if (productIndex !== -1 && productsData[productIndex].status === 'in sale') {
    const updatedProduct = {
      ...productsData[productIndex],
      status: 'in cart',
    };

    // Створити новий масив продуктів з оновленим продуктом
    const updatedProducts = [...productsData];
    updatedProducts[productIndex] = updatedProduct;
  }
};

function ProductList() {
  return (
    <div className={styles.prodList}>
      {productsData.map((product) => (
        <div key={product.id} className={styles.productContainer}>
          <GeneralProdDetail
            name={product.name}
            author={product.author}
            price={product.price}
            image={product.image}
            productId={product.id}
          />
          <Link to="/placing-order" className={styles.productLink}>
            <button className={styles.buyButton}>Купити</button>
          </Link>
          <button
            onClick={() => handleAddToCart(product.id)}
            className={styles.cartButton}
          >
            До кошика
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;






