// Core
import React, { FC } from 'react';

// Containers
import { ChatHeader, ChatBody } from '../../containers';

// Components
import { ErrorBoundary, InputMessage, Keyboard, DeleteDialog } from '../../components';

// Elements
import { Spinner } from '../../elements';

// Hooks
import { useMessages } from '../../../bus/messages';
import { useDelete } from '../../../bus/client/delete';

// Styles
import {
    ChatContainer,
} from './styles';
import { useKeyboard } from '../../../bus/client/keyboard';

const Chat: FC = () => {
    const { messages, sendMessageAction } = useMessages();
    const { isKeyboardVisible } = useKeyboard();
    const { isDeleting } = useDelete();

    if (!messages.length) {
        return <Spinner />;
    }

    return (
        <ChatContainer>
            <ChatHeader />
            <ChatBody messages = { messages } />
            <InputMessage sendMessageAction = { sendMessageAction } />
            {isKeyboardVisible && <Keyboard /> }
            {isDeleting && <DeleteDialog />}
        </ChatContainer>
    );
};

export default () => (
    <ErrorBoundary>
        <Chat />
    </ErrorBoundary>
);
