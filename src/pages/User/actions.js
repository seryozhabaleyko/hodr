import { FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './actionTypes';
import { fetchUserApi } from '../../helpers/users';

const fetchUserSuccess = (data) => ({
    type: FETCH_USER_SUCCESS,
    payload: data || {},
});

const fetchUserFailure = (error) => ({
    type: FETCH_USER_FAILURE,
    payload: error,
});

export const fetchUser = (username) => async (dispatch) => {
    try {
        const response = await fetchUserApi(username);

        if (!response) {
            throw new Error('Такого пользователя не существует.');
        } else {
            dispatch(fetchUserSuccess(response));
        }
    } catch (error) {
        dispatch(fetchUserFailure(error));
    }
};
