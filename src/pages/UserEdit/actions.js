import { UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE } from './actionTypes';
import { updateUserApi } from '../../helpers/users';

const updateUserRequest = () => ({
    type: UPDATE_USER_REQUEST,
});

const updateUserSuccess = (data) => ({
    type: UPDATE_USER_SUCCESS,
    payload: data,
});

const updateUserFailure = (error) => ({
    type: UPDATE_USER_FAILURE,
    payload: error,
});

export const updateUser = (userId, data) => async (dispatch) => {
    dispatch(updateUserRequest());
    try {
        const response = await updateUserApi(userId, data);
        dispatch(updateUserSuccess(response));
    } catch (error) {
        dispatch(updateUserFailure(error));
    }
};
