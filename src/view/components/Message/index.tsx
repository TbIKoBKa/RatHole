// Core
import React, { useContext, FC, useState } from 'react';

// Contexts
import { UserContext } from '../../../bus/user';
import { EditContext } from '../../../bus/client/edit';
import { DeleteContext } from '../../../bus/client/delete';

// Components
import { SpeedDialAction } from '@mui/material';

// Styles
import {
    Message as StyledMessage,
    MessageLeftside,
    MessageRightside,
    MessageUsername,
    MessageText,
    MessageDate,
    MessageMenu,
} from './styles';

// Helpers
import { getMessageTime } from '../../../tools/helpers';

// Icons
import { MoreHoriz, Edit, Delete } from '@mui/icons-material';

// Types
import { Message as TMessage } from '../../../bus/messages/types';

type Proptypes = {
    message: TMessage
}

// eslint-disable-next-line init-declarations
let timerId: ReturnType<typeof setTimeout> | void = void 0;

export const Message: FC<Proptypes> = ({ message }) => {
    const { userState } = useContext(UserContext);
    const { setEditMessage } = useContext(EditContext);
    const { setDeleteMessage } = useContext(DeleteContext);
    const [ isOpenMenu, setIsOpenMenu ] = useState(false);

    return (
        <StyledMessage
            sx = {{
                background:   `${message.username === userState.username ? '#59a3ec' : '#1d73c9'}`,
                borderRadius: `${message.username === userState.username ? '20px 20px 8px 20px' : '20px 20px 20px 8px'}`,
                marginLeft:   `${message.username === userState.username ? 'auto' : '0'}`,
                boxShadow:    `${message.username === userState.username ? '-2px 2px 6px #0000009b' : '2px 2px 6px #0000009b'}`,
            }}>
            <MessageLeftside>
                <MessageUsername primary = { message.username } />
                <MessageText primary = { message.text } />
            </MessageLeftside>
            <MessageRightside>
                <MessageDate primary = { `${message.createdAt === message.updatedAt ? '' : 'edited'} ${getMessageTime(new Date(message.createdAt))}` } />
            </MessageRightside>
            {
                message.username === userState.username && (
                    <MessageMenu
                        ariaLabel = 'SpeedDial basic example'
                        direction = 'left'
                        icon = { <MoreHoriz /> }
                        open = { isOpenMenu }
                        sx = {{
                            [ ' .MuiButtonBase-root' ]: {
                                background: `${message.username === userState.username ? '#70b1f3' : '#2183e6'}`,
                            },
                        }}
                        onClick = { () => { setIsOpenMenu(!isOpenMenu); } }
                        onMouseEnter = { () => {
                            if (isOpenMenu && timerId) {
                                clearTimeout(timerId);
                            }
                        } }
                        onMouseLeave = { () => {
                            timerId = setTimeout(() => setIsOpenMenu(false), 1000);
                        } }>
                        <SpeedDialAction
                            icon = { <Edit /> }
                            tooltipTitle = 'edit'
                            onClick = { () => setEditMessage({ id: message._id, text: message.text }) }
                        />
                        <SpeedDialAction
                            icon = { <Delete /> }
                            tooltipTitle = 'delete'
                            onClick = { () => setDeleteMessage({ id: message._id }) }
                        />
                    </MessageMenu>
                )
            }
        </StyledMessage>
    );
};
