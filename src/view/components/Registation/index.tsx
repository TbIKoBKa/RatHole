// Core
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useUser } from '../../../bus/user';

// Styles
import { RegistrationWrapper, Label, TextField, Button } from './styles';

// Types
import { Username } from '../../../bus/user/types';

// Helpers
import { generateId } from '../../../tools/helpers';

export const Registation = () => {
    const [ username, setUsername ] = useState<Username>(null);
    const { registerUser } = useUser();

    useEffect(() => {
        setUsername(`RAT:${generateId()}`);
    }, []);

    const onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(() => event.target.value);
    };

    const onClickButtonHandle = () => {
        registerUser(username);
    };

    return (
        <RegistrationWrapper>
            <Label children = 'Enter your ratname:'/>
            <TextField
                color = 'primary'
                id = 'outlined-basic'
                margin = 'dense'
                value = { username === null ? '' : username }
                variant = 'outlined'
                onChange = { onChangeHandle }
            />
            <Button
                color = 'success'
                variant = 'contained'
                onClick = { onClickButtonHandle }>
                DROP INTO HOLE
            </Button>
        </RegistrationWrapper>
    );
};
