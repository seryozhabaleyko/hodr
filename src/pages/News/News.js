import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Select } from 'antd';

import { fetchNews, fetchNewsByCategory } from './actions';
import { getNews } from './selectors';
import { options } from './constants';
import { NewsCardSkeleton } from './components/NewsCard';
import NewsCard from '../../components/NewsCard';
import useQuery from '../../hooks/useQuery';

import './News.scss';

function News() {
    const dispatch = useDispatch();
    const query = useQuery();
    const category = query.get('category');
    const currentPage = query.get('page');
    console.log(currentPage);

    useEffect(() => {
        if (!category) {
            dispatch(fetchNews());
        } else {
            dispatch(fetchNewsByCategory(category));
        }
    }, [dispatch, category]);

    useEffect(() => {
        if (currentPage) {
            console.log(1);
            dispatch({ type: 'NEWS/SET_CURRENT_PAGE', payload: currentPage });
        }
    }, [dispatch, currentPage]);

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

function Filters() {
    const history = useHistory();
    const query = useQuery();
    const category = query.get('category');
    const [defaultValue, setDefaultValue] = useState('all');

    const handleChange = (value) => {
        let url;

        if (value === 'all') {
            url = '/news';
        } else {
            url = `/news?category=${value}`;
        }

        history.push(url);
    };

    const isDefaultValue = ((options, category) => {
        const option = options.find((option) => option.value === category);

        return option ? option.value : 'all';
    })(options, category);

    useEffect(() => {
        setDefaultValue(isDefaultValue);
    }, [isDefaultValue]);

    console.log('defaultValue', defaultValue);

    return (
        <Select
            defaultValue="all"
            value={defaultValue}
            style={{ minWidth: '160px' }}
            onChange={handleChange}
        >
            {options.map(({ value, label }, i) => (
                <Select.Option value={value} key={i}>
                    {label}
                </Select.Option>
            ))}
        </Select>
    );
}

function NewsList() {
    const { loading, data, error } = useSelector(getNews, shallowEqual);

    if (loading) {
        return (
            <div className="news-page__list news-page__grid">
                {[...Array(24)].map((el, index) => (
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

export default News;
