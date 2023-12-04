// App.js
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import products from './data/Products';


export const SelectedProductsContext = createContext();
export const ProductsContext = createContext();

function App() {

  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <SelectedProductsContext.Provider value={{ selectedProducts, setSelectedProducts }}>
      <ProductsContext.Provider value={products}>
        <Router>
          <div>
            <Header />
            <Body products={products} />
            <Footer />
          </div>
        </Router>
      </ProductsContext.Provider>
    </SelectedProductsContext.Provider>
  );
}

export default App;


