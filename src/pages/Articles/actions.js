import { FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE } from './actionTypes';
import { fetchArticlesApi } from '../../helpers/articles';

const fetchArticlesSuccess = (data) => ({
    type: FETCH_ARTICLES_SUCCESS,
    payload: data,
});

const fetchArticlesFailure = (error) => ({
    type: FETCH_ARTICLES_FAILURE,
    payload: error,
});

export const fetchArticles = () => async (dispatch) => {
    try {
        const response = await fetchArticlesApi();
        dispatch(fetchArticlesSuccess(response));
    } catch (error) {
        dispatch(fetchArticlesFailure(error));
    }
};
