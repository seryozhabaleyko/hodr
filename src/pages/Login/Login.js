import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { signin } from '../../helpers/auth';

import './Login.scss';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        try {
            await signin(email, password);
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <header>
                    <h1>Login</h1>
                    <p className="lead">Fill in the form below to login to your account.</p>
                </header>
                <div>
                    <input name="email" type="email" value={email} onChange={handleChange} />
                </div>
                <div>
                    <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    {error ? <p className="text-danger">{error.message}</p> : null}
                    <button type="submit">Login</button>
                </div>
                <hr></hr>
                <p>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
