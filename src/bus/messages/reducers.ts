// Types
import * as types from './types';

export const setMessages: types.SetMessagesContract = (...args) => {
    const [ , action ] = args;

    return action.payload;
};

export const addMessage: types.AddMessageContract = (...args) => {
    const [ state, action ] = args;

    return [ ...state, action.payload ];
};

export const editMessage: types.EditMessageContract = (...args) => {
    const [ state, action ] = args;

    return state.map((message) => message._id === action.payload._id ? action.payload : message);
};

export const deleteMessage: types.DeleteMessageContract = (...args) => {
    const [ state, action ] = args;

    return state.filter((message) => message._id !== action.payload);
};
