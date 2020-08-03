import React, { useEffect, useState } from 'react';
import { db } from '../../services/firebase';
import GameCard from '../../components/GameCard';

import './GamesPopular.scss';

function GamesPopular() {
    const [gamesList, setGamesList] = useState({});

    useEffect(() => {
        document.title = 'Популярные игры - Hodr - компьютерные игры';
    });

    useEffect(() => {
        db.ref('games')
            .once('value')
            .then((snapshot) => {
                setGamesList(snapshot.val());
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    console.log('gamesList', gamesList);

    return (
        <div className="container">
            <header className="games-page-popular__heading">
                <h1 className="games-page-popular__title">Популярные игры</h1>
                <button type="button">Filters</button>
            </header>

            <div className="games-page-popular__filters">filters</div>

            <div className="games-page-popular__list games-page-popular__grid">
                {[...Object.values(gamesList), ...Array(42)].map((game, elIndex) => (
                    <GameCard {...game} key={elIndex} />
                ))}
            </div>
        </div>
    );
}

export default GamesPopular;
