// Types
import * as types from './types';

export const fetchMessagesActionAsync: types.FetchMessagesContract = () => ({
    type: types.FETCH_MESSAGES_ASYNC,
});

export const createMessageActionAsync: types.CreateMessageContract = (payload) => ({
    type: types.CREATE_MESSAGE_ASYNC,
    payload,
});

export const editMessageActionAsync: types.EditMessageContract = (payload) => ({
    type: types.EDIT_MESSAGE_ASYNC,
    payload,
});

export const deleteMessageActionAsync: types.DeleteMessageContract = (payload) => ({
    type: types.DELETE_MESSAGE_ASYNC,
    payload,
});

