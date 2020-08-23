import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { fetchGames } from './actions';
import { getCollectionNewGames } from './selectors';
import Genres from './components/Genres/Genres';
import GamesCollection from './components/GamesCollection/GamesCollection';

import './Games.scss';

function Games() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGames());
    }, [dispatch]);

    const { items = [] } = useSelector(getCollectionNewGames, shallowEqual);

    console.log('new games', items);

    return (
        <div className="container">
            <GamesCollection title="Популярные игры" linkToFullCollection="/games/popular" />

            <Genres />

            <GamesCollection title="Новые игры" linkToFullCollection="/games/new" />

            <GamesCollection
                title="Лучшие игры про зомби"
                linkToFullCollection="/games/collection/best-zombie"
            />

            <GamesCollection
                title="Лучшие военные игры"
                linkToFullCollection="/games/collection/best-military"
            />
        </div>
    );
}

export default Games;
