import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { fetchUser } from '../User/actions';
import { updateUser } from './actions';
import { getUser } from '../User/selectors';
import useFieldChange from '../../hooks/useFieldChange';
import Input from '../../components/Input';

import './UserEdit.scss';

function EditUserForm({ initialData, onSubmit }) {
    const [editUserData, setEditUserData] = useState(initialData);
    const handleChange = useFieldChange(setEditUserData);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(editUserData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="avatar">Avatar Url</label>
                <Input
                    id="avatar"
                    type="text"
                    name="avatar"
                    placeholder="https://material-ui.com/static/images/avatar/1.jpg"
                    value={editUserData.avatar}
                    onChange={handleChange('avatar')}
                />
            </div>
            <div>
                <label htmlFor="name">Имя</label>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Сергей"
                    value={editUserData.name}
                    onChange={handleChange('name')}
                />
            </div>
            <div>
                <label htmlFor="surname">Фамилия</label>
                <Input
                    id="surname"
                    name="surname"
                    type="text"
                    placeholder="Балейко"
                    value={editUserData.surname}
                    onChange={handleChange('surname')}
                />
            </div>
            <div>
                <label htmlFor="username">Имя пользователя</label>
                <Input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="seryozha.baleyko"
                    value={editUserData.username}
                    onChange={handleChange('username')}
                />
            </div>
            <div>
                <button type="submit">Редактировать</button>
            </div>
        </form>
    );
}

function UserEdit({ match }) {
    const dispatch = useDispatch();
    const { userId } = match.params;

    useEffect(() => {
        dispatch(fetchUser(userId));
    }, [dispatch, userId]);

    const { loading, data, error } = useSelector(getUser, shallowEqual);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>error.message</p>;
    }

    const initialData = {
        avatar: data.photoURL,
        name: data.name,
        surname: data.surname,
        username: data.username,
    };

    const onSubmit = (data) => {
        dispatch(updateUser(userId, data));
    };

    return (
        <div className="container">
            <header className="user-edit-page__heading">
                <h1 className="user-edit-page__title">Редактирование профиля</h1>
            </header>

            <EditUserForm initialData={initialData} onSubmit={onSubmit} />
        </div>
    );
}

export default UserEdit;
