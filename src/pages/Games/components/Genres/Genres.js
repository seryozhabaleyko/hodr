import React from 'react';

import GenresList from './GenresList';

import './Genres.scss';

function Genres() {
    return (
        <section className="games-page__genres gp-genres">
            <header className="gp-genres__heading">
                <h3 className="gp-genres__title">Жанры</h3>
            </header>
            <GenresList />
        </section>
    );
}

export default Genres;
