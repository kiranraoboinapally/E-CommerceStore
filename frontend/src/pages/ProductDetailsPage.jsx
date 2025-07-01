import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetailsPage = () => {
  const { id } = useParams(); // get product ID from URL
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/products/${id}`) // adjust endpoint to your backend
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => {
        console.error("Error fetching product:", err);
      });
  }, [id]);

  const handleAddToCart = () => {
    // Add to cart logic here (call backend or update context/localStorage)
    alert(`Added ${quantity} of ${product.name} to cart!`);
  };

  if (!product) {
    return <div className="container mt-4">Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Product Image */}
        <div className="col-md-6">
          <img src={product.imageUrl} alt={product.name} className="img-fluid rounded shadow-sm" />
        </div>

        {/* Product Info */}
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">{product.description}</p>
          <h4 className="text-primary">₹{product.price}</h4>

          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">Quantity:</label>
            <input
              type="number"
              id="quantity"
              className="form-control w-25"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              max={product.stock || 10}
            />
          </div>

          <button onClick={handleAddToCart} className="btn btn-success">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
