import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import marked from 'marked';

import { fetchNewsSingle } from './actions';
import { getNewsSingle } from './selectors';
import { formatDate } from '../../helpers/formatDate';

import './NewsSingle.scss';
import { Avatar } from 'evergreen-ui';

function NewsSingle({ match }) {
    const { slug } = match.params;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNewsSingle(slug));
    }, [dispatch, slug]);

    const { loading, data, error } = useSelector(getNewsSingle, shallowEqual);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p className="error__message">{error.messages}</p>;
    }

    const { title = '', author = '', summery = '', body = '', createdAt } = data;

    return (
        <article className="news-single-page">
            <div className="container">
                <header className="news-single-page__heading">
                    <h1 className="news-single-page__title">{title}</h1>
                    <div className="news-single-page__details">
                        <div className="author">
                            <div className="author__image">
                                <Avatar src={author.avatar} size={40} />
                            </div>
                            <div className="author__body">
                                <Link to={`/user/${author.username}`}>
                                    <span className="news-single__author">{`${author.name} ${author.surname}`}</span>
                                </Link>
                                <br />
                                <time className="news-single__date-time" dateTime={createdAt}>
                                    {formatDate(new Date(createdAt))}
                                </time>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="news-single__summery">
                    <p>
                        <strong>{summery}</strong>
                    </p>
                </div>

                <div
                    className="news-single__body"
                    dangerouslySetInnerHTML={{ __html: marked(body) }}
                />
            </div>
        </article>
    );
}

export default NewsSingle;
