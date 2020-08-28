import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import GameCard, { GameCardSkeleton } from '../../../../components/GameCard';

import './GamesCollection.scss';

const settings = {
    className: 'collections-slider',
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 3,
    swipe: false,
    nextArrow: (
        <button type="button">
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
                />
            </svg>
        </button>
    ),
    prevArrow: (
        <button type="button">
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
                />
            </svg>
        </button>
    ),
};

function GamesCollection({ title = '', linkToFullCollection = '/', loading, items = [], error }) {
    return (
        <section className="games-collection">
            <header className="games-collection__heading">
                <h1 className="games-collection__title">{title}</h1>
                <Link
                    className="games-collection__link-to-full-collection"
                    to={linkToFullCollection}
                >
                    <span>Посмотреть все</span>
                </Link>
            </header>

            <Slider {...settings}>
                {[...Array(21)].map((el, index) => (
                    <div key={index}>
                        <GameCard />
                    </div>
                ))}
            </Slider>
        </section>
    );
}

export default GamesCollection;
