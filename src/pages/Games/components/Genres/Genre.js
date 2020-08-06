import React from 'react';
import { Link } from 'react-router-dom';

function Genre({ title, slug }) {
    return (
        <Link to={`/games/${slug}`}>
            <article className="gp-genres__genre gp-genre">
                <span role="img" aria-label="Panda">
                    🐼
                </span>
                <div className="gp-genre__title">{title}</div>
            </article>
        </Link>
    );
}

export default Genre;
