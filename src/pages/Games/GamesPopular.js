import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

import { fetchGames, setFilterByRating, setFilterByYear } from './actions';
import useQuery from '../../hooks/useQuery';
import FilterPanel from './components/FilterPanel/FilterPanel';
import GamesList from './components/GamesList/GamesList';

import './GamesPopular.scss';

function GamesPopular() {
    const dispatch = useDispatch();
    const query = useQuery();
    const genre = query.get('genre');
    const platform = query.get('platform');

    useEffect(() => {
        dispatch(fetchGames({ platform, genre }));
    }, [dispatch, platform, genre]);

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

    return (
        <div className="container">
            <header className="games-page-popular__heading">
                <h1 className="games-page-popular__title">Популярные игры</h1>
                <Button icon={<FilterOutlined />}>Фильтры</Button>
            </header>

            <FilterPanel />

            <GamesList />
        </div>
    );
}

export default GamesPopular;
