import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Button } from 'antd';

import GameCard, { GameCardSkeleton } from '../../components/GameCard';
import { fetchGames } from './actions';
import { getPopularGames } from './selectors';

import './GamesPopular.scss';

function GamesPopular() {
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = 'Популярные игры - Hodr - компьютерные игры';
    }, []);

    useEffect(() => {
        dispatch(fetchGames());
    }, [dispatch]);

    return (
        <div className="container">
            <header className="games-page-popular__heading">
                <h1 className="games-page-popular__title">Популярные игры</h1>
                <Button HtmlType="button">Фильтры</Button>
            </header>

            <div className="games-page-popular__filters">filters</div>

            <GamesPopularList />
        </div>
    );
}

function GamesPopularList() {
    const { loading, items = [], error } = useSelector(getPopularGames, shallowEqual);

    if (loading) {
        return (
            <div className="games-page-popular__list games-page-popular__grid">
                {[...Array(42)].map((el, elIndex) => (
                    <GameCardSkeleton key={elIndex} />
                ))}
            </div>
        );
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <div className="games-page-popular__list games-page-popular__grid">
            {[...items, ...Array(41)].map((game, elIndex) => (
                <GameCard {...game} key={elIndex} />
            ))}
        </div>
    );
}

export default GamesPopular;
