import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import marked from 'marked';

import { fetchNewsSingle } from './actions';
import { getNewsSingle } from './selectors';

import './NewsSingle.scss';
import { Link } from 'react-router-dom';

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
                    <div>
                        <time className="news-single__date-time" dateTime={createdAt}>
                            {createdAt}
                        </time>
                        <br />
                        <Link to={`/user/${author.username}`}>
                            <span className="news-single__author">{author.username}</span>
                        </Link>
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
