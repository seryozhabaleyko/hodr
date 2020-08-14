import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Button } from 'evergreen-ui';

import { fetchUser } from '../User/actions';
import { updateUser } from './actions';
import { getUser } from '../User/selectors';
import useFieldChange from '../../hooks/useFieldChange';
import InputField from '../../components/InputField';
import Avatar from '../../components/Avatar';

import './UserEdit.scss';

function EditUserForm({ initialData, onSubmit }) {
    const [editUserData, setEditUserData] = useState(initialData);
    const handleChange = useFieldChange(setEditUserData);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(editUserData);
    };

    const { loading, error } = useSelector((state) => state.editUser, shallowEqual);

    const { avatar, name, surname, username } = editUserData;
    const fullName = `${name} ${surname}`;

    return (
        <form onSubmit={handleSubmit}>
            <header>
                <div className="pre-user-card">
                    <div className="pre-user-card__avatar">
                        <Avatar size={64} src={avatar} alt={fullName} />
                    </div>
                    <div className="pre-user-card__body">
                        <h1 className="pre-user-card__full-name">{fullName}</h1>
                        <span className="pre-user-card__username">{username}</span>
                    </div>
                </div>
            </header>

            <InputField
                label="Ссылка на фото"
                name="avatar"
                placeholder="https://material-ui.com/static/images/avatar/1.jpg"
                value={editUserData.avatar}
                onChange={handleChange('avatar')}
            />
            <InputField
                label="Имя"
                name="name"
                placeholder="Сергей"
                value={editUserData.name}
                onChange={handleChange('name')}
            />
            <InputField
                label="Фамилия"
                name="surname"
                placeholder="Гагарин"
                value={editUserData.surname}
                onChange={handleChange('surname')}
            />
            <InputField
                label="Имя пользователя"
                name="username"
                placeholder="seryozha.baleyko"
                value={editUserData.username}
                onChange={handleChange('username')}
            />
            <div>
                {error && <p style={{ color: 'red' }}>error.message</p>}
                <Button isLoading={loading} type="submit" appearance="primary" height="40">
                    Редактировать
                </Button>
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
        return <p>{error.message}</p>;
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

            <div style={{ height: '30px' }}></div>
        </div>
    );
}

export default UserEdit;
