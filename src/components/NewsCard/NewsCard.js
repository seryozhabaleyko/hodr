import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'antd';

import moment from '../../helpers/moment';

import './NewsCard.scss';

function NewsCard({
    title = 'Каждый день миллионы людей ищут фильмы онлайн, и никто не хочет усложнять себе жизнь – и вы наверняка один из них!',
    slug,
    photoUrl = 'https://thumbs.dfs.ivi.ru/storage2/contents/d/0/864e981de08ff8e31e5e352073121c.jpg/285x136/',
    createdAt,
    category = { label: 'Значение', value: 'value', color: 'cyan' },
}) {
    return (
        <article className="news-card">
            <Link to={`/news/${slug}`}>
                <figure className="news-card__image">
                    <Badge.Ribbon
                        className="news-card__category"
                        color={category.color}
                        placement="start"
                        text={category.label}
                    />
                    <picture>
                        <img src={photoUrl} alt={title} />
                    </picture>
                </figure>
                <div className="news-card__content">
                    <h3 className="news-card__title">{title}</h3>

                    <time className="news-card__date-time" dateTime={createdAt}>
                        {moment(createdAt).calendar()}
                    </time>
                </div>
            </Link>
        </article>
    );
}

export default NewsCard;
