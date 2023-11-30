// Body.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';

class Body extends React.Component {
  render() {
    const { products } = this.props;

    return (
      <div>
        <Routes>
          <Route
            path='/products'
            element={<ProductList products={products} />}
          />
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






