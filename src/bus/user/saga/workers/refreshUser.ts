// Core
import { put } from 'redux-saga/effects';
import { togglerCreatorAction } from '../../../client/togglers';

// Actions
import { userActions } from '../../slice';

// Api
import { fetchUser } from '../api';

// Tools
import { makeRequest } from '../../../../tools/utils';

// Types
import { RefreshUserContract } from '../types';

export function* refreshUser({ payload: { userId }}: ReturnType<RefreshUserContract>) {
    yield makeRequest({
        fetcher:           () => fetchUser(userId),
        togglerType:       'isUserFetching',
        succesAction:      userActions.setUser,
        successSideEffect: () => put(togglerCreatorAction({
            type:  'isLogged',
            value: true,
        })),
        isControlledMode: true,
    });
}
