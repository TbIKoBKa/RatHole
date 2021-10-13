// Core
import React, { FC } from 'react';

// Containers
import { ChatHeader, ChatBody } from '../../containers';

// Components
import { ErrorBoundary, InputMessage, Keyboard } from '../../components';

// Elements
import { Spinner } from '../../elements';

// Hooks
import { useMessages } from '../../../bus/messages';

// Styles
import {
    ChatContainer,
} from './styles';

const Chat: FC = () => {
    const { messages, createMessageAction, editMessageAction, deleteMessageAction } = useMessages();

    if (!messages.length) {
        return <Spinner />;
    }

    return (
        <ChatContainer>
            <ChatHeader />
            <ChatBody
                deleteMessageAction = { deleteMessageAction }
                messages = { messages }
            />
            <InputMessage
                createMessageAction = { createMessageAction }
                editMessageAction = { editMessageAction }
            />
            <Keyboard />
        </ChatContainer>
    );
};

export default () => (
    <ErrorBoundary>
        <Chat />
    </ErrorBoundary>
);
