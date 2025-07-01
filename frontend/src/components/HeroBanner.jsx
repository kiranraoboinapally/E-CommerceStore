// src/components/HeroBanner.js
import React from 'react';

const HeroBanner = () => {
  return (
    <div className="bg-light p-5 text-center shadow-sm">
      <h1>Welcome to MiniStore 🛍️</h1>
      <p className="lead">Shop the best products at unbeatable prices!</p>
      <a href="/products" className="btn btn-primary">Shop Now</a>
    </div>
  );
};

export default HeroBanner;
