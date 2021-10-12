// Core
import { useDispatch } from 'react-redux';
import localStorage from 'store';

// Hooks
import { useSelector } from '../../tools/hooks';
import { useTogglersRedux } from '../client/togglers';

// Actions
import { userActions } from './slice';
import * as sagaActions from './saga/actions';

// Types
import { Username, UserState } from './types';

export const useUser = () => {
    const dispatch = useDispatch();
    const { setTogglerAction } = useTogglersRedux();
    const user = useSelector(({ user }) => user);

    return {
        user,
        refreshUser: async () => {
            const localstorageId = await localStorage.get('userId');
            localstorageId && dispatch(sagaActions.refreshUserActionAsync(localstorageId));
        },
        registerUser:  (username: Username) => dispatch(sagaActions.registerUserActionAsync(username)),
        setUserAction: (newState: UserState) => dispatch(userActions.setUser(newState)),
        resetUser:     () => {
            localStorage.remove('userId');
            setTogglerAction({ type: 'isLogged', value: false });
            dispatch(userActions.setUser({ _id: null, username: null }));
        },
    };
};
