import {
    FETCH_COLLECTION_NEW_GAMES_REQUEST,
    FETCH_COLLECTION_NEW_GAMES_SUCCESS,
    FETCH_COLLECTION_NEW_GAMES_FAILURE,
    FETCH_COLLECTION_POPULAR_GAMES_REQUEST,
    FETCH_COLLECTION_POPULAR_GAMES_SUCCESS,
    FETCH_COLLECTION_POPULAR_GAMES_FAILURE,
} from '../actionTypes';
import { fetchCollectionNewGamesApi, fetchCollectionPopularGamesApi } from '../../../helpers/api';

const fetchCollectionNewGamesRequest = () => ({
    type: FETCH_COLLECTION_NEW_GAMES_REQUEST,
});

const fetchCollectionNewGamesSuccess = (games) => ({
    type: FETCH_COLLECTION_NEW_GAMES_SUCCESS,
    payload: games,
});

const fetchCollectionNewGamesFailure = (error) => ({
    type: FETCH_COLLECTION_NEW_GAMES_FAILURE,
    payload: error,
});

export const fetchCollectionNewGames = () => async (dispatch) => {
    dispatch(fetchCollectionNewGamesRequest());
    try {
        const response = await fetchCollectionNewGamesApi();
        dispatch(fetchCollectionNewGamesSuccess(response));
    } catch (error) {
        dispatch(fetchCollectionNewGamesFailure(error));
    }
};

const fetchCollectionPopularGamesRequest = () => ({
    type: FETCH_COLLECTION_POPULAR_GAMES_REQUEST,
});

const fetchCollectionPopularGamesSuccess = (games) => ({
    type: FETCH_COLLECTION_POPULAR_GAMES_SUCCESS,
    payload: games,
});

const fetchCollectionPopularGamesFailure = (error) => ({
    type: FETCH_COLLECTION_POPULAR_GAMES_FAILURE,
    payload: error,
});

export const fetchCollectionPopularGames = () => async (dispatch) => {
    dispatch(fetchCollectionPopularGamesRequest());
    try {
        const response = await fetchCollectionPopularGamesApi();
        dispatch(fetchCollectionPopularGamesSuccess(response));
    } catch (error) {
        dispatch(fetchCollectionPopularGamesFailure(error));
    }
};
