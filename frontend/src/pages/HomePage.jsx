// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import HeroBanner from '../components/HeroBanner';
import axios from 'axios';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from backend API
  useEffect(() => {
    axios.get('http://localhost:8080/api/products') // replace with your API endpoint
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch products:', error);
      });
  }, []);

  return (
    <div>
      <HeroBanner />

      <div className="container mt-4">
        <h2 className="mb-4">Featured Products</h2>
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default HomePage;
