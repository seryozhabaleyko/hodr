import React, { Component } from 'react';
import { auth } from '../../services/firebase';

import { updateUserApi } from '../../helpers/users';

import './Profile.scss';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            user: auth().currentUser,
            photoURL: auth().currentUser.photoURL,
            username: '',
            name: '',
            surname: '',
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
            displayName: this.state.username,
        });

        updateUserApi(this.state.user.uid, {
            id: this.state.user.uid,
            username: this.state.username,
            name: this.state.name,
            surname: this.state.surname,
            photoURL: this.state.photoURL,
        });
    }

    render() {
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
                            name="username"
                            type="text"
                            placeholder="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            name="photoURL"
                            type="text"
                            value={this.state.photoURL || ''}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            name="name"
                            type="text"
                            placeholder="Имя"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            name="surname"
                            type="text"
                            placeholder="Фамилия"
                            value={this.state.surname}
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
