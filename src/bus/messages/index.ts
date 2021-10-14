// Core
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Hooks
import { useEdit } from '../client/edit';
import { useUser } from '../user';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga actions
import * as actions from './saga/actions';

// Types
import * as types from './saga/types';

export const useMessages = () => {
    const dispatch = useDispatch();
    const { editState, isEditing, resetEdit } = useEdit();
    const { user } = useUser();

    const selector = useSelector((state) => ({
        messages: state.messages,
        loading:  state.togglers.isMessagesFetching,
    }));

    useEffect(() => {
        dispatch(actions.fetchMessagesActionAsync());
        const timerId = setInterval(() => dispatch(actions.fetchMessagesActionAsync()), 2000);

        return () => clearInterval(timerId);
    }, []);

    return {
        ...selector,
        fetchMessagesAction: () => dispatch(actions.fetchMessagesActionAsync()),
        deleteMessageAction: (payload: types.DeleteMessageState) => dispatch(actions.deleteMessageActionAsync(payload)),
        sendMessageAction:   (message: string) => {
            if (!isEditing) {
                dispatch(actions.createMessageActionAsync({ body: { text: message.trim(), username: user.username! }}));
            } else if (editState.id && editState.text) {
                dispatch(actions.editMessageActionAsync({ id: editState.id, body: { text: message }}));
                resetEdit();
            }
        },
    };
};
