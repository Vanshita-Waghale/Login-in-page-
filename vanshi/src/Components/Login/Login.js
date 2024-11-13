import React, { useState } from "react";
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login submitted:', loginData);
    alert(`Welcome back, ${loginData.username}!`);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" name="username" placeholder="Username" required onChange={handleChange} value={loginData.username} />
          </div>
          <div className="input-box">
            <input type="password" name="password" placeholder="Password" required onChange={handleChange} value={loginData.password} />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forget password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>Don't have an account? <Link className="nav-link" to="/Register">Register</Link></p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
