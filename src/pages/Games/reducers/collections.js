import {
    FETCH_COLLECTION_NEW_GAMES_REQUEST,
    FETCH_COLLECTION_NEW_GAMES_SUCCESS,
    FETCH_COLLECTION_NEW_GAMES_FAILURE,
    FETCH_COLLECTION_POPULAR_GAMES_REQUEST,
    FETCH_COLLECTION_POPULAR_GAMES_SUCCESS,
    FETCH_COLLECTION_POPULAR_GAMES_FAILURE,
} from '../actionTypes';

const initialState = {
    new: {
        loading: false,
        items: [],
        error: null,
    },
    popular: {
        loading: false,
        items: [],
        error: null,
    },
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_COLLECTION_NEW_GAMES_REQUEST:
            return { ...state, new: { ...state.new, loading: true, error: null } };
        case FETCH_COLLECTION_NEW_GAMES_SUCCESS:
            return { ...state, new: { ...state.new, loading: false, items: payload } };
        case FETCH_COLLECTION_NEW_GAMES_FAILURE:
            return { ...state, new: { ...state.new, loading: false, error: payload } };

        case FETCH_COLLECTION_POPULAR_GAMES_REQUEST:
            return { ...state, popular: { ...state.popular, loading: true, error: null } };
        case FETCH_COLLECTION_POPULAR_GAMES_SUCCESS:
            return { ...state, popular: { ...state.popular, loading: false, items: payload } };
        case FETCH_COLLECTION_POPULAR_GAMES_FAILURE:
            return { ...state, popular: { ...state.popular, loading: false, error: payload } };
        default:
            return state;
    }
};
