// Core
import React, { FC, useContext } from 'react';

// Contexts
import { TogglersContext } from '../../../bus/client/togglers';
import { KeyboardContext } from '../../../bus/client/keyboard';
import { InputContext } from '../../../bus/client/input';

// Helpers
import { getRequiredKeyCode } from '../../../tools/helpers';

// Styles
import { KeyboardGrid, KeyboardGridRow, Key } from './styles';

export const Keyboard: FC = () => {
    const { togglersState: { isCapitalize }} = useContext(TogglersContext);
    const {
        keyboardState: { keyboardKeys, activeKeyCodes },
        toggleCapitalize,
        toggleKeyboardLang,
    } = useContext(KeyboardContext);
    const { inputState, setInputMessage } = useContext(InputContext);

    return (
        <KeyboardGrid>
            {keyboardKeys.map(({ keys, gridTemplateColumn }, indexRow) => (
                <KeyboardGridRow
                    gridTemplateColumn = { gridTemplateColumn }
                    key = { indexRow }
                    keyAmount = { keys.length }>
                    {keys.map((key, index) => (
                        <Key
                            key = { index }
                            sx = {{
                                backgroundColor: `${activeKeyCodes.includes(key.keyCode) || (key.keyCode === 'Shift' && isCapitalize) ? 'rgba(25, 118, 210, 0.04)' : '#57aaff'}`,
                            }}
                            onClick = {
                                () => {
                                    document.dispatchEvent(new KeyboardEvent('keydown', { key: getRequiredKeyCode(key, isCapitalize), bubbles: true }));
                                    document.dispatchEvent(new KeyboardEvent('keyup', { key: getRequiredKeyCode(key, isCapitalize), bubbles: true }));

                                    if (key.keyCode.length <= 2) {
                                        setInputMessage({ text: `${inputState.text === null ? '' : inputState.text}${isCapitalize ? key.keyCode.toUpperCase() : key.keyCode}` });
                                    } else {
                                        switch (key.keyCode) {
                                            case 'Shift':
                                                toggleCapitalize();
                                                break;
                                            case 'Backspace':
                                                inputState.text && setInputMessage({ text: inputState.text.split('').slice(0, -1)
                                                    .join('') });
                                                break;
                                            case 'Language':
                                                toggleKeyboardLang();
                                                break;
                                            default:
                                        }
                                    }
                                }
                            }>
                            {key.capitalizedKeyCode ? getRequiredKeyCode(key, isCapitalize) : key.label}
                        </Key>
                    ))}
                </KeyboardGridRow>
            ))}
        </KeyboardGrid>
    );
};
