// Core
import React, { ChangeEvent, FC, useEffect, useRef, KeyboardEventHandler } from 'react';

// Components
import { Button, Alert } from '@mui/material';

// Styles
import { InputWrapper, TextField } from './styles';

// Hooks
import { useInputMessage } from '../../../bus/client/input';
import { useEdit } from '../../../bus/client/edit';
import { useKeyboard } from '../../../bus/client/keyboard';

// Icons
import { Done, ClearRounded } from '@mui/icons-material';

type Proptypes = {
    sendMessageAction: () => void
}

export const InputMessage: FC<Proptypes> = ({ sendMessageAction }) => {
    const inputRef = useRef<null | HTMLInputElement>(null);
    const { inputState, setInputMessage, resetInputMessage } = useInputMessage();
    const { editState, isEditing, resetEdit } = useEdit();
    const { toggleActiveKey, isKeyboardVisible, toggleCapitalize } = useKeyboard();

    const submitForm = () => {
        sendMessageAction();
    };

    const keyDownListenerCallback = ({ key }: KeyboardEvent) => {
        toggleActiveKey({ keyCode: key, value: true });
        inputRef.current?.focus();
        if (key.length > 1) {
            switch (key) {
                case 'Enter':
                    submitForm();
                    break;
                case 'Shift':
                    toggleCapitalize(true);
                    break;
                default:
            }
        }
    };

    const keyUpListenerCallback = ({ key }: KeyboardEvent) => {
        toggleActiveKey({ keyCode: key, value: false });
        if (key.length > 1) {
            switch (key) {
                case 'Shift':
                    toggleCapitalize(false);
                    break;
                default:
            }
        }
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
    }, [ isKeyboardVisible, isEditing, inputState.text ]);

    useEffect(() => {
        if (isEditing && editState.text) {
            setInputMessage({ text: editState.text });
        } else {
            resetInputMessage();
        }
    }, [ isEditing, editState.id ]);

    const onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
        setInputMessage({ text: event.target.value });
    };

    const onButtonClickHandle = () => {
        submitForm();
    };

    const onKeyPressHandle: KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (inputState.text && event.key === 'Enter') {
            submitForm();
        }
    };

    return (
        <InputWrapper>
            {
                isEditing && (
                    <Alert
                        children = {
                            <>
                                {editState.text}
                                <Button
                                    children = { <ClearRounded /> }
                                    sx = {{
                                        lineHeight:    1,
                                        padding:       0,
                                        background:    '#ffffff',
                                        minWidth:      'auto',
                                        marginLeft:    '12px',
                                        [ '&:hover' ]: {
                                            background: '#ffffff88',
                                        },
                                    }}
                                    onClick = { resetEdit }
                                />
                            </>
                        }
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
                value = { inputState.text || '' }
                onChange = { onChangeHandle }
                onKeyPress = { onKeyPressHandle }
            />
            <Button
                children = { <Done /> }
                disabled = { !inputState.text }
                sx = {{
                    height: '100%',
                }}
                variant = 'contained'
                onClick = { onButtonClickHandle }
            />
        </InputWrapper>
    );
};
