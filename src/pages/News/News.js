import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Select } from 'antd';

import { fetchNews, fetchNewsByCategory } from './actions';
import { getNews } from './selectors';
import { options } from './constants';
import { NewsCardSkeleton } from './components/NewsCard';
import NewsCard from '../../components/NewsCard';
import useQuery from '../../hooks/useQuery';
import useQueryState from '../../hooks/useQueryState';

import './News.scss';

function News() {
    const dispatch = useDispatch();
    const query = useQuery();
    const isCurrentCategory = query.get('category');
    const currentPage = query.get('page');

    useEffect(() => {
        if (!isCurrentCategory) {
            dispatch(fetchNews());
        } else {
            dispatch(fetchNewsByCategory(isCurrentCategory));
        }
    }, [dispatch, isCurrentCategory]);

    useEffect(() => {
        if (currentPage) {
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
    const [category, setCategory] = useQueryState('category', 'all');

    const handleSelectChange = (newValue) => {
        setCategory(newValue);
    };

    return (
        <Select
            options={options}
            defaultValue="all"
            style={{ minWidth: '160px' }}
            value={category}
            onChange={handleSelectChange}
        />
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
