import React from 'react';
import { Link } from 'react-router-dom';

import './GameCard.scss';

function GameCard() {
    return (
        <article className="game-card">
            <Link to="/game/slug">
                <figure className="game-card__thumbnail">
                    <img
                        src="https://thumbs.dfs.ivi.ru/storage33/contents/d/1/a1fb63b65c640020a8f00d2a31afb6.jpg/234x360/"
                        alt="The Elder Scrolls 5: Skyrim"
                    />
                </figure>
                <div className="game-card__content">
                    <h2 className="game-card__title">Grand Theft Auto 5</h2>
                    <span className="game-card__developer">Rockstar Games,</span>
                    <span className="game-card__date"> 2020</span>
                </div>
            </Link>
        </article>
    );
}

export default GameCard;
