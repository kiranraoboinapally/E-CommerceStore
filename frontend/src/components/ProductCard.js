import React, { useState } from 'react';

function ProductCard({ product }) {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(prev => prev + 1);
  };

  const handleRemove = () => {
    setCount(prev => (prev > 0 ? prev - 1 : 0));
  };

  const totalPrice = count * product.price;

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow">
        <img
          src={product.imageUrl}
          className="card-img-top"
          alt={product.name}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="fw-bold text-success">Price: ₹{product.price}</p>

          <div className="d-flex justify-content-between align-items-center mb-2">
            <button className="btn btn-danger" onClick={handleRemove}>Remove</button>
            <span className="fw-bold">{count}</span>
            <button className="btn btn-primary" onClick={handleAdd}>Add</button>
          </div>

          {count > 0 && (
            <p className="text-info fw-bold">
              Total: ₹{totalPrice}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
