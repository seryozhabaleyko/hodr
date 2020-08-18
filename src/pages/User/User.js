import React, { useEffect, useContext } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';

import { fetchUser } from './actions';
import { getUser } from './selectors';
import { AuthContext } from '../../components/Auth';

import './User.scss';
import { Link, Switch, Route } from 'react-router-dom';

function User({ match }) {
    const { username: userId } = match.params;
    const { currentUser } = useContext(AuthContext);
    const dispatch = useDispatch();

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

    const { id, name, surname, photoURL } = data;

    const isUser = currentUser && currentUser.uid === id;

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
                {isUser && (
                    <div>
                        <Link to={`/user/${userId}/edit`}>Редактировать профиль</Link>
                    </div>
                )}
            </header>

            <nav>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link className="nav-link" to={`/user/${userId}/news`}>
                            news
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={`/user/${userId}/games`}>
                            games
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={`/user/${userId}/articles`}>
                            articles
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={`/user/${userId}/reviews`}>
                            reviews
                        </Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path={`/user/${userId}/news`} exact>
                    <h1>news</h1>
                </Route>
                <Route path={`/user/${userId}/games`} exact>
                    <h1>games</h1>
                </Route>
                <Route path={`/user/${userId}/articles`} exact>
                    <h1>articles</h1>
                </Route>
                <Route path={`/user/${userId}/reviews`} exact>
                    <h1>reviews</h1>
                </Route>
            </Switch>
        </div>
    );
}

export default User;
