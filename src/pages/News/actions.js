import {
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAILURE,
    CREATE_NEWS_SUCCESS,
    CREATE_NEWS_FAILURE,
} from './actionTypes';
import { fetchNewsApi, cerateNewsApi } from '../../helpers/news';

const fetchNewsSuccess = (data) => ({
    type: FETCH_NEWS_SUCCESS,
    payload: data,
});

const fetchNewsFailure = (error) => ({
    type: FETCH_NEWS_FAILURE,
    payload: error,
});

export const fetchNews = () => async (dispatch) => {
    try {
        const response = await fetchNewsApi();

        dispatch(fetchNewsSuccess(response));
    } catch (error) {
        dispatch(fetchNewsFailure(error));
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
