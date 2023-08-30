import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../services/authService';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleRegister = async (e) => {
      e.preventDefault();
  
      try {
        const user = await signUp({ email, password });
        // Redirect to the desired page after successful registration
        navigate('/home');
      } catch (error) {
        setError(error.message);
      }
    };
  
    return (
      <div>
        <h2>Register</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleRegister}>
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
          <button type="submit">Register</button>
        </form>
      </div>
    );
  };
  
export default Register;
  