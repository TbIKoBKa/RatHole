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
import { useKeyboard } from '../../../bus/client/keyboard';

const Chat: FC = () => {
    const { messages, sendMessageAction, deleteMessageAction } = useMessages();
    const { isKeyboardVisible } = useKeyboard();

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
                sendMessageAction = { sendMessageAction }
            />
            {isKeyboardVisible && <Keyboard /> }
        </ChatContainer>
    );
};

export default () => (
    <ErrorBoundary>
        <Chat />
    </ErrorBoundary>
);
