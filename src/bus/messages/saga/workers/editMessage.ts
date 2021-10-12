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
import { Message } from '../../types';

export function* editMessage({ payload }: ReturnType<types.EditMessageContract>) {
    const result: Message | null = yield makeRequest<Message>({
        fetcher:     () => API.editMessage(payload),
        togglerType: 'isMessagesFetching',
    });

    if (result !== null) {
        yield put(fetchMessagesActionAsync());
    }
}
