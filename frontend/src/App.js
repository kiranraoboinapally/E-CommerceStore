import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import ProductList from './pages/ProductList';
// You can add more pages like Cart, Login, etc.

function App() {
  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <h1 className="text-primary">Welcome to Mini E-Commerce Store</h1>
        <button className="btn btn-success mb-4">Click Me</button>

        <Routes>
          <Route path="/" element={<ProductList />} />
          {/* Example future routes: */}
          {/* <Route path="/cart" element={<Cart />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
