import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { fetchReviews } from './actions';
import { getReviews } from './selectors';

import './Reviews.scss';

function Reviews() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchReviews());
    }, [dispatch]);

    return (
        <div className="container">
            <header className="reviews-page__heading">
                <h1 className="reviews-page__title">Рецензии</h1>
            </header>

            <ReviewsList />
        </div>
    );
}

function ReviewsList() {
    const { loading, data, error } = useSelector(getReviews, shallowEqual);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error...</p>;
    }

    if (data.length === 0) {
        return <p>Упс! У нас нет таких товаров, попробуйте изменить условия поиска.</p>;
    }

    return (
        <div className="reviews-page__list reviews-page__grid">
            {data.map((review) => (
                <ReviewCard {...review} key={review.id} />
            ))}
        </div>
    );
}

function ReviewCard({ title, image }) {
    return (
        <article className="reviews-page__card rp-card">
            <figure className="rp-card__image">
                <img src={image} alt={title} />
            </figure>
            <div className="rp-card__content">
                <h1 className="rp-card__title">{title}</h1>
            </div>
        </article>
    );
}

export default Reviews;
