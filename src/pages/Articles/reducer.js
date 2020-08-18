import {
    FETCH_ARTICLES_REQUEST,
    FETCH_ARTICLES_FAILURE,
    FETCH_ARTICLES_SUCCESS,
} from './actionTypes';

const initialState = {
    loading: true,
    data: [],
    error: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_ARTICLES_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_ARTICLES_SUCCESS:
            return { ...state, loading: false, data: payload };
        case FETCH_ARTICLES_FAILURE:
            return { ...state, loading: false, error: payload };

        default:
            return state;
    }
};
