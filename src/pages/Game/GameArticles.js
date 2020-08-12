import React from 'react';

import ArticleCard from '../../components/ArticleCard';

import './GameArticles.scss';

function GameArticles() {
    return (
        <div className="game-articles game-articles__list game-articles__grid">
            {[...Array(24)].map((article, index) => (
                <ArticleCard {...article} key={index} />
            ))}
        </div>
    );
}

export default GameArticles;
