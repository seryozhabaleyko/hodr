import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Select from 'react-select';

import { fetchArticles } from './actions';
import { getArticles } from './selectors';

import './Articles.scss';

function Articles() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    return (
        <div className="container">
            <header className="articles-page__heading">
                <h1 className="articles-page__title">Статьи</h1>
                <Select className="articles-page__filters" options={options} />
            </header>
            <ArticlesList />
        </div>
    );
}

function ArticlesList() {
    const { loading, data, error } = useSelector(getArticles, shallowEqual);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error...</p>;
    }

    if (data.length === 0) {
        return <p>no content</p>;
    }

    return (
        <div className="articles-page__list articles-page__grid">
            {data.map((article) => (
                <ArticleCard {...article} key={article.id} />
            ))}
        </div>
    );
}

function ArticleCard({ title, image }) {
    return (
        <article className="articles-page__card ap-card">
            <figure className="ap-card__image">
                <img src={image} alt={title} />
            </figure>
            <div className="ap-card__content">
                <h1 className="ap_card__title">{title}</h1>
            </div>
        </article>
    );
}

export default Articles;
