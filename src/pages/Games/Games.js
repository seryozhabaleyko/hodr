import React, { useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

import { fetchGames, setFilterByRating, setFilterByYear } from './actions';
import useQuery from '../../hooks/useQuery';
import FilterPanel from './components/FilterPanel';
import GamesList from './components/GamesList';

import './Games.scss';

function GamesPage() {
    const dispatch = useDispatch();
    const { something } = useParams();
    const query = useQuery();
    const genre = query.get('genre');
    const platform = query.get('platform');

    useEffect(() => {
        dispatch(fetchGames({ orderBy: something, platform, genre }));
    }, [dispatch, something, platform, genre]);

    useEffect(() => {
        document.title = 'Популярные игры - Hodr - компьютерные игры';

        const ratings = query.get('ratings');
        const years = query.get('years');

        if (ratings) {
            dispatch(setFilterByRating(ratings));
        }

        if (years) {
            dispatch(setFilterByYear(years));
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (something !== 'popular' && something !== 'new') {
        return <Redirect to="/games/popular" />;
    }

    return (
        <div className="container">
            <header className="games-page-popular__heading">
                <h1 className="games-page-popular__title">
                    {something === 'popular' && 'Популярные игры'}
                    {something === 'new' && 'Новые игры'}
                </h1>
                <Button icon={<FilterOutlined />}>Фильтры</Button>
            </header>

            <FilterPanel />

            <GamesList />
        </div>
    );
}

export default GamesPage;
