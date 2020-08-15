import {
    FETCH_NEWS_SINGLE_REQUEST,
    FETCH_NEWS_SINGLE_SUCCESS,
    FETCH_NEWS_SINGLE_FAILURE,
} from './actionTypes';
import { fetchNewsSingleApi } from '../../helpers/news';

const fetchNewsSingleRequest = () => ({
    type: FETCH_NEWS_SINGLE_REQUEST,
});

const fetchNewsSingleSuccess = (data) => ({
    type: FETCH_NEWS_SINGLE_SUCCESS,
    payload: data,
});

const fetchNewsSingleFailure = (error) => ({
    type: FETCH_NEWS_SINGLE_FAILURE,
    payload: error,
});

export const fetchNewsSingle = (slug) => async (dispatch) => {
    dispatch(fetchNewsSingleRequest());
    try {
        const response = await fetchNewsSingleApi(slug);
        dispatch(fetchNewsSingleSuccess(response));
    } catch (error) {
        dispatch(fetchNewsSingleFailure(error));
    }
};
