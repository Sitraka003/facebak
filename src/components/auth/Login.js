import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../services/authService';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        const user = await signIn({ email, password });
        // Redirect to the desired page after successful login
        navigate('/home');
      } catch (error) {
        setError(error.message);
      }
    };
  
    return (
      <div>
        <h2>Login</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };
  
  export default Login;
  