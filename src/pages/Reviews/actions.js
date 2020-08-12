import { FETCH_REVIEWS_SUCCESS, FETCH_REVIEWS_FAILURE } from './actionTypes';
import { fetchReviewsApi } from '../../helpers/reviews';

const fetchReviewsSuccess = (data) => ({
    type: FETCH_REVIEWS_SUCCESS,
    payload: data,
});

const fetchReviewsFailure = (error) => ({
    type: FETCH_REVIEWS_FAILURE,
    payload: error,
});

export const fetchReviews = () => async (dispatch) => {
    try {
        const response = await fetchReviewsApi();
        dispatch(fetchReviewsSuccess(response));
    } catch (error) {
        dispatch(fetchReviewsFailure(error));
    }
};
