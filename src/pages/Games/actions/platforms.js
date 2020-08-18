import {
    FETCH_PLATFORMS_REQUEST,
    FETCH_PLATFORMS_SUCCESS,
    FETCH_PLATFORMS_FAILURE,
} from '../actionTypes';
import { fetchPlatformsApi } from '../../../helpers/api';

const fetchPlatformsRequest = () => ({
    type: FETCH_PLATFORMS_REQUEST,
});

const fetchPlatformsSuccess = (data) => ({
    type: FETCH_PLATFORMS_SUCCESS,
    payload: data,
});

const fetchPlatformsFailure = (error) => ({
    type: FETCH_PLATFORMS_FAILURE,
    payload: error,
});

export const fetchPlatforms = () => async (dispatch) => {
    dispatch(fetchPlatformsRequest());
    try {
        const response = await fetchPlatformsApi();
        dispatch(fetchPlatformsSuccess(response));
    } catch (error) {
        console.log('error');
        dispatch(fetchPlatformsFailure(error));
    }
};
