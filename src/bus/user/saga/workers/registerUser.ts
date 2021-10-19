// Core
import { put } from 'redux-saga/effects';
import { togglerCreatorAction } from '../../../client/togglers';
import localStore from 'store';

// Actions
import { userActions } from '../../slice';

// Api
import { registerUser as registerUserAsync } from '../api';

// Tools
import { makeRequest } from '../../../../tools/utils';

// Types
import { RegisterUserContract } from '../types';
import { UserState } from '../../types';

export function* registerUser({ payload: { username }}: ReturnType<RegisterUserContract>) {
    const result: UserState | null = yield makeRequest({
        fetcher:           () => registerUserAsync(username),
        togglerType:       'isUserRegistrating',
        succesAction:      userActions.setUser,
        successSideEffect: () => put(togglerCreatorAction({
            type:  'isLogged',
            value: true,
        })),
        isControlledMode: true,
    });

    if (result !== null) {
        localStore.set('userId', result._id);
    }
}
