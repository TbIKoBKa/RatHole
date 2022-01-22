/* eslint-disable no-extra-parens */
/* eslint-disable no-empty-function */
// Core
import React, { useState, useEffect, useContext, createContext, ReactNode, FC } from 'react';

// Contextx
import { UserContext } from '../user';
import { TogglersContext } from '../client/togglers';
import { InputContext } from '../client/input';
import { EditContext } from '../client/edit';
import { DeleteContext } from '../client/delete';
import { ErrorsContext } from '../client/errors';

// Types
import { MessagesContextType } from './types';

// Api
import * as api from './api';

// eslint-disable-next-line init-declarations
let intervalId: ReturnType<typeof setInterval> | void = void 0;

const isDev = process.env.NODE_ENV === 'development';

export const initialState: MessagesContextType['messagesState'] = [];

export const MessagesContext = createContext<MessagesContextType>({
    messagesState:      initialState,
    addMessage:         () => void 0,
    deleteMessage:      () => void 0,
    editMessage:        () => void 0,
    setMessages:        () => void 0,
    fetchMessages:      () => new Promise(() => {}),
    deleteMessageAsync: () => new Promise(() => {}),
    sendMessage:        () => new Promise(() => {}),
});

interface MessagesProviderProps {
    children: ReactNode
}

export const MessagesProvider: FC<MessagesProviderProps> = ({ children }) => {
    const [ state, setState ] = useState<MessagesContextType['messagesState']>(initialState);

    const { userState } = useContext(UserContext);
    const { togglersState: { isEditingMessage, isDeletingMessage }, setToggler } = useContext(TogglersContext);
    const { inputState, resetInputMessage } = useContext(InputContext);
    const { editState, resetEditMessage } = useContext(EditContext);
    const { deleteState, resetDeleteMessage } = useContext(DeleteContext);
    const { setError } = useContext(ErrorsContext);

    const addMessage: MessagesContextType['addMessage'] = (payload) => {
        setState((prev) => [ ...prev, payload ]);
    };

    const deleteMessage: MessagesContextType['deleteMessage'] = (payload) => {
        setState((prev) => prev.filter((message) => message._id !== payload));
    };

    const editMessage: MessagesContextType['editMessage'] = (payload) => {
        setState((prev) => prev.map((message) => message._id === payload._id ? payload : message));
    };

    const setMessages: MessagesContextType['setMessages'] = (payload) => {
        setState(payload);
    };

    const fetchMessages: MessagesContextType['fetchMessages'] = async () => {
        try {
            setToggler({ type: 'isMessagesFetching', value: true });
            const result = await api.fetchMessages();
            setMessages(result);
        } catch (error: any) {
            setError({ message: error.message });
        } finally {
            setToggler({ type: 'isMessagesFetching', value: false });
        }
    };

    useEffect(() => {
        if (intervalId) {
            return void 0;
        }

        fetchMessages();

        intervalId = setInterval(() => fetchMessages(), isDev ? 10000 : 2000);

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, []);

    const deleteMessageAsync: MessagesContextType['deleteMessageAsync'] = async () => {
        try {
            if (isDeletingMessage && deleteState.id) {
                setToggler({ type: 'isMessagesFetching', value: true });
                const result = await api.deleteMessage({ id: deleteState.id });
                resetDeleteMessage();
                resetEditMessage();
                if (result) {
                    deleteMessage(deleteState.id);
                }
            }
        } catch (error) {
            setError({ message: (error as Error).message });
        } finally {
            setToggler({ type: 'isMessagesFetching', value: false });
        }
    };

    const sendMessage: MessagesContextType['sendMessage'] = async () => {
        try {
            setToggler({ type: 'isMessagesFetching', value: true });
            if (inputState.text) {
                if (!isEditingMessage) {
                    const result = await api.createMessage({
                        body: {
                            text:     inputState.text.trim(),
                            username: userState.username!,
                        },
                    });

                    addMessage(result);
                } else if (editState.id && editState.text) {
                    const result = await api.editMessage({ id: editState.id, body: { text: inputState.text }});
                    editMessage(result);
                    resetEditMessage();
                }

                resetInputMessage();
            }
        } catch (error) {
            setError({ message: (error as Error).message });
        } finally {
            setToggler({ type: 'isMessagesFetching', value: false });
        }
    };

    const value: MessagesContextType = {
        messagesState: state,
        addMessage,
        deleteMessage,
        editMessage,
        setMessages,
        fetchMessages,
        deleteMessageAsync,
        sendMessage,
    };

    return <MessagesContext.Provider value = { value }>{children}</MessagesContext.Provider>;
};
