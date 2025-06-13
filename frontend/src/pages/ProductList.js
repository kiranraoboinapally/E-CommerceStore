// pages/ProductList.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';

const dummyProducts = [
  {
    id: 1,
    name: "T-Shirt",
    description: "Comfortable cotton tee",
    price: 499,
    imageUrl: "https://via.placeholder.com/200"
  },
  {
    id: 2,
    name: "Jeans",
    description: "Slim fit denim",
    price: 999,
    imageUrl: "https://via.placeholder.com/200"
  }
];

function ProductList() {
  return (
    <div className="row">
      {dummyProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
