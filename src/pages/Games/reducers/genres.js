import { FETCH_GENRES_REQUEST, FETCH_GENRES_SUCCESS, FETCH_GENRES_FAILURE } from '../actionTypes';

const initialState = {
    loading: false,
    data: {},
    error: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_GENRES_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_GENRES_SUCCESS:
            return { ...state, loading: false, data: payload };
        case FETCH_GENRES_FAILURE:
            return { ...state, loading: false, error: payload };
        default:
            return state;
    }
};
