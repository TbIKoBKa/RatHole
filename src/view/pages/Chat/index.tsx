// Core
import React, { FC, useContext } from 'react';

// Contexts
import { TogglersContext } from '../../../bus/client/togglers';
import { MessagesContext } from '../../../bus/messages';

// Containers
import { ChatHeader, ChatBody } from '../../containers';

// Components
import { ErrorBoundary, InputMessage, Keyboard, DeleteDialog } from '../../components';

// Elements
import { Spinner } from '../../elements';

// Styles
import {
    ChatContainer,
} from './styles';

const Chat: FC = () => {
    const { messagesState, sendMessage } = useContext(MessagesContext);
    const { togglersState: { isDeletingMessage, isKeyboardVisible }} = useContext(TogglersContext);

    if (!messagesState.length) {
        return <Spinner />;
    }

    return (
        <ChatContainer>
            <ChatHeader />
            <ChatBody messages = { messagesState } />
            <InputMessage sendMessageAction = { sendMessage } />
            {isKeyboardVisible && <Keyboard /> }
            {isDeletingMessage && <DeleteDialog />}
        </ChatContainer>
    );
};

export default () => (
    <ErrorBoundary>
        <Chat />
    </ErrorBoundary>
);
