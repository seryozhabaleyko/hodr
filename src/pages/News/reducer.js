import {
    FETCH_NEWS_REQUEST,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAILURE,
    FETCH_NEWS_BY_CATEGORY_REQUEST,
    FETCH_NEWS_BY_CATEGORY_SUCCESS,
    FETCH_NEWS_BY_CATEGORY_FAILURE,
    SET_CURRENT_PAGE,
} from './actionTypes';

const initialState = {
    loading: true,
    data: [],
    error: null,
    pageSize: 24,
    totalNewsCount: 0,
    currentPage: 1,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_NEWS_REQUEST:
        case FETCH_NEWS_BY_CATEGORY_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_NEWS_SUCCESS:
        case FETCH_NEWS_BY_CATEGORY_SUCCESS:
            return { ...state, loading: false, data: payload };
        case FETCH_NEWS_FAILURE:
        case FETCH_NEWS_BY_CATEGORY_FAILURE:
            return { ...state, loading: false, error: payload };

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: payload };

        default:
            return state;
    }
};
