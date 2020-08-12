import { FETCH_REVIEWS_SUCCESS, FETCH_REVIEWS_FAILURE } from './actionTypes';

const initialState = {
    loading: true,
    data: [],
    error: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_REVIEWS_SUCCESS:
            return { ...state, loading: false, data: payload };
        case FETCH_REVIEWS_FAILURE:
            return { ...state, loading: false, error: payload };

        default:
            return state;
    }
};
