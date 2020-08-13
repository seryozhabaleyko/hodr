import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { signup, createUser } from '../../helpers/auth';

import './SignUp.scss';

function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'username') {
            setUsername(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        try {
            await createUser({ username, email, password });
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <header>
                    <h1>SignUp</h1>
                </header>

                <div>
                    <input
                        name="username"
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        name="email"
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        name="password"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    {error ? <p className="text-danger">{error.message}</p> : null}
                    <button type="submit">Sign up</button>
                </div>
                <hr></hr>
                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
}

export default SignUp;
