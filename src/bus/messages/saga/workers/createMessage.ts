// Actions
import { messagesActions } from '../../slice';

// Api
import * as API from '../api';

// Tools
import { makeRequest } from '../../../../tools/utils';

// Types
import * as types from '../types';
import { Message } from '../../types';

export function* createMessage({ payload }: ReturnType<types.CreateMessageContract>) {
    yield makeRequest<Message>({
        fetcher:      () => API.createMessage(payload),
        togglerType:  'isMessagesFetching',
        succesAction: messagesActions.addMessage,
    });
}
