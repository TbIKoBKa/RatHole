// Types
import * as types from './types';

export const setUser: types.SetUserContract = (...args) => {
    const [ , action ] = args;

    return action.payload;
};
