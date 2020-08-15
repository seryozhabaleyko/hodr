import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import slugify from 'slugify';
import { Textarea, TagInput, Button, TextInputField } from 'evergreen-ui';

import { cerateNews } from './actions';
import { AuthContext } from '../../components/Auth';
import { InputField } from '../../components/ui';

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

    return (
        <div className="container">
            <header className="np-create__heading">
                <h1 className="np-create__title">Создать новости</h1>
            </header>

            <form className="np-create__create-new-news" onSubmit={handleSubmit}>
                <div>
                    <TextInputField
                        name="title"
                        required
                        width="100%"
                        label="Заголовок новости"
                        placeholder="title"
                        value={title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <TextInputField
                        name="slug"
                        required
                        width="100%"
                        label="Слаг"
                        placeholder="slug"
                        value={slug}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Textarea
                        name="summery"
                        type="text"
                        placeholder="summery"
                        value={summery}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Textarea
                        name="body"
                        type="text"
                        placeholder="body"
                        value={body}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <TagInput
                        width="100%"
                        height={40}
                        type="text"
                        inputProps={{ placeholder: 'Categories...' }}
                    />
                </div>
                <div>
                    <Button height={40} appearance="primary" intent="none" type="submit">
                        Опубликовать новость
                    </Button>
                </div>
            </form>

            <div style={{ height: '200px' }} />
        </div>
    );
}

export default CreateNewNews;
