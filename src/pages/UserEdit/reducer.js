import { UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE } from './actionTypes';

const initialState = {
    loading: false,
    error: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATE_USER_REQUEST:
            return { ...state, loading: true, error: null };
        case UPDATE_USER_SUCCESS:
            return { ...state, loading: false };
        case UPDATE_USER_FAILURE:
            return { ...state, loading: false, error: payload };

        default:
            return state;
    }
};
