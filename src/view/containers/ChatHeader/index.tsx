// Core
import React, { FC } from 'react';

// Hooks
import { useUser } from '../../../bus/user';

// Components
import { Button, ButtonGroup } from '@mui/material';

// Styles
import {
    Header as StyledHeader,
    HeaderTitle,
} from './styles';

// Icons
import { Logout, KeyboardAltRounded } from '@mui/icons-material';
import { useKeyboard } from '../../../bus/client/keyboard';

export const ChatHeader: FC = () => {
    const { user, resetUser } = useUser();
    const { toggleKeyboard } = useKeyboard();

    const onClickButtonHandle = () => resetUser();

    return (
        <StyledHeader>
            <HeaderTitle>Welcome, {user.username}</HeaderTitle>
            <ButtonGroup
                aria-label = 'contained button group'
                variant = 'outlined'>
                <Button
                    children = { <KeyboardAltRounded /> }
                    color = 'info'
                    variant = 'contained'
                    onClick = { toggleKeyboard }
                />
                <Button
                    children = { <Logout /> }
                    color = 'error'
                    variant = 'contained'
                    onClick = { onClickButtonHandle }
                />
            </ButtonGroup>
        </StyledHeader>
    );
};
