// src/Register.js
import { useState } from 'react';
import '../Css/Register.css';
import { Link } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: '',
        phone_number: '',
        country: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
         });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (formData.password !== formData.confirm_password) {
            alert("Passwords do not match!");
            return;
        }

        // Define baseUrl for the backend
        const baseUrl = 'https://wheelhouse.onrender.com'; 

        try {
            // Correct the use of template literal in fetch
            const response = await fetch(`${baseUrl}/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                    confirm_password: formData.confirm_password,
                    phone_number: formData.phone_number,
                    country: formData.country,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Registration successful
                alert("Registration successful!");
                console.log("Success:", data);
                // You can redirect the user to another page here if necessary
            } else {
                // Registration failed
                alert(`Registration failed: ${data.message || 'Something went wrong'}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during registration.');
        }
    };

    return (
        <div className="container-reg">
            <div className="register-section">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            className='regi'
                            type="text"
                            name="username"
                            placeholder="Username*"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            className='regi'
                            type="email"
                            name="email"
                            placeholder="Email address*"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            className='regi'
                            type="password"
                            name="password"
                            placeholder="Password*"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            className='regi'
                            type="password"
                            name="confirm_password"
                            placeholder="Confirm Password*"
                            value={formData.confirm_password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            className='regi'
                            type="tel"
                            name="phone_number"
                            placeholder="Phone Number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            className='regi'
                            type="text"
                            name="country"
                            placeholder="Country*"
                            value={formData.country}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group checkbox-group">
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">
                            I agree to the <a href="#">Terms of Use</a>
                        </label>
                    </div>
                    <button type="submit" className="register-btn">REGISTER</button>
                </form>
            </div>
            <div className="login-section">
                <h2>Already Have An Account?</h2>
                <p>Welcome back. Sign in to access your personalized experience, saved preferences, and more.</p>
                <Link to="/login"><button className="login-btn">LOGIN</button></Link>
            </div>
        </div>
    );
};

export default Register;
