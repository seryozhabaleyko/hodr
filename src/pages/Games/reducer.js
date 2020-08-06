import {
    FETCH_GAMES_REQUEST,
    FETCH_GAMES_SUCCESS,
    FETCH_GAMES_FAILURE,
    FETCH_GENRES_REQUEST,
    FETCH_GENRES_SUCCESS,
    FETCH_GENRES_FAILURE,
} from './actionTypes';

const initialState = {
    loading: false,
    data: {},
    error: null,
    genres: {
        loading: false,
        data: {},
        error: null,
    },
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_GAMES_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_GAMES_SUCCESS:
            return { ...state, loading: false, data: payload };
        case FETCH_GAMES_FAILURE:
            return { ...state, loading: false, error: payload };

        case FETCH_GENRES_REQUEST:
            return { ...state, genres: { loading: true, error: null } };
        case FETCH_GENRES_SUCCESS:
            return { ...state, genres: { loading: false, data: payload } };
        case FETCH_GENRES_FAILURE:
            return { ...state, genres: { loading: false, error: payload } };

        default:
            return state;
    }
};
