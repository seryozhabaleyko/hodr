import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import { fetchGenres } from '../../actions';
import { getGenres } from '../../selectors';
import Genre from './Genre';
import GenreSkeleton from './GenreSkeleton';

function GenresList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGenres());
    }, [dispatch]);

    const { loading = true, data = [], error = null } = useSelector(getGenres, shallowEqual);

    if (loading) {
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
                <SwiperSlide key={genre.value}>
                    <Genre {...genre} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default GenresList;
