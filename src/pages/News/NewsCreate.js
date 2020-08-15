import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Button } from 'antd';
import slugify from 'slugify';

import { cerateNews } from './actions';
import { AuthContext } from '../../components/Auth';

import './NewsCreate.scss';

function CreateNewNews() {
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [summery, setSummery] = useState('');
    const [body, setBody] = useState('');

    const { currentUser } = useContext(AuthContext);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;

        const generateSlug = (value) => slugify(value, { lower: true, strict: true });

        if (name === 'title') {
            setTitle(value);
            setSlug(generateSlug(value));
        } else if (name === 'slug') {
            setSlug(generateSlug(value));
        } else if (name === 'summery') {
            setSummery(value);
        } else if (name === 'body') {
            setBody(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const createdAt = new Date().toISOString();
        const updatedAt = createdAt;

        const news = {
            title,
            slug,
            author: {
                id: currentUser.uid,
            },
            summery,
            body,
            categories: ['videogames', 'kino-i-serialy'],
            createdAt,
            updatedAt,
        };

        dispatch(cerateNews(news));

        setTitle('');
        setSlug('');
        setSummery('');
        setBody('');
    };

    const isDisabled = !title || !summery || !body;

    return (
        <div className="container">
            <header className="np-create__heading">
                <h1 className="np-create__title">Создать новость</h1>
            </header>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="title">
                        Название новости
                    </label>
                    <Input id="title" name="title" value={title} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="summery">
                        Краткое содержание
                    </label>
                    <Input.TextArea
                        rows={4}
                        id="summery"
                        name="summery"
                        value={summery}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="body">
                        Полное содержание
                    </label>
                    <Input.TextArea
                        rows={8}
                        id="body"
                        name="body"
                        value={body}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Button type="primary" htmlType="submit" disabled={isDisabled}>
                        Опубликовать новость
                    </Button>
                </div>
            </form>

            <div style={{ height: '200px' }} />
        </div>
    );
}

export default CreateNewNews;
