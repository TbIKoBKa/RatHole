// Core
import React, { FC, useContext } from 'react';

// Hooks
import { UserContext } from '../../../bus/user';
import { KeyboardContext } from '../../../bus/client/keyboard';

// Components
import { Button, ButtonGroup } from '@mui/material';

// Styles
import {
    Header as StyledHeader,
    HeaderTitle,
} from './styles';

// Icons
import { Logout, KeyboardAltRounded } from '@mui/icons-material';

export const ChatHeader: FC = () => {
    const { userState, resetUser } = useContext(UserContext);
    const { resetKeyboard, toggleKeyboard } = useContext(KeyboardContext);

    const onClickButtonHandle = () => resetUser();

    return (
        <StyledHeader>
            <HeaderTitle>Welcome, {userState.username}</HeaderTitle>
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
                    onClick = { () => {
                        resetKeyboard();
                        onClickButtonHandle();
                    } }
                />
            </ButtonGroup>
        </StyledHeader>
    );
};
