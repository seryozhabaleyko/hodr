import {
    FETCH_NEWS_SINGLE_REQUEST,
    FETCH_NEWS_SINGLE_SUCCESS,
    FETCH_NEWS_SINGLE_FAILURE,
} from './actionTypes';

const initialState = {
    loading: true,
    data: {},
    error: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_NEWS_SINGLE_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_NEWS_SINGLE_SUCCESS:
            return { ...state, loading: false, data: payload };
        case FETCH_NEWS_SINGLE_FAILURE:
            return { ...state, loading: false, error: payload };

        default:
            return state;
    }
};
