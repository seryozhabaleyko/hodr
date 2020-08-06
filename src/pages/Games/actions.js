import {
    FETCH_GAMES_REQUEST,
    FETCH_GAMES_SUCCESS,
    FETCH_GAMES_FAILURE,
    FETCH_GENRES_REQUEST,
    FETCH_GENRES_SUCCESS,
    FETCH_GENRES_FAILURE,
} from './actionTypes';
import { fetchGamesApi, fetchGenresApi } from '../../helpers/games';

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
    //dispatch(fetchGamesRequest());

    try {
        const response = await fetchGamesApi();
        dispatch(fetchGamesSuccess(response));
    } catch (error) {
        dispatch(fetchGamesFailure(error));
    }
};

const fetchGenresRequest = () => ({
    type: FETCH_GENRES_REQUEST,
});

const fetchGenresSuccess = (genres) => ({
    type: FETCH_GENRES_SUCCESS,
    payload: genres,
});

const fetchGenresFailure = (error) => ({
    type: FETCH_GENRES_FAILURE,
    payload: error,
});

export const fetchGenres = () => async (dispatch) => {
    // dispatch(fetchGenresRequest());

    try {
        const response = await fetchGenresApi();
        dispatch(fetchGenresSuccess(response));
    } catch (error) {
        dispatch(fetchGenresFailure(error));
    }
};
