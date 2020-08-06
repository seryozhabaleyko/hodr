import { POST_GENRE_REQUEST, POST_GENRE_SUCCESS, POST_GENRE_FAILURE } from './actionTypes';
import { postGenreApi } from '../../helpers/games';

const postGenreRequest = () => ({
    type: POST_GENRE_REQUEST,
});

const postGenreSuccess = (genres) => ({
    type: POST_GENRE_SUCCESS,
    payload: genres,
});

const postGenreFailure = (error) => ({
    type: POST_GENRE_FAILURE,
    payload: error,
});

export const postGenre = (genre) => async (dispatch) => {
    dispatch(postGenreRequest());

    try {
        const response = await postGenreApi(genre);
        dispatch(postGenreSuccess(response));
    } catch (error) {
        dispatch(postGenreFailure(error));
    }
};
