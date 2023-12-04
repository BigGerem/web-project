// Body.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import styles from '../styles/style.module.css';
import products from '../data/Products';

class Body extends React.Component {
  render() {
    return (
      <div className={styles.bodyContainer}>
        <Routes>
          <Route path='/' element={<ProductList products={products} />} />
          {products.map((product) => (
            <Route
              key={product.id}
              path={`/product/${product.id}`}
              element={<ProductDetail product={product} />} 
            />
          ))}
        </Routes>
      </div>
    );
  }
}

export default Body;








