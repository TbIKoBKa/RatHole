// Types
import * as types from './types';

export const refreshUserActionAsync: types.RefreshUserContract = (payload) => ({
    type:    types.REFRESH_USER_ASYNC,
    payload: {
        userId: payload,
    },
});

export const registerUserActionAsync: types.RegisterUserContract = (payload) => ({
    type:    types.REGISTER_USER_ASYNC,
    payload: {
        username: payload,
    },
});

