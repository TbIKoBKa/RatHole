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

export function* createMessage({ payload }: ReturnType<types.CreateMessageContract>) {
    const result: Message | null = yield makeRequest<Message>({
        fetcher:     () => API.createMessage(payload),
        togglerType: 'isUserFetching',
    });

    if (result !== null) {
        yield put(fetchMessagesActionAsync());
    }
}
