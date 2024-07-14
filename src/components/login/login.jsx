import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './login.module.css'; // Import CSS module

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get('http://localhost:8080/users');
            const users = response.data;

            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                if (user.role === 'a') {
                    navigate('/');
                } else if (user.role === 'o') {
                    navigate('/');
                } else if (user.role === 'u') {
                    navigate('/');
                }
            } else {
                setError('Invalid username or password');
            }
        } catch (error) {
            setError('An error occurred during login');
        }
    };


    return (
        <div className={styles["login-page"]}> {/* Use CSS module class */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="bg-white shadow rounded">
                            <div className="row">
                                <div className="col-md-7 pe-0">
                                    <div className="form-left h-100 py-5 px-5">
                                        <form onSubmit={handleLogin} className="row g-4">
                                            <div className="col-12">
                                                <label htmlFor="username" className="form-label">
                                                    Username <span className="text-danger">*</span>
                                                </label>
                                                <div className="input-group">
                                                    <div className="input-group-text">
                                                        <i className="bi bi-person-fill"></i>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="username"
                                                        name="username"
                                                        placeholder="Enter Username"
                                                        value={username}
                                                        onChange={(e) => setUsername(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <label htmlFor="password" className="form-label">
                                                    Password <span className="text-danger">*</span>
                                                </label>
                                                <div className="input-group">
                                                    <div className="input-group-text">
                                                        <i className="bi bi-lock-fill"></i>
                                                    </div>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="password"
                                                        name="password"
                                                        placeholder="Enter Password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            {error && (
                                                <div className="col-12">
                                                    <div className="alert alert-danger" role="alert">
                                                        {error}
                                                    </div>
                                                </div>
                                            )}

                                            <div className="col-sm-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="rememberMe" />
                                                    <label className="form-check-label" htmlFor="rememberMe">
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <a href="/auth/reset-password" className="float-end text-primary">
                                                    Forgot Password?
                                                </a>
                                            </div>

                                            <div className="col-12 d-flex justify-content-between">
                                                <button type="submit" className={`btn ${styles["btn-primary"]} flex-grow-1 mx-1`}>
                                                    Login
                                                </button>
                                                <a href="/signup" className={`btn ${styles["btn-secondary"]} flex-grow-1 mx-1`}>
                                                    Sign Up
                                                </a>
                                            </div>

                                            <div className="col-12 mt-3 text-center">
                                                <a
                                                    href="https://accounts.google.com/o/oauth2/v2/auth?client_id=640078988681-kmojc9p5oqoc79flah45qhojn1q3l827.apps.googleusercontent.com&redirect_uri=http://localhost:8080/auth/login/oauth2/google&response_type=code&scope=openid%20email%20profile"
                                                    role="button"
                                                    className={`btn ${styles["btn-secondary"]} w-100`}
                                                >
                                                    <i className="bi bi-google me-2"> Login with Google</i>
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className={`${styles["form-right"]} col-md-5 ps-0 d-none d-md-block position-relative`} style={{ backgroundColor: '#191825' }}>


                                    <div className={styles["centered-image"]} >
                                        <img
                                            src="https://res.cloudinary.com/djcowpoua/image/upload/v1717772773/Main_Idea_Education_Storyboard_Retro_Pink-Photoroom_fm4uvt.png"
                                            alt="Welcome Image"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-end text-secondary mt-3"></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
