import React from 'react';
import '../styles/AuthForms.css';

const SignInForm = () => {
  return (
    <div className="form-container">
      <h2>Sign In</h2>
      <form className="form">
        <div className="form-group">
          <label>Username:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" />
        </div>
        <button className="btn">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;