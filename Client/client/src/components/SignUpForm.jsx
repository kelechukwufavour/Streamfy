import React from 'react';
import '../styles/AuthForms.css'; 

const SignUpForm = () => {
  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form className="form">
        <div className="form-group">
          <label>Username:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" />
        </div>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Country:</label>
          <input type="text" />
        </div>
        <button className="btn">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;