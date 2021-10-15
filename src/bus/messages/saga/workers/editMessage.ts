// Actions
import { messagesActions } from '../../slice';

// Api
import * as API from '../api';

// Tools
import { makeRequest } from '../../../../tools/utils';

// Types
import * as types from '../types';
import { Message } from '../../types';

export function* editMessage({ payload }: ReturnType<types.EditMessageContract>) {
    yield makeRequest<Message>({
        fetcher:      () => API.editMessage(payload),
        togglerType:  'isMessagesFetching',
        succesAction: messagesActions.editMessage,
    });
}
