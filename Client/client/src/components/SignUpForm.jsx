import React from 'react';
import '../styles/AuthForms.css'; 

const SignUpForm = () => {
  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form className="form">
          <label>Username:</label>
          <input type="text" />
          <label>Email:</label>
          <input type="email" />
          <label>Password:</label>
          <input type="password" />
          <label>Confirm Password:</label>
          <input type="password" />
          <label>First Name:</label>
          <input type="text" />
          <label>Last Name:</label>
          <input type="text" />
          <label>Date of Birth:</label>
          <input type="date" />
          <label>Country:</label>
          <input type="text" />
        <button className="btn">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;