import React from 'react';

import NewsCard from '../../components/NewsCard';

import './GameNews.scss';

function GameNews() {
    return (
        <div className="game-news game-news__list game-news__grid">
            {[...Array(24)].map((news, index) => (
                <NewsCard {...news} key={index} />
            ))}
        </div>
    );
}

export default GameNews;
