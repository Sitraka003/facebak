import React from 'react';
import { Link } from "react-router-dom";
import './Login.css';

function Login() {
  return (
    <div className="background d-flex justify-content-center align-items-center flex-column">
        <h1 className='title'>Faceback</h1>
      <form className='form-container rounded'>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h3 className='text-center mt-4'>Sign Up</h3>
          <div className='part'>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter email' className='form-control mt-1' />
          </div>
          <div className='part mt-3'>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter password' className='form-control mt-1' />
          </div>
          <div className='part mt-3'>
            <label htmlFor="password">Confirm Password</label>
            <input type="password" placeholder='Confirm your password' className='form-control mt-1' />
          </div>
          <div className='part mt-3'>
            <label htmlFor="username">Username</label>
            <input type="username" placeholder='Username' className='form-control mt-1' />
          </div>
          <div className='part mt-3'>
            <input type="checkbox" className='custom-control-input' id='check' />
            <label htmlFor="check" className='custom-control-label'>
              Remember me
            </label>
          </div>
          <div className="d-grid mt-3">
            <button className="btn btn-primary">Sign Up</button>
          </div>
          <p className='text-right mt-2'>
            Forgot <Link to="/">Password?</Link><Link to="/signin">Sign In</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;