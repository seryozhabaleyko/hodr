import { FETCH_GAMES_REQUEST, FETCH_GAMES_SUCCESS, FETCH_GAMES_FAILURE } from '../actionTypes';
import { fetchGamesApi } from '../../../helpers/api';

const fetchGamesRequest = () => ({
    type: FETCH_GAMES_REQUEST,
});

const fetchGamesSuccess = (games) => ({
    type: FETCH_GAMES_SUCCESS,
    payload: games,
});

const fetchGamesFailure = (error) => ({
    type: FETCH_GAMES_FAILURE,
    payload: error,
});

export const fetchGames = () => async (dispatch) => {
    dispatch(fetchGamesRequest());
    try {
        const response = await fetchGamesApi();
        dispatch(fetchGamesSuccess(response));
    } catch (error) {
        dispatch(fetchGamesFailure(error));
    }
};
