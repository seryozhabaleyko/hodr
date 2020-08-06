import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import { fetchGenres } from '../../actions';
import { getGenres } from '../../selectors';
import Genre from './Genre';
import GenreSkeleton from './GenreSkeleton';

function GenresList({ fetchGenres, genres }) {
    useEffect(() => {
        fetchGenres();
    }, [fetchGenres]);

    const { loading = true, data = [], error = null } = genres;

    if (loading || (data.length === 0 && !error)) {
        return (
            <div className="gp-genres__list gp-genres__grid">
                {[...Array(6)].map((el, index) => (
                    <GenreSkeleton key={index} />
                ))}
            </div>
        );
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <Swiper spaceBetween={30} slidesPerView={7}>
            {data.map((genre) => (
                <SwiperSlide key={genre.id}>
                    <Genre {...genre} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

const mapStateToProps = (state) => ({
    genres: getGenres(state),
});

const mapDispatchToProps = {
    fetchGenres,
};

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
