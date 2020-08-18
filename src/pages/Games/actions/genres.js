import { FETCH_GENRES_REQUEST, FETCH_GENRES_SUCCESS, FETCH_GENRES_FAILURE } from '../actionTypes';
import { fetchGenresApi } from '../../../helpers/api';

const fetchGenresRequest = () => ({
    type: FETCH_GENRES_REQUEST,
});

const fetchGenresSuccess = (data) => ({
    type: FETCH_GENRES_SUCCESS,
    payload: data,
});

const fetchGenresFailure = (error) => ({
    type: FETCH_GENRES_FAILURE,
    payload: error,
});

export const fetchGenres = () => async (dispatch) => {
    dispatch(fetchGenresRequest());
    try {
        const response = await fetchGenresApi();
        dispatch(fetchGenresSuccess(response));
    } catch (error) {
        dispatch(fetchGenresFailure(error));
    }
};
