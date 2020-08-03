import React from 'react';
import { Link } from 'react-router-dom';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import GameCard from '../../components/GameCard';

import './Games.scss';

import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation, A11y]);

const genresList = [
    'Экшен',
    'Шутеры',
    'Ролевые',
    'Стратегии',
    'Симуляторы',
    'Приключения',
    /* 'MOBA', */
    /* 'Аркады',
    'Файтинги',
    'Гонки',
    'Спорт',
    'MMO',
    'Пазлы', */
];

function Games() {
    return (
        <div className="container">
            <section className="games-page__new gp-new">
                <header className="gp-new__heading">
                    <h3 className="gp-new__title">Новые игры</h3>
                    <Link className="gp-new__next-link" to="/">
                        <span>Посмотреть все</span>
                    </Link>
                </header>
                {/* <div className="gp-new__list gp-new__grid">
                    {[...Array(6)].map((dqd, index) => (
                        <GameCard key={index} />
                    ))}
                </div> */}

                <Swiper
                    spaceBetween={30}
                    slidesPerView={6}
                    navigation
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {[...Array(10)].map((dqd, index) => (
                        <SwiperSlide>
                            <GameCard key={index} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className="games-page__genres gp-genres">
                <header className="gp-genres__heading">
                    <h3 className="gp-genres__title">Жанры</h3>
                </header>
                <div className="gp-genres__list gp-genres__grid">
                    {genresList.map((genre, genreIndex) => (
                        <article className="gp-genres__genre gp-genre" key={genreIndex}>
                            <span role="img" aria-label="Panda">
                                🐼
                            </span>
                            <div className="gp-genre__title">{genre}</div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="games-page__popular gp-popular">
                <header className="gp-popular__heading">
                    <h3 className="gp-popular__title">Популярные игры</h3>
                    <Link className="gp-new__next-link" to="/">
                        <span>Посмотреть все</span>
                    </Link>
                </header>
                <div className="gp-popular__list gp-popular__grid">
                    {[...Array(6)].map((dqd, index) => (
                        <GameCard key={index} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Games;
