import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    let errors = {};
    if (!username) {
      errors.username = "Username is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      console.log('Form submitted successfully', username, password);
      // Navigate to another page or display a success message
      navigate('/home'); // Example: navigate to home page
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='App-Su'>
          <h2>Login</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {formErrors.username && <span style={{ color: "red" }}>{formErrors.username}</span>}
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {formErrors.password && <span style={{ color: "red" }}>{formErrors.password}</span>}
            </div>
            <Link to="/"><button type="submit">Login</button></Link>
            <span>don't have an account <Link to="/reg">Register</Link></span>
          </form>
        </div>
      </header>
    </div>
  );
};

export default Login;
