import React, { useState } from 'react';
import { Switch, Link } from 'react-router-dom';
import slugify from 'slugify';
import { auth } from '../../services/firebase';

import RouteWithSubRoutes from '../../components/RouteWithSubRoutes';

import { addNewGameApi } from '../../helpers/games';

import './Admin.scss';
import Genres from './components/Genres/Genres';

function Admin({ routes }) {
    const [title, setTitle] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const [summary, setSummary] = useState('');
    const [body, setBody] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'title') {
            setTitle(value);
        } else if (name === 'photoUrl') {
            setPhotoUrl(value);
        } else if (name === 'summary') {
            setSummary(value);
        } else if (name === 'body') {
            setBody(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newGame = {
            author: {
                id: auth().currentUser.uid,
                username: auth().currentUser.displayName,
                photoURL: auth().currentUser.photoURL,
            },
            title,
            slug: slugify(title, { lower: true }),
            photoUrl,
            summary,
            body,
            timestamp: Date.now(),
        };

        addNewGameApi(newGame);

        setTitle('');
        setPhotoUrl('');
        setSummary();
        setBody();
    };

    return (
        <div className="container">
            <ul>
                <li>
                    <Link to="/admin/games">Games</Link>
                </li>
                <li>
                    <Link to="/admin/news">News</Link>
                </li>
            </ul>
            <Switch>
                {routes.map((route, index) => (
                    <RouteWithSubRoutes {...route} key={index} />
                ))}
            </Switch>
            <header className="admin__heading">
                <h1 className="admin__title">Admin</h1>
            </header>

            <form className="game-add-form add-game" onSubmit={handleSubmit}>
                <header className="add-game__heading">
                    <h1 className="add-game__title">Добавить игру</h1>
                </header>

                <div>
                    <label className="form-label" htmlFor="title">
                        Название игры
                    </label>
                    <input
                        id="title"
                        className="form-control"
                        name="title"
                        type="text"
                        placeholder="Call of Duty: Modern Warfare 2 Remastered"
                        value={title}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="form-label" htmlFor="photoUrl">
                        Ссылка на фото
                    </label>
                    <input
                        id="photoUrl"
                        className="form-control"
                        name="photoUrl"
                        type="text"
                        placeholder="https://material-ui.com/static/images/avatar/3.jpg"
                        value={photoUrl}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="form-label" htmlFor="summary">
                        Краткое содержание
                    </label>
                    <textarea
                        id="summary"
                        className="form-control"
                        rows="3"
                        cols="100"
                        name="summary"
                        value={summary}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="form-label" htmlFor="body">
                        Полное содержание
                    </label>
                    <textarea
                        id="body"
                        className="form-control"
                        rows="5"
                        cols="100"
                        name="body"
                        value={body}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <button type="submit">Добавить</button>
                </div>
            </form>

            <Genres />
        </div>
    );
}

export default Admin;
