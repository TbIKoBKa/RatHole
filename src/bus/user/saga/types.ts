// Types
import * as types from '../types';

// Refresh
export const REFRESH_USER_ASYNC = 'REFRESH_USER_ASYNC';
export type RefreshUserActionAsync = {
    type: typeof REFRESH_USER_ASYNC;
    payload: {
        userId: types.UserId
    }
};
export type RefreshUserContract = (payload: types.UserId) => RefreshUserActionAsync

// Register
export const REGISTER_USER_ASYNC = 'REGISTER_USER_ASYNC';
export type RegisterUserActionAsync = {
    type: typeof REGISTER_USER_ASYNC;
    payload: {
        username: types.Username
    }
};
export type RegisterUserContract = (payload: types.Username) => RegisterUserActionAsync
