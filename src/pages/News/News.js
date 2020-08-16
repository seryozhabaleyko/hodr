import React, { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Select } from 'antd';

import { fetchNews } from './actions';
import { getNews } from './selectors';
import { NewsCardSkeleton } from './components/NewsCard';
import NewsCard from '../../components/NewsCard';
import useQuery from '../../hooks/useQuery';

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
            url = '/news';
        } else {
            url = `/news?category=${value}`;
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

function News() {
    const dispatch = useDispatch();
    const query = useQuery();
    const category = query.get('category');

    useEffect(() => {
        if (category === null) {
            dispatch(fetchNews());
        } else {
            dispatch(fetchNews(category));
        }
    }, [dispatch, category]);

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
