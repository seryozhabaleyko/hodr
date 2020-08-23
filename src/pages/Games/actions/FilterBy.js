import { SET_FILTER_BY_RATING, SET_FILTER_BY_YEAR } from '../actionTypes';

export const setFilterByRating = (filter) => ({
    type: SET_FILTER_BY_RATING,
    payload: filter,
});

export const setFilterByYear = (filter) => ({
    type: SET_FILTER_BY_YEAR,
    payload: filter,
});
