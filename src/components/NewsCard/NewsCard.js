import React from 'react';
import { Link } from 'react-router-dom';

import { formatDate } from '../../helpers/formatDate';

import './NewsCard.scss';

function NewsCard({ title, slug, createdAt }) {
    return (
        <article className="news-card">
            <div className="news-card__image"></div>
            <div className="news-card__content">
                <Link to={`news/${slug}`}>
                    <h3 className="news-card__title">{title}</h3>
                </Link>
                <time className="news-card__date-time" dateTime={createdAt}>
                    {formatDate(new Date(createdAt))}
                </time>
            </div>
        </article>
    );
}

export default NewsCard;
