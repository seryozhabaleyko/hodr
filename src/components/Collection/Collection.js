import React from 'react';
import { Link } from 'react-router-dom';

import './Collection.scss';

function Collection({ title = 'Something', linkToFullCollection, children }) {
    return (
        <section className="collection">
            <header className="collection__heading">
                <h1 className="collection__title">{title}</h1>
                {linkToFullCollection && (
                    <Link to={linkToFullCollection} className="collection__link-to-full-collection">
                        <span>Посмотреть все</span>
                    </Link>
                )}
            </header>

            {children}
        </section>
    );
}

export default Collection;
