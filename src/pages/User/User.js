import React, { useEffect, useContext } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';

import { fetchUser } from './actions';
import { getUser } from './selectors';
import { AuthContext } from '../../components/Auth';

import './User.scss';

function User({ match }) {
    const { username: slug } = match.params;
    const { currentUser } = useContext(AuthContext);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser(slug));
    }, [dispatch, slug]);

    const { loading, data, error } = useSelector(getUser, shallowEqual);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    const { id, username, name, surname, photoURL } = data;

    const isUser = currentUser && currentUser.uid === id;

    console.log('is user', currentUser);

    return (
        <div className="container">
            <header className="user-page__heading">
                <div className="user-page__avatar">
                    <img
                        src={photoURL}
                        alt={`${name} ${surname}`}
                        width="128"
                        height="128"
                        loading="lazy"
                    />
                </div>
                <h1 className="user-page__title">{`${data.name} ${data.surname}`}</h1>
            </header>
        </div>
    );
}

export default User;
