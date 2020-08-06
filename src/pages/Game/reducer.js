import { FETCH_GAME_REQUEST, FETCH_GAME_SUCCESS, FETCH_GAME_FAILURE } from './actionTypes';

const initialState = {
    loading: true,
    data: [],
    error: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        /* case FETCH_GAME_REQUEST:
            return { ...state, loading: true, error: null }; */
        case FETCH_GAME_SUCCESS:
            return { ...state, loading: false, data: payload };
        case FETCH_GAME_FAILURE:
            return { ...state, loading: false, error: payload };

        default:
            return state;
    }
};
