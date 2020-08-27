import { SET_FILTER_BY_GENRE, SET_FILTER_BY_RATING, SET_FILTER_BY_YEAR } from '../actionTypes';

export const setFilterByGenre = (filter) => ({
    type: SET_FILTER_BY_GENRE,
    payload: filter,
});
export const setFilterByRating = (filter) => ({
    type: SET_FILTER_BY_RATING,
    payload: filter,
});

export const setFilterByYear = (filter) => ({
    type: SET_FILTER_BY_YEAR,
    payload: filter,
});
