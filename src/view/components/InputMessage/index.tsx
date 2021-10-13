// Core
import React, { ChangeEvent, FC, useState, KeyboardEventHandler, useEffect } from 'react';

// Components
import { Button, Alert } from '@mui/material';

// Styles
import { InputWrapper, TextField } from './styles';

// Hooks
import { useUser } from '../../../bus/user';
import { useEdit } from '../../../bus/client/edit';
import { useKeys } from '../../../bus/client/keys';

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
    const { toggleKey } = useKeys();

    useEffect(() => {
        document.addEventListener('keypress', ({ key }) => {
            if (key >= '0') {
                setMessage((prevState) => prevState + key);
            }
        });

        document.addEventListener('keydown', ({ key }) => {
            console.log('down', key);
            toggleKey(key);
        });

        document.addEventListener('keyup', ({ key }) => {
            console.log('up', key);
            toggleKey(key);
        });

        return () => {
            document.removeEventListener('keypress', () => void 0);
            document.removeEventListener('keydown', () => void 0);
            document.removeEventListener('keyup', () => void 0);
        };
    }, []);

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

    const onKeyPressHandle: KeyboardEventHandler<HTMLInputElement> = (event) => {
        console.log(event);
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
                onKeyPress = { onKeyPressHandle }
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
