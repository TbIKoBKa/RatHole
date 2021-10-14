// Core
import React, { ChangeEvent, FC, useState, useEffect, useRef, KeyboardEventHandler } from 'react';

// Components
import { Button, Alert } from '@mui/material';

// Styles
import { InputWrapper, TextField } from './styles';

// Hooks
import { useEdit } from '../../../bus/client/edit';
import { useKeyboard } from '../../../bus/client/keyboard';

// Icons
import { Done } from '@mui/icons-material';

type Proptypes = {
    sendMessageAction: (message: string) => void
}

export const InputMessage: FC<Proptypes> = ({ sendMessageAction }) => {
    const inputRef = useRef<null | HTMLInputElement>(null);
    const [ message, setMessage ] = useState<string>('');
    const { editState, isEditing } = useEdit();
    const { toggleActiveKey, isKeyboardVisible, toggleKeyboardLang } = useKeyboard();

    const submitForm = () => {
        sendMessageAction(message);
        setMessage('');
    };

    const keyDownListenerCallback = ({ key }: KeyboardEvent) => {
        toggleActiveKey({ keyCode: key, value: true });
        inputRef.current?.focus();
        if (key.length > 1) {
            switch (key) {
                case 'Backspace':
                    setMessage((prevState) => prevState.slice(0, -1));
                    break;
                case 'Language':
                    toggleKeyboardLang();
                    break;
                case 'Enter':
                    submitForm();
                    break;
                default:
            }
        } else {
            setMessage((prevState) => prevState + key);
        }
    };

    const keyUpListenerCallback = ({ key }: KeyboardEvent) => {
        toggleActiveKey({ keyCode: key, value: false });
    };

    useEffect(() => {
        if (isKeyboardVisible) {
            document.addEventListener('keydown', keyDownListenerCallback, false);
            document.addEventListener('keyup', keyUpListenerCallback, false);
        } else {
            document.removeEventListener('keydown', keyDownListenerCallback);
            document.removeEventListener('keyup', () => void 0);
        }

        return () => {
            document.removeEventListener('keydown', keyDownListenerCallback);
            document.removeEventListener('keyup', keyUpListenerCallback);
        };
    }, [ isKeyboardVisible, isEditing, message ]);

    useEffect(() => {
        if (isEditing && editState.text) {
            setMessage(editState.text);
        }
    }, [ isEditing ]);

    const onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
        !isKeyboardVisible && setMessage(() => event.target.value);
    };

    const onButtonClickHandle = () => {
        submitForm();
    };

    const onKeyPressHandle: KeyboardEventHandler<HTMLInputElement> = (event) => {
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
                ref = { inputRef }
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
