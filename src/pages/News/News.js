import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { fetchNews } from './actions';
import { getNews } from './selectors';
import { NewsCardSkeleton } from './components/NewsCard';
import NewsCard from '../../components/NewsCard';
import Select from '../../components/Select';

import './News.scss';

function NewsList() {
    const { loading, data, error } = useSelector(getNews, shallowEqual);

    if (loading) {
        return (
            <div className="news-page__list news-page__grid">
                {[...Array(20)].map((el, index) => (
                    <NewsCardSkeleton key={index} />
                ))}
            </div>
        );
    }

    if (error) {
        return <p className="error__message">{error.message}</p>;
    }

    if (data.length === 0) {
        return (
            <p className="warning__message">
                Упс! У нас нет таких товаров, попробуйте изменить условия поиска.
            </p>
        );
    }

    return (
        <div className="news-page__list news-page__grid">
            {data.map((news) => (
                <NewsCard {...news} key={news.id} />
            ))}
        </div>
    );
}

function Filters() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    return <Select options={options} />;
}

function News() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    return (
        <div className="container">
            <header className="news-page__heading">
                <h1 className="news-page__title">Новости</h1>
                <Filters />
            </header>

            <NewsList />
        </div>
    );
}

export default News;
