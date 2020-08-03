import React, { Component } from 'react';
import { auth, db } from '../../services/firebase';

import './Profile.scss';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            user: auth().currentUser,
            photoURL: auth().currentUser.photoURL,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.state.user.updateProfile({
            photoURL: this.state.photoURL,
        });
    }

    render() {
        console.log(this.state.user);
        return (
            <div className="container">
                <h1>Profile</h1>
                <p>
                    Login in as: <strong>{this.state.user.email}</strong>
                </p>
                <button
                    onClick={() => {
                        auth().signOut();
                    }}
                >
                    Sign Out
                </button>

                <hr />

                <form onSubmit={this.handleSubmit}>
                    <h2>Обновление профиля пользователя</h2>
                    <div>
                        <input
                            name="photoURL"
                            type="text"
                            value={this.state.photoURL ? this.state.photoURL : ''}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>
        );
    }
}

export default Profile;
