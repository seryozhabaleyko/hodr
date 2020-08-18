import {
    FETCH_NEWS_REQUEST,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAILURE,
    FETCH_NEWS_BY_CATEGORY_REQUEST,
    FETCH_NEWS_BY_CATEGORY_SUCCESS,
    FETCH_NEWS_BY_CATEGORY_FAILURE,
    CREATE_NEWS_SUCCESS,
    CREATE_NEWS_FAILURE,
    SET_CURRENT_PAGE,
} from './actionTypes';
import { fetchNewsApi, cerateNewsApi, fetchNewsByCategoryApi } from '../../helpers/news';

const fetchNewsRequest = () => ({
    type: FETCH_NEWS_REQUEST,
});

const fetchNewsSuccess = (data) => ({
    type: FETCH_NEWS_SUCCESS,
    payload: data,
});

const fetchNewsFailure = (error) => ({
    type: FETCH_NEWS_FAILURE,
    payload: error,
});

export const fetchNews = () => async (dispatch) => {
    dispatch(fetchNewsRequest());
    try {
        const response = await fetchNewsApi();

        dispatch(fetchNewsSuccess(response));
    } catch (error) {
        dispatch(fetchNewsFailure(error));
    }
};

const fetchNewsByCategoryRequest = () => ({
    type: FETCH_NEWS_BY_CATEGORY_REQUEST,
});

const fetchNewsByCategorySuccess = (data) => ({
    type: FETCH_NEWS_BY_CATEGORY_SUCCESS,
    payload: data,
});

const fetchNewsByCategoryFailure = (error) => ({
    type: FETCH_NEWS_BY_CATEGORY_FAILURE,
    payload: error,
});

export const fetchNewsByCategory = (category) => async (dispatch) => {
    dispatch(fetchNewsByCategoryRequest());
    try {
        const response = await fetchNewsByCategoryApi(category);

        dispatch(fetchNewsByCategorySuccess(response));
    } catch (error) {
        dispatch(fetchNewsByCategoryFailure(error));
    }
};

const cerateNewsSuccess = (data) => ({
    type: CREATE_NEWS_SUCCESS,
    payload: data,
});

const cerateNewsFailure = (error) => ({
    type: CREATE_NEWS_FAILURE,
    payload: error,
});

export const cerateNews = (news) => async (dispatch) => {
    try {
        const response = await cerateNewsApi(news);
        dispatch(cerateNewsSuccess(response));
    } catch (error) {
        dispatch(cerateNewsFailure());
    }
};

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    payload: currentPage,
});
