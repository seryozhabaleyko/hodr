import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import slugify from 'slugify';

import { db, firestore } from '../../../../services/firebase';

import './Genres.scss';

function Genres() {
    const [loading, setLoading] = useState(false);
    const [genres, setGenres] = useState([]);

    const [genre, setGenre] = useState('');
    const [slug, setSlug] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;

        const slugValue = slugify(value, { lower: true });

        if (name === 'genre') {
            setGenre(value);
            setSlug(slugValue);
        } else if (name === 'slug') {
            setSlug(slugValue);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const id = uuid();
        const title = genre.trim();

        setLoading(true);
        db.ref(`genres/games/${id}`)
            .set({ id, title, slug })
            .then(() => {
                db.ref('genres/games')
                    .once('value')
                    .then((dataSnapshot) => {
                        setGenres(Object.values(dataSnapshot.val()));
                        setLoading(false);
                    });
            });
        setGenre('');
        setSlug('');

        firestore
            .collection('genres')
            .add({ id, title, slug })
            .then(function (docRef) {
                console.log('docRef', docRef);
                console.log('Document written with ID: ', docRef.id);
            })
            .catch(function (error) {
                console.error('Error adding document: ', error);
            });
    };

    return (
        <section className="admin-genres">
            <header className="admin-genres__heading">
                <h1 className="admin-genres__title">Genres</h1>
            </header>

            <div className="admin-genres__list admin-genres__grid">
                {genres.map((genre) => (
                    <div key={genre.id}>{genre.title}</div>
                ))}
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        className="form-control"
                        name="genre"
                        type="text"
                        value={genre}
                        onChange={handleChange}
                        placeholder="title"
                    />
                </div>
                <div>
                    <input
                        className="form-control"
                        name="slug"
                        type="text"
                        value={slug}
                        onChange={handleChange}
                        placeholder="slug"
                    />
                </div>
                <div>
                    <button type="submit" disabled={loading}>
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Genres;
