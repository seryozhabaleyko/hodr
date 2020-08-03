import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from '../../../firebase/firebase';

import './Login.scss';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const history = useHistory();

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                history.push('/');
            })
            .catch((error) => {
                setError(error);
            });
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <p className="intro-text">Login to access your account</p>
            {error && (
                <p className="error-message" style={{ color: 'red' }}>
                    {error.message}
                </p>
            )}
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email address</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    value={password}
                    onChange={handleChange}
                />
                <button className="general-submit">Log in</button>
                <p>
                    Don't have an account yet?{' '}
                    <Link className="login-btn" to="/register">
                        Register here
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
