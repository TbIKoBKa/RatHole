// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary, InputMessage } from '../../components';
import { Button, SpeedDialAction } from '@mui/material';

// Elements
import { Spinner } from '../../elements';

// Hooks
import { useUser } from '../../../bus/user';
import { useMessages } from '../../../bus/messages';
import { useEdit } from '../../../bus/client/edit';

// Helpers
import { getMessageDate, getMessageTime } from '../../../tools/helpers';

// Styles
import {
    ChatContainer,
    List,
    ListItem,
    ListItemLeftside,
    ListItemRightside,
    ListItemUsername,
    ListItemMessage,
    ListItemDate,
    Header,
    HeaderTitle,
    MessageMenu,
} from './styles';

// Icons
import { MoreHoriz, Edit, Delete, Logout } from '@mui/icons-material';

const Chat: FC = () => {
    const { messages, createMessageAction, editMessageAction, deleteMessageAction } = useMessages();
    const { user, resetUser } = useUser();
    const { setEditMessage } = useEdit();

    const onClickButtonHandle = () => resetUser();

    if (!messages.length) {
        return <Spinner />;
    }

    return (
        <ChatContainer>
            <Header>
                <HeaderTitle>Welcome, {user.username}</HeaderTitle>
                <Button
                    children = { <Logout /> }
                    color = 'error'
                    variant = 'contained'
                    onClick = { onClickButtonHandle }
                />
            </Header>
            <List
                subheader = { <li /> }>
                {messages.map((message) => (
                    <ListItem
                        key = { message._id }
                        sx = {{
                            background:   `${message.username === user.username ? '#59a3ec' : '#1d73c9'}`,
                            borderRadius: `${message.username === user.username ? '20px 20px 8px 20px' : '20px 20px 20px 8px'}`,
                            marginLeft:   `${message.username === user.username ? 'auto' : '0'}`,
                            boxShadow:    `${message.username === user.username ? '-3px 3px 10px #0000009b' : '3px 3px 10px #0000009b'}`,
                        }}>
                        <ListItemLeftside>
                            <ListItemUsername primary = { message.username } />
                            <ListItemMessage primary = { message.text } />
                        </ListItemLeftside>
                        <ListItemRightside>
                            <ListItemDate primary = { `${message.createdAt === message.updatedAt ? '' : 'edited'} ${getMessageTime(new Date(message.createdAt))}` } />
                        </ListItemRightside>
                        {
                            message.username === user.username && (
                                <MessageMenu
                                    ariaLabel = 'SpeedDial basic example'
                                    direction = 'left'
                                    icon = { <MoreHoriz /> }
                                    sx = {{
                                        [ ' .MuiButtonBase-root' ]: {
                                            background: `${message.username === user.username ? '#70b1f3' : '#2183e6'}`,
                                        },
                                    }}>
                                    <SpeedDialAction
                                        icon = { <Edit /> }
                                        tooltipTitle = 'edit'
                                        onClick = { () => setEditMessage({ id: message._id, text: message.text }) }
                                    />
                                    <SpeedDialAction
                                        icon = { <Delete /> }
                                        tooltipTitle = 'delete'
                                        onClick = { () => deleteMessageAction({ id: message._id }) }
                                    />
                                </MessageMenu>
                            )
                        }
                    </ListItem>
                ))}
            </List>
            <InputMessage
                createMessageAction = { createMessageAction }
                editMessageAction = { editMessageAction }
            />
        </ChatContainer>
    );
};

export default () => (
    <ErrorBoundary>
        <Chat />
    </ErrorBoundary>
);
