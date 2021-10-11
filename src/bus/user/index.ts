// Core
import { useDispatch } from 'react-redux';
import localStorage from 'store';

// Saga actions
import * as actions from './saga/actions';

// Types
import { Username } from './types';

// Hooks
export const useUser = () => {
    const dispatch = useDispatch();

    return {
        refreshUser: async () => {
            const localstorageId = await localStorage.get('userId');
            localstorageId && dispatch(actions.refreshUserActionAsync(localstorageId));
        },
        registerUser: (username: Username) => dispatch(actions.registerUserActionAsync(username)),
    };
};
