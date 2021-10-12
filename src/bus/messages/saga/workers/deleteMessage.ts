// Core
import { put } from 'redux-saga/effects';

// Actions
import { fetchMessagesActionAsync } from '../actions';

// Api
import * as API from '../api';

// Tools
import { makeRequest } from '../../../../tools/utils';

// Types
import * as types from '../types';

export function* deleteMessage({ payload }: ReturnType<types.DeleteMessageContract>) {
    const result: boolean | null = yield makeRequest<boolean>({
        fetcher:     () => API.deleteMessage(payload),
        togglerType: 'isUserFetching',
    });

    if (result !== null) {
        yield put(fetchMessagesActionAsync());
    }
}
