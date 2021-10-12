// Core
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga actions
import * as actions from './saga/actions';

// Types
// import { MessagesState } from './types';
import * as types from './saga/types';

// Interfaces
// import { messagesActions } from './slice';

// Hooks
export const useMessages = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => ({
        messages: state.messages,
        loading:  state.togglers.isMessagesFetching,
    }));

    useEffect(() => {
        const timerId = setInterval(() => dispatch(actions.fetchMessagesActionAsync()), 1000);

        return () => clearInterval(timerId);
    }, []);

    return {
        ...selector,
        fetchMessagesAction: () => dispatch(actions.fetchMessagesActionAsync()),
        createMessageAction: (payload: types.CreateMessageState) => dispatch(actions.createMessageActionAsync(payload)),
        editMessageAction:   (payload: types.EditMessageState) => dispatch(actions.editMessageActionAsync(payload)),
        deleteMessageAction: (payload: types.DeleteMessageState) => dispatch(actions.deleteMessageActionAsync(payload)),
    };
};
