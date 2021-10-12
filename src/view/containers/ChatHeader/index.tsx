// Core
import React, { FC } from 'react';

// Hooks
import { useUser } from '../../../bus/user';

// Components
import { Button } from '@mui/material';

// Styles
import {
    Header as StyledHeader,
    HeaderTitle,
} from './styles';

// Icons
import { Logout } from '@mui/icons-material';

export const ChatHeader: FC = () => {
    const { user, resetUser } = useUser();

    const onClickButtonHandle = () => resetUser();

    return (
        <StyledHeader>
            <HeaderTitle>Welcome, {user.username}</HeaderTitle>
            <Button
                children = { <Logout /> }
                color = 'error'
                variant = 'contained'
                onClick = { onClickButtonHandle }
            />
        </StyledHeader>
    );
};
