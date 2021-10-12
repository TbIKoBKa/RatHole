// Core
import React, { ChangeEvent, FC, useState, KeyboardEventHandler, useEffect } from 'react';

// Components
import { Button, Alert } from '@mui/material';

// Styles
import { InputWrapper, TextField } from './styles';

// Hooks
import { useUser } from '../../../bus/user';
import { useEdit } from '../../../bus/client/edit';

// Types
import { CreateMessageActionAsync, CreateMessageState, EditMessageActionAsync, EditMessageState } from '../../../bus/messages/saga/types';

// Icons
import { Done } from '@mui/icons-material';

type Proptypes = {
    createMessageAction: (payload: CreateMessageState) => CreateMessageActionAsync
    editMessageAction: (payload: EditMessageState) => EditMessageActionAsync
}

export const InputMessage: FC<Proptypes> = ({ createMessageAction, editMessageAction }) => {
    const [ message, setMessage ] = useState<string>('');
    const { editState, isEditing, resetEdit } = useEdit();
    const { user } = useUser();

    useEffect(() => {
        if (isEditing && editState.text) {
            setMessage(editState.text);
        }
    }, [ isEditing ]);

    const onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => setMessage(() => event.target.value);

    const submitForm = () => {
        if (!isEditing) {
            createMessageAction({ body: { text: message.trim(), username: user.username! }});
            setMessage('');
        } else if (editState.id && editState.text) {
            editMessageAction({ id: editState.id, body: { text: message }});
            resetEdit();
            setMessage('');
        }
    };

    const onButtonClickHandle = () => {
        submitForm();
    };

    const onEnterPressHandle: KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (message && event.key === 'Enter') {
            submitForm();
        }
    };

    return (
        <InputWrapper>
            {
                isEditing && (
                    <Alert
                        children = { `${editState.text}` }
                        severity = 'info'
                        sx = {{
                            position: 'absolute',
                            top:      '-48px',
                        }}
                        variant = 'filled'
                    />
                )
            }
            <TextField
                value = { message }
                onChange = { onChangeHandle }
                onKeyPress = { onEnterPressHandle }
            />
            <Button
                children = { <Done /> }
                disabled = { !message }
                sx = {{
                    height: '100%',
                }}
                variant = 'contained'
                onClick = { onButtonClickHandle }
            />
        </InputWrapper>
    );
};
