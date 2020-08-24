import { FETCH_GAME_SUCCESS, FETCH_GAME_FAILURE } from './actionTypes';
import { fetchGameApi } from '../../helpers/api';

const fetchGameSuccess = (data) => ({
    type: FETCH_GAME_SUCCESS,
    payload: data,
});

const fetchGameFailure = (error) => ({
    type: FETCH_GAME_FAILURE,
    payload: error,
});

export const fetchGame = (slug) => async (dispatch) => {
    try {
        const response = await fetchGameApi(slug);
        dispatch(fetchGameSuccess(response));
    } catch (error) {
        dispatch(fetchGameFailure(error));
    }
};
