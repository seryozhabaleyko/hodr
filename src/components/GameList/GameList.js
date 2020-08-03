import React from 'react';

import GameCard from '../GameCard';

import './GameList.scss';

function GameList() {
    return (
        <div className="game-list games-grid">
            {[...Array(40)].map((game, gameIndex) => (
                <GameCard key={gameIndex} />
            ))}
        </div>
    );
}

export default GameList;
