import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Slick from 'react-slick';

import { Swiper, SwiperSlide } from 'swiper/react';

import GameCard from '../../components/GameCard';
import { fetchGames } from './actions';

import './Games.scss';
import 'swiper/components/pagination/pagination.scss';
import Genres from './components/Genres/Genres';

function Games({ fetchGames, games }) {
    useEffect(() => {
        fetchGames();
    }, [fetchGames]);

    const { data = [] } = games;

    console.log('data', data);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
    };

    return (
        <div className="container">
            <section className="games-page__new gp-new">
                <header className="gp-new__heading">
                    <h3 className="gp-new__title">Новые игры</h3>
                    <Link className="gp-new__next-link" to="/games/popular">
                        <span>Посмотреть все</span>
                    </Link>
                </header>

                <Slick {...settings}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                </Slick>

                <Swiper spaceBetween={30} slidesPerView={7} pagination={{ clickable: true }}>
                    {[...data, ...Array(10)].map((game, index) => (
                        <SwiperSlide key={index}>
                            <GameCard {...game} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <Genres />

            <section className="games-page__popular gp-popular">
                <header className="gp-popular__heading">
                    <h3 className="gp-popular__title">Популярные игры</h3>
                    <Link className="gp-new__next-link" to="/games/popular">
                        <span>Посмотреть все</span>
                    </Link>
                </header>
                {/* <div className="gp-popular__list gp-popular__grid">
                    {[...Array(6)].map((dqd, index) => (
                        <GameCard key={index} />
                    ))}
                </div> */}
                <Swiper spaceBetween={30} slidesPerView={6}>
                    {[...Array(10)].map((el, index) => (
                        <SwiperSlide key={index}>
                            <GameCard />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </div>
    );
}

const mapStateToProps = (state) => ({
    games: {
        loading: state.games.loading,
        data: state.games.data,
        error: state.games.error,
    },
});

const mapDispatchToProps = {
    fetchGames,
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);
