import React, { useState } from 'react';
import './Register.css'; // Import your CSS
import { Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    email: '',
    reEnterPassword: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Registration submitted:', formData);
    alert(`Welcome, ${formData.firstName}! Your registration is complete.`);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="input-box">
          <input type="text" name="firstName" placeholder="First Name" required onChange={handleChange} value={formData.firstName} />
        </div>
        <div className="input-box">
          <input type="text" name="lastName" placeholder="Last Name" required onChange={handleChange} value={formData.lastName} />
        </div>
        <div className="input-box">
          <input type="text" name="username" placeholder="Username" required onChange={handleChange} value={formData.username} />
        </div>
        <div className="input-box">
          <input type="password" name="password" placeholder="Password" required onChange={handleChange} value={formData.password} />
        </div>
        <div className="input-box">
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} value={formData.email} />
        </div>
        <div className="input-box">
          <input type="password" name="reEnterPassword" placeholder="Re-enter Password" required onChange={handleChange} value={formData.reEnterPassword} />
        </div>
        <button type="submit">Register</button>
        <div className="register-link">
          <p>Already have an account? <Link className="nav-link" to="/Login">Login</Link></p>
        </div>
      </form>
    </div>
  );
}

export default Register;
