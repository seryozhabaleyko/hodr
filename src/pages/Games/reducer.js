import {
    FETCH_GAMES_REQUEST,
    FETCH_GAMES_SUCCESS,
    FETCH_GAMES_FAILURE,
    FETCH_GENRES_SUCCESS,
    FETCH_GENRES_FAILURE,
    FETCH_GENRES_REQUEST,
    FETCH_PLATFORMS_REQUEST,
    FETCH_PLATFORMS_SUCCESS,
    FETCH_PLATFORMS_FAILURE,
} from './actionTypes';

const initialState = {
    loading: true,
    data: [],
    error: null,
    platforms: {
        loading: true,
        data: [],
        error: null,
    },
    genres: {
        loading: true,
        data: [],
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

        case FETCH_PLATFORMS_REQUEST:
            return { ...state, platforms: { ...state.platforms, loading: true, error: null } };
        case FETCH_PLATFORMS_SUCCESS:
            return { ...state, platforms: { ...state.platforms, loading: false, data: payload } };
        case FETCH_PLATFORMS_FAILURE:
            return { ...state, platforms: { ...state.platforms, loading: false, error: payload } };

        case FETCH_GENRES_REQUEST:
            return { ...state, genres: { ...state.genres, loading: true, error: null } };
        case FETCH_GENRES_SUCCESS:
            return { ...state, genres: { ...state.genres, loading: false, data: payload } };
        case FETCH_GENRES_FAILURE:
            return { ...state, genres: { ...state.genres, loading: false, error: payload } };

        default:
            return state;
    }
};
