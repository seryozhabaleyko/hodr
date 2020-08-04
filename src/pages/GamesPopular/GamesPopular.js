import React, { useEffect, useState } from 'react';
import { db } from '../../services/firebase';
import GameCard, { GameCardSkeleton } from '../../components/GameCard';

import './GamesPopular.scss';

function GamesPopular() {
    useEffect(() => {
        document.title = 'Популярные игры - Hodr - компьютерные игры';
    });

    return (
        <div className="container">
            <header className="games-page-popular__heading">
                <h1 className="games-page-popular__title">Популярные игры</h1>
                <button type="button">Filters</button>
            </header>

            <div className="games-page-popular__filters">filters</div>

            <GamesPopularList />
        </div>
    );
}

function GamesPopularList() {
    const [loading, setLoading] = useState(false);
    const [gamesList, setGamesList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        try {
            db.ref('games')
                .once('value')
                .then((snapshot) => {
                    setGamesList(Object.values(snapshot.val()));
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error);
                    setLoading(false);
                });
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }, []);

    console.log(gamesList);

    /* console.log(loading);
    console.log(!Object.values(gamesList).length);
    console.log(!error); */
    // || (!Object.values(gamesList).length && !error)
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
            {[...gamesList, ...Array(41)].map((game, elIndex) => (
                <GameCard {...game} key={elIndex} />
            ))}
        </div>
    );
}

export default GamesPopular;
