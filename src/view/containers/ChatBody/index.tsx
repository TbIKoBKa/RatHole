// Core
import React, { FC, Fragment } from 'react';

// Components
import { Message } from '../../components';

// Styles
import {
    List,
    ListSubheader,
} from './styles';

// Helpers
import { getMessageDate, isEqualDays } from '../../../tools/helpers';

// Types
import { MessagesState } from '../../../bus/messages/types';
import { DeleteMessageState, DeleteMessageActionAsync } from '../../../bus/messages/saga/types';

type Proptypes = {
    messages: MessagesState
    deleteMessageAction: (payload: DeleteMessageState) => DeleteMessageActionAsync
}

export const ChatBody: FC<Proptypes> = ({ messages, deleteMessageAction }) => {
    return (
        <List
            subheader = { <li /> }>
            {messages.map((message, index) => (
                <Fragment key = { `subheader-${message._id}` }>
                    {
                        !isEqualDays(new Date(messages[ index - 1 ]?.createdAt), new Date(message.createdAt))
                            ? <ListSubheader>{getMessageDate(new Date(message.createdAt))}</ListSubheader>
                            : null
                    }
                    <Message
                        deleteMessageAction = { deleteMessageAction }
                        message = { message }
                    />
                </Fragment>
            ))}
        </List>
    );
};
