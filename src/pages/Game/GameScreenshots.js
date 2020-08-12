import React from 'react';

import ScreenshotCard from '../../components/ScreenshotCard';

import './GameScreenshots.scss';

function GameScreenshots() {
    return (
        <div className="game-screenshots__list game-screenshots__grid">
            {[...Array(24)].map((screenshot, index) => (
                <ScreenshotCard {...screenshot} key={index} />
            ))}
        </div>
    );
}

export default GameScreenshots;
