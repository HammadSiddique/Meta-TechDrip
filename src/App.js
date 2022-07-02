import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import Header from './components/Header';
import './App.css';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route>404 Not Found!</Route>
      </Routes>
    </div>
  );
}

export default App;
