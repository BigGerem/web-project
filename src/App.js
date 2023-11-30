// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Menu from './components/Menu';

const products = [
  { id: 0, name: 'Product 1', description: 'Description 1' },
  { id: 1, name: 'Product 2', description: 'Description 2' },
  { id: 2, name: 'Product 3', description: 'Description 3' },
  { id: 3, name: 'Product 4', description: 'Description 4' },
];

function App() {
  return (
    <Router>
      <div>
        <Header>
          <Menu />
        </Header>
        <Body products={products} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;


