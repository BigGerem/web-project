// ProductList.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SelectedProductsContext, ProductsContext } from '../App';

function ProductList() {
  const { selectedProducts, setSelectedProducts } = useContext(SelectedProductsContext);
  const products = useContext(ProductsContext);

  const handleProductSelect = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  return (
    <div className='prodList'>
      {products.map((product) => (
        <div key={product.id}>
          <input
            type="checkbox"
            checked={selectedProducts.includes(product.id)}
            onChange={() => handleProductSelect(product.id)}
          />
          <Link to={`/product/${product.id}`}>
            <span>{product.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;


