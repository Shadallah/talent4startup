import React from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
  return (
    <div className="register-container">
      <div className="welcome-section">
        <h1>Welcome</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          suspendisse aliquam varius rutrum purus maecenas ac.
          <a href="#">Learn more</a>
        </p>
      </div>
      <div className="form-section">
        <h2>Register</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Confirm Password" required />
          </div>
          <div className="form-group">
            <input type="checkbox" required />
            <label>
              I accept the <a href="#">Terms of Use</a> & <a href="#">Privacy Policy</a>
            </label>
          </div>
          <button type="submit">Register Now</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
