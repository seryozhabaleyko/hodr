import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Select } from 'antd';

import { fetchNews } from './actions';
import { getNews } from './selectors';
import { NewsCardSkeleton } from './components/NewsCard';
import NewsCard from '../../components/NewsCard';

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
        { value: 'all', label: 'Все' },
        { value: 'games', label: 'Игры' },
        { value: 'movieAndSeries', label: 'Кино и сериалы' },
        { value: 'comicsAndBooks', label: 'Комиксы и книги' },
        { value: 'internet', label: 'Интернет' },
        { value: 'technology', label: 'Технологии' },
        { value: 'cybersport', label: 'Киберспорт' },
        { value: 'life', label: 'Жизнь' },
        { value: 'music', label: 'Музыка' },
        { value: 'specialProjects', label: 'Спецпроекты' },
        { value: 'auto', label: 'Авто' },
    ];

    const handleChange = (value) => {
        console.log(`selected ${value}`);
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
