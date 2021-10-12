// Types
import * as types from '../types';

// Fetch
export const FETCH_MESSAGES_ASYNC = 'FETCH_MESSAGES_ASYNC';
export type FetchMessagesActionAsync = {
    type: typeof FETCH_MESSAGES_ASYNC;
};
export type FetchMessagesContract = () => FetchMessagesActionAsync

// Create
export const CREATE_MESSAGE_ASYNC = 'CREATE_MESSAGE_ASYNC';
export type CreateMessageState = {
    body: {
        text: types.Message['text'],
        username: types.Message['username'],
    }
}
export type CreateMessageActionAsync = {
    type: typeof CREATE_MESSAGE_ASYNC;
    payload: CreateMessageState
};
export type CreateMessageContract = (payload: CreateMessageState) => CreateMessageActionAsync

// Edit
export const EDIT_MESSAGE_ASYNC = 'EDIT_MESSAGE_ASYNC';
export type EditMessageState = {
    id: types.Message['_id'],
    body: {
        text: types.Message['text'],
    }
}
export type EditMessageActionAsync = {
    type: typeof EDIT_MESSAGE_ASYNC;
    payload: EditMessageState
};
export type EditMessageContract = (payload: EditMessageState) => EditMessageActionAsync

// Delete
export const DELETE_MESSAGE_ASYNC = 'DELETE_MESSAGE_ASYNC';
export type DeleteMessageState = {
    id: types.Message['_id']
}
export type DeleteMessageActionAsync = {
    type: typeof DELETE_MESSAGE_ASYNC;
    payload: DeleteMessageState
};
export type DeleteMessageContract = (payload: DeleteMessageState) => DeleteMessageActionAsync
