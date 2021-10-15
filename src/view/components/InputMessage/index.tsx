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
import { Done, ClearRounded } from '@mui/icons-material';

type Proptypes = {
    sendMessageAction: (message: string) => void
}

export const InputMessage: FC<Proptypes> = ({ sendMessageAction }) => {
    const inputRef = useRef<null | HTMLInputElement>(null);
    const [ message, setMessage ] = useState<string>('');
    const { editState, isEditing, resetEdit } = useEdit();
    const { toggleActiveKey, isKeyboardVisible, toggleKeyboardLang, toggleCapitalize } = useKeyboard();

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
                    setMessage((prevState) => {
                        const selection = window.getSelection()?.toString();
                        let newState = '';

                        if (selection) {
                            newState = prevState.replace(selection.toString(), '');
                            inputRef.current!.selectionStart = prevState.indexOf(selection);
                        } else {
                            const caretPos = inputRef.current!.selectionStart;
                            newState = prevState.split('').filter((char, index) => caretPos !== index + 1)
                                .join('');
                        }

                        return newState;
                    });
                    if (inputRef.current) {
                        inputRef.current.selectionStart = 3;
                    }
                    break;
                case 'Language':
                    toggleKeyboardLang();
                    break;
                case 'Enter':
                    submitForm();
                    break;
                case 'Shift':
                    toggleCapitalize(true);
                    break;
                default:
            }
        } else {
            setMessage((prevState) => prevState + key);
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
    }, [ isKeyboardVisible, isEditing, message ]);

    useEffect(() => {
        if (isEditing && editState.text) {
            setMessage(editState.text);
        } else {
            setMessage('');
        }
    }, [ isEditing, editState.id ]);

    const onChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage(() => event.target.value);
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
