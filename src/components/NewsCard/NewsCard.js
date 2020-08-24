import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ru';

import { formatDate } from '../../helpers/formatDate';

import './NewsCard.scss';

moment.locale('ru');

function NewsCard({ title, slug, photoUrl, createdAt }) {
    return (
        <article className="news-card">
            <div className="news-card__image">
                <img src={photoUrl} alt={title} />
            </div>
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
