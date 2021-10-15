// Core
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Hooks
import { useEdit } from '../client/edit';
import { useDelete } from '../client/delete';
import { useUser } from '../user';

// Tools
import { useSelector } from '../../tools/hooks';

// Saga actions
import * as actions from './saga/actions';

// eslint-disable-next-line init-declarations
let intervalId: ReturnType<typeof setInterval> | void = void 0;

const isDev = process.env.NODE_ENV === 'development';

export const useMessages = () => {
    const dispatch = useDispatch();
    const { editState, isEditing, resetEdit } = useEdit();
    const { isDeleting, deleteState, resetDelete } = useDelete();
    const { user } = useUser();

    const selector = useSelector((state) => ({
        messages: state.messages,
        loading:  state.togglers.isMessagesFetching,
    }));

    useEffect(() => {
        if (intervalId) {
            return void 0;
        }

        dispatch(actions.fetchMessagesActionAsync());

        intervalId = setInterval(() => dispatch(actions.fetchMessagesActionAsync()), isDev ? 10000 : 2000);

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, []);

    return {
        ...selector,
        fetchMessagesAction: () => dispatch(actions.fetchMessagesActionAsync()),
        deleteMessageAction: () => {
            if (isDeleting && deleteState.id) {
                dispatch(actions.deleteMessageActionAsync({ id: deleteState.id }));
                resetDelete();
            }
        },
        sendMessageAction: (message: string) => {
            if (!isEditing) {
                dispatch(actions.createMessageActionAsync({ body: { text: message.trim(), username: user.username! }}));
            } else if (editState.id && editState.text) {
                dispatch(actions.editMessageActionAsync({ id: editState.id, body: { text: message }}));
                resetEdit();
            }
        },
    };
};
