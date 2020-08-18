import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Select } from 'antd';

import { fetchArticles } from './actions';
import { getArticles } from './selectors';

import './Articles.scss';

function Articles({ match }) {
    const { category } = match.params;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArticles(category));
    }, [dispatch, category]);

    return (
        <div className="container">
            <header className="articles-page__heading">
                <h1 className="articles-page__title">Статьи</h1>
                <Filters />
            </header>

            <ArticlesList />
        </div>
    );
}

function ArticlesList() {
    const { loading, data = [], error } = useSelector(getArticles, shallowEqual);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error...</p>;
    }

    if (data.length === 0) {
        return (
            <p className="warning__message">
                Упс! У нас нет таких товаров, попробуйте изменить условия поиска.
            </p>
        );
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

function Filters() {
    const history = useHistory();

    const options = [
        { value: 'all', label: 'Все' },
        { value: 'games', label: 'Игры' },
        { value: 'movie-and-series', label: 'Кино и сериалы' },
        { value: 'comics-and-books', label: 'Комиксы и книги' },
        { value: 'internet', label: 'Интернет' },
        { value: 'technology', label: 'Технологии' },
        { value: 'cybersport', label: 'Киберспорт' },
        { value: 'life', label: 'Жизнь' },
        { value: 'music', label: 'Музыка' },
        { value: 'special-projects', label: 'Спецпроекты' },
        { value: 'auto', label: 'Авто' },
    ];

    const handleChange = (value) => {
        let url;

        if (value === 'all') {
            url = '/articles';
        } else {
            url = `/articles/${value}`;
        }

        history.push(url);
    };

    return (
        <Select defaultValue="all" style={{ minWidth: '160px' }} onChange={handleChange}>
            {options.map(({ value, label }, i) => (
                <Select.Option value={value} key={i}>
                    {label}
                </Select.Option>
            ))}
        </Select>
    );
}

export default Articles;
