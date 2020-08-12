import {
    FETCH_GAMES_SUCCESS,
    FETCH_GAMES_FAILURE,
    FETCH_GENRES_SUCCESS,
    FETCH_GENRES_FAILURE,
} from './actionTypes';
import { fetchGamesApi, fetchGenresApi } from '../../helpers/games';

const fetchGamesSuccess = (games) => ({
    type: FETCH_GAMES_SUCCESS,
    payload: games,
});

const fetchGamesFailure = (error) => ({
    type: FETCH_GAMES_FAILURE,
    payload: error,
});

export const fetchGames = () => async (dispatch) => {
    try {
        const response = await fetchGamesApi();
        dispatch(fetchGamesSuccess(response));
    } catch (error) {
        dispatch(fetchGamesFailure(error));
    }
};

const fetchGenresSuccess = (genres) => ({
    type: FETCH_GENRES_SUCCESS,
    payload: genres,
});

const fetchGenresFailure = (error) => ({
    type: FETCH_GENRES_FAILURE,
    payload: error,
});

export const fetchGenres = () => async (dispatch) => {
    try {
        const response = await fetchGenresApi();
        dispatch(fetchGenresSuccess(response));
    } catch (error) {
        dispatch(fetchGenresFailure(error));
    }
};
