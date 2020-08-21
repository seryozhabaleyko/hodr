import { SET_RATINGS_VISIBILITY_FILTER, SET_YEARS_VISIBILITY_FILTER } from '../actionTypes';

export const setRatingsVisibilityFilter = (filter) => ({
    type: SET_RATINGS_VISIBILITY_FILTER,
    payload: filter,
});

export const setYearsVisibilityFilter = (filter) => ({
    type: SET_YEARS_VISIBILITY_FILTER,
    payload: filter,
});
