import React from 'react';
import { Link } from 'react-router-dom';

function Genre({ label, value }) {
    return (
        <Link to={`/games/${value}/popular`}>
            <article className="gp-genres__genre gp-genre">
                <span role="img" aria-label="Panda">
                    🐼
                </span>
                <div className="gp-genre__title">{label}</div>
            </article>
        </Link>
    );
}

export default Genre;
