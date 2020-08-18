import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Input, Button, Select, DatePicker } from 'antd';

import { fetchPlatforms, fetchGenres } from './actions';
import { getPlatforms, getGenres } from './selectors';

import './GamesCreatePage.scss';

function GamesCreatePage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPlatforms());
        dispatch(fetchGenres());
    }, [dispatch]);

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="container">
            <header className="games-create-page__heading">
                <h1 className="games-create-page__title">Создать игру</h1>
            </header>

            <GamesCreateFrom onSubmit={onSubmit} />

            <div style={{ height: '200px' }} />
        </div>
    );
}

function GamesCreateFrom({ onSubmit }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [developer, setDeveloper] = useState('');
    const [publisher, setPublisher] = useState('');
    const [officialSite, setOfficialSite] = useState('');
    const [platforms, setPlatforms] = useState([]);
    const [genres, setGenres] = useState([]);

    const platformsOptions = useSelector(getPlatforms, shallowEqual);
    const genresOptions = useSelector(getGenres, shallowEqual);

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'title') {
            setTitle(value);
        } else if (name === 'body') {
            setBody(value);
        } else if (name === 'developer') {
            setDeveloper(value);
        } else if (name === 'publisher') {
            setPublisher(value);
        } else if (name === 'officialSite') {
            setOfficialSite(value);
        }
    };

    const handlePlatformsChange = (value) => {
        setPlatforms(value);
    };

    const handleGenresChange = (value) => {
        setGenres(value);
    };

    const handleReleaseDateChange = (date, dateString) => {
        console.log('date', date);
        console.log('dateString', dateString);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({
            title,
            body,
            platforms,
            genres,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="form-label" htmlFor="title">
                    Название игры
                </label>
                <Input id="title" name="title" value={title} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label className="form-label" htmlFor="body">
                    Полное содержание
                </label>
                <Input.TextArea
                    rows="10"
                    id="body"
                    name="body"
                    value={body}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label className="form-label" htmlFor="developer">
                    Разработчик
                </label>
                <Input id="developer" name="developer" value={developer} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label className="form-label" htmlFor="publisher">
                    Издатель / Издатель в России
                </label>
                <Input id="publisher" name="publisher" value={publisher} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label className="form-label" htmlFor="officialSite">
                    Официальный сайт
                </label>
                <Input
                    id="officialSite"
                    name="officialSite"
                    value={officialSite}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label className="form-label" htmlFor="releaseDate">
                    Дата выхода
                </label>
                <br />
                <DatePicker
                    style={{ width: '170px' }}
                    placeholder="Select release date"
                    onChange={handleReleaseDateChange}
                />
            </div>

            <div className="form-group">
                {platformsOptions.error && <p>{platformsOptions.error.message}</p>}
                <label className="form-label" htmlFor="platforms">
                    Все платформы
                </label>
                <br />
                <Select mode="multiple" style={{ width: '50%' }} onChange={handlePlatformsChange}>
                    {platformsOptions.data.map(({ label, value }) => (
                        <Select.Option value={value} key={value}>
                            {label}
                        </Select.Option>
                    ))}
                </Select>
            </div>

            <div className="form-group">
                <label className="form-label" htmlFor="genres">
                    Все жанры
                </label>
                <br />
                <Select mode="multiple" style={{ width: '50%' }} onChange={handleGenresChange}>
                    {genresOptions.data.map(({ label, value }) => (
                        <Select.Option value={value} key={value}>
                            {label}
                        </Select.Option>
                    ))}
                </Select>
            </div>

            <div>
                <Button type="primary">Опубликовать</Button>
            </div>
        </form>
    );
}

export default GamesCreatePage;
