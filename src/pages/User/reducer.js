import { FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './actionTypes';

const initialState = {
    loading: true,
    data: {},
    error: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_USER_SUCCESS:
            return { ...state, loading: false, data: payload };
        case FETCH_USER_FAILURE:
            return { ...state, loading: false, error: payload };

        default:
            return state;
    }
};
