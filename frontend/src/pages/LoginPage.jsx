import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulated login (in real case, use axios + backend)
    if (email === 'admin@example.com' && password === 'admin') {
      alert('Logged in as Admin');
      localStorage.setItem('user', JSON.stringify({ role: 'admin', email }));
      navigate('/admin');
    } else if (email && password) {
      alert('Logged in successfully!');
      localStorage.setItem('user', JSON.stringify({ role: 'customer', email }));
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '500px' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" className="form-control" value={email}
            onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input type="password" className="form-control" value={password}
            onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
