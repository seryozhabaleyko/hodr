import React, { useState } from 'react';
import { Textarea, TagInput, Button, TextInputField } from 'evergreen-ui';
import slugify from 'slugify';

import './NewsCreate.scss';

function News() {
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;

        const generateSlug = (value) => slugify(value, { lower: true, strict: true });

        if (name === 'title') {
            setTitle(value);
            setSlug(generateSlug(value));
        } else if (name === 'slug') {
            setSlug(generateSlug(value));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newNews = { title, slug };

        console.log(newNews);
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
                        label="Default text input field"
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
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Textarea name="body" type="text" placeholder="body" onChange={handleChange} />
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

export default News;
