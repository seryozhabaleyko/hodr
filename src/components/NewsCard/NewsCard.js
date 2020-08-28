import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ru';

import { formatDate } from '../../helpers/formatDate';

import './NewsCard.scss';

moment.locale('ru');

function NewsCard({
    title = 'something',
    slug,
    photoUrl = 'https://thumbs.dfs.ivi.ru/storage2/contents/d/0/864e981de08ff8e31e5e352073121c.jpg/285x136/',
    createdAt,
}) {
    return (
        <article className="news-card">
            <figure className="news-card__image">
                <img src={photoUrl} alt={title} />
            </figure>
            <div className="news-card__content">
                <Link to={`news/${slug}`}>
                    <h3 className="news-card__title">{title}</h3>
                </Link>
                <time className="news-card__date-time" dateTime={createdAt}>
                    {formatDate(new Date(createdAt))}
                    <br />
                    {moment().calendar()}
                </time>
            </div>
        </article>
    );
}

export default NewsCard;
