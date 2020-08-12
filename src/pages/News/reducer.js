import { FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE } from './actionTypes';

const initialState = {
    loading: true,
    data: [],
    error: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_NEWS_SUCCESS:
            return { ...state, loading: false, data: payload };
        case FETCH_NEWS_FAILURE:
            return { ...state, loading: false, error: payload };
        default:
            return state;
    }
};
