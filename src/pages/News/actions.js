import { FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE } from './actionTypes';
import { fetchNewsApi } from '../../helpers/news';

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
