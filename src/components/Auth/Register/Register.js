import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import firebase from '../../../firebase/firebase';

import './Register.scss';

function Register() {
    const history = useHistory();
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

    const handleSubmit = (event) => {
        event.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                const user = firebase.auth().currentUser;
                user.updateProfile({ displayName: username })
                    .then(() => {
                        history.push('/');
                    })
                    .catch((error) => {
                        setError(error);
                    });
            })
            .catch((error) => {
                setError(error);
            });
    };

    return (
        <div className="container">
            <h1>Register your account</h1>
            {error && (
                <p className="error-message" style={{ color: 'red' }}>
                    {error.message}
                </p>
            )}
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email address</label>
                <input type="text" name="email" id="email" value={email} onChange={handleChange} />
                <label htmlFor="password">Choose a password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handleChange}
                />
                <button className="general-submit" children="Get Started" />
                <p>
                    Already have an account?{' '}
                    <Link className="login-btn" to="/login">
                        Login here
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Register;
