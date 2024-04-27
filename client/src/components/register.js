import React, { useState } from 'react';
import '../components/register.css'
import { Link, useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation
import axios from 'axios';




function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [voter, setVoter] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        
        // Log all the form values
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Aadhar ID:", aadhar);
        console.log("Voter ID:", voter);
        console.log("Confirm Password:", confirmPassword);

        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const { data } = await axios.post(
                "http://localhost:5000/auth/signup",
                {
                    username,
                    email,
                    password,
                    aadhar,
                    voter,
                },
                config
            );
            console.log(data);
            console.log("Registration successful");
            // Redirect to login page after successful registration
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
           
            
             

    
    };

    return (
        <div>
            <header>
                <h1>Register for Digital Voting System</h1>
            </header>
            <main>
                <section id="register">
                    <h2 style={{ color: 'aliceblue' }}>Create an Account</h2>
                    <form id="registerForm" >
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            id="username"
                            placeholder="Username"
                            required
                        />
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            placeholder="Email"
                            required
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            placeholder="Password"
                            required
                        />
                        <input
                            type="text"
                            value={aadhar}
                            onChange={(e) => setAadhar(e.target.value)}
                            id="aadhar"
                            placeholder="Adhaar ID"
                        />
                        <input
                            type="text"
                            value={voter}
                            onChange={(e) => setVoter(e.target.value)}
                            id="voter"
                            placeholder="Voter ID"
                        />
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            id="confirmpassword"
                            placeholder="Confirm Password"
                            required
                        />
                        <button  onClick={handleRegister} >Register</button>
                    </form>
                    <p>
                        <b style={{ color: 'aliceblue' }}>Already have an account?</b>
                        <a style={{ textShadow: '2px 2px 8px white' }} href="/login">
                            <b style={{ color: 'rgb(255, 255, 255)' }}>Login here</b>
                        </a>
                    </p>
                    
                </section>
            </main>
            <footer>
                <p>&copy; 2024 Digital Voting System</p>
            </footer>
        </div>
    );
}

export default Register;
