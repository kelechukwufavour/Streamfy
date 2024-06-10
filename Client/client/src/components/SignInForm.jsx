import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import '../styles/AuthForms.css';

const SignInForm = () => {
  return (
    <div className="form-container">
      <h2>Sign In</h2>
      <form className="form">
          <label>Username:</label>
          <input type="text" />
  
          <label>Password:</label>
          <input type="password" />
   
        <button className="btn">Sign In</button>
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;