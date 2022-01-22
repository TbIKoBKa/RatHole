// Core
import React, { useContext, ChangeEvent, FC, useEffect, useRef, KeyboardEventHandler } from 'react';

// Components
import { Button, Alert } from '@mui/material';

// Styles
import { InputWrapper, TextField } from './styles';

// Contexts
import { TogglersContext } from '../../../bus/client/togglers';
import { InputContext } from '../../../bus/client/input';
import { EditContext } from '../../../bus/client/edit';
import { KeyboardContext } from '../../../bus/client/keyboard';

// Icons
import { Done, ClearRounded } from '@mui/icons-material';

type Proptypes = {
    sendMessageAction: () => void
}

export const InputMessage: FC<Proptypes> = ({ sendMessageAction }) => {
    const inputRef = useRef<null | HTMLInputElement>(null);
    const { togglersState: { isEditingMessage, isKeyboardVisible }} = useContext(TogglersContext);
    const { inputState, setInputMessage, resetInputMessage } = useContext(InputContext);
    const { editState,  resetEditMessage } = useContext(EditContext);
    const { toggleActiveKey, toggleCapitalize } = useContext(KeyboardContext);

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
    }, [ isKeyboardVisible, isEditingMessage, inputState.text ]);

    useEffect(() => {
        if (isEditingMessage && editState.text) {
            setInputMessage({ text: editState.text });
        } else {
            resetInputMessage();
        }
    }, [ isEditingMessage, editState.id ]);

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
                isEditingMessage && (
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
                                    onClick = { resetEditMessage }
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
