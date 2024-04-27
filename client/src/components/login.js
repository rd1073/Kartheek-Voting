import React from 'react';
import { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [identifier, setIdentifier] = useState('');  

    const [password, setPassword] = useState('');

    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent the default form submission
    
        const identifier = document.getElementById('username').value; // Get the value of the username input
        const password = document.getElementById('password').value; // Get the value of the password input
    
        if (!identifier || !password) {
            console.log('Please fill in all the fields');
            return;
        }
    
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
    
            const res = await axios.post(
                "http://localhost:5000/auth/login",
                {
                    identifier,
                    password,
                },
                config
            );
    
            console.log("Login successful");
            sessionStorage.setItem("userInfo", JSON.stringify(res.data));
            navigate('/dashboard');
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };
    


    return (
        <div>
            <header>
                <h1>Welcome to the Digital Voting System</h1>
            </header>
            <main>
                <section id="login">
                    <h2 style={{ textShadow: '2px 2px 8px red', color: 'aliceblue' }}>Login</h2>
                    <form id="loginForm">
                        <input
                            type="text"
                            value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)} 
                            id="username"
                            placeholder="Username or Email"
                            required
                        />
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Password"
                            required
                        />
                        <button onClick={handleLogin}>
                            <a
                                style={{ color: 'aliceblue', fontSize: 'medium', textDecoration: 'none' }}
                                href="practice.html"
                            >
                                Login
                            </a>
                        </button>
                    </form>
                    <p>
                        <b style={{ color: 'aliceblue' }}>Don't have an account?</b>
                        <a style={{ textShadow: '2px 2px 8px white' }} href="/register">
                            <b style={{ color: 'rgb(255, 255, 255)' }}>Register here</b>
                        </a>
                    </p>
                </section>
            </main>
            <footer>
                <p>&copy; <b>2024 Digital Voting System</b></p>
            </footer>
        </div>
    );
}

export default Login;
