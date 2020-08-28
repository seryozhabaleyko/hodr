import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { getGames } from '../../selectors';
import GameCard, { GameCardSkeleton } from '../../../../components/GameCard';

function GamesList() {
    const { loading, items = [], error } = useSelector(getGames, shallowEqual);

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
        return <p className="error__message">{error.message}</p>;
    }

    return (
        <div className="games-page-popular__list games-page-popular__grid">
            {[...items, ...Array(41)].map((game, elIndex) => (
                <GameCard {...game} key={elIndex} />
            ))}
        </div>
    );
}

export default GamesList;
