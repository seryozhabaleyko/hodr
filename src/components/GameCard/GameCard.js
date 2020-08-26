import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';
import moment from 'moment';

import './GameCard.scss';

moment.locale('ru');

function GameCard({
    title = 'Grand Theft Auto 5',
    slug,
    photoUrl = 'https://thumbs.dfs.ivi.ru/storage33/contents/d/1/a1fb63b65c640020a8f00d2a31afb6.jpg/234x360/',
    developer = 'developer',
    releaseDate,
}) {
    const releaseDateNow = releaseDate?.toMillis();

    const releaseYear = releaseDate?.toDate()?.getFullYear();

    const isSoon = releaseDateNow > Date.now();

    const numberOfDaysPassed = moment().diff(moment(releaseDateNow), 'days');

    const isNovelty = numberOfDaysPassed >= 0 && numberOfDaysPassed <= 2;

    return (
        <article className="game-card">
            <Link to={`/game/${slug}`}>
                <figure className="game-card__thumbnail">
                    {isSoon && (
                        <Badge.Ribbon
                            className="thumbnail__ribbon"
                            placement="start"
                            text="Скоро"
                        />
                    )}
                    {isNovelty && (
                        <Badge.Ribbon
                            className="thumbnail__ribbon"
                            placement="start"
                            text="Новинка"
                            color="green"
                        />
                    )}
                    <img src={photoUrl} alt="The Elder Scrolls 5: Skyrim" />
                </figure>
                <div className="game-card__content">
                    <h2 className="game-card__title">{title}</h2>
                    <span className="game-card__developer">{developer},</span>{' '}
                    <span className="game-card__date">{releaseYear || 'year'}</span>
                </div>
            </Link>
        </article>
    );
}

export default GameCard;
