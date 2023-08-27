import React from 'react';
import { Link } from "react-router-dom";
import './Signin.css'

function Signin() {
  return (
    <div className="background d-flex justify-content-center align-items-center flex-column">
      <h1 className='title'>Faceback</h1>
      <form className='form-container rounded mt-5'>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h3 className='text-center mt-4'>Sign In</h3>
          <div className='part'>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter email' className='form-control mt-1' />
          </div>
          <div className='part mt-3'>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter password' className='form-control mt-1' />
          </div>
          {/* Remove Confirm Password and Username for Sign In */}
          <div className='part mt-3'>
            <input type="checkbox" className='custom-control custom-checkbox' id='check' />
            <label htmlFor="custom" className='custom-input-label'>
              Remember me
            </label>
          </div>
          <div className="d-grid mt-3">
            <button className="btn btn-primary">Sign In</button>
          </div>
          <p className='text-right mt-2'>
            Forgot <Link to="">Password?</Link><Link to="/">Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Signin;