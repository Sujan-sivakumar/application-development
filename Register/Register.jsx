import React, { useState } from 'react';
import './Register.css'; 
import {Link} from 'react-router-dom';
const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        let errors = {};
        if (!formData.username) {
            errors.username = "Username is required";
        }
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email address is invalid";
        }
        if (!formData.password) {
            errors.password = "Password is required";
        }
        if (!formData.confirmPassword) {
            errors.confirmPassword = "Please confirm your password";
        } else if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            setIsSubmitted(true);
            console.log('Form submitted successfully', formData);
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <div className="registration-form">
            {isSubmitted ? (
                <div className="success-message">Registration Successful!</div>
            ) : (
                <form onSubmit={handleSubmit} className='app'>
                    <div id='tab'>
                    <h2>Register</h2>
                    <div>
                        <label className='clr'>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        {formErrors.username && <span>{formErrors.username}</span>}
                    </div>
                    <div>
                        <label className='clr'>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={{color:"black"}}
                        />
                        {formErrors.email && <span>{formErrors.email}</span>}
                    </div>
                    <div>
                        <label className='clr'>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {formErrors.password && <span>{formErrors.password}</span>}
                    </div>
                    <div>
                        <label className='clr'>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        {formErrors.confirmPassword && <span>{formErrors.confirmPassword}</span>}
                    </div>
                    <button type="submit">Register</button>
                    <span>Already have an account?? <Link className='link' to="/login">Login</Link></span>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Register;
