import React, { useState } from 'react';
import '../styles/AuthForms.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement the password reset logic
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="form-container">
      <h2>Forgot Password</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button className="btn" type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;