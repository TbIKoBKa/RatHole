// Core
import React, { FC } from 'react';

// Hooks
import { useKeyboard } from '../../../bus/client/keyboard';

// Helpers
import { getRequiredKeyCode } from '../../../tools/helpers';

// Styles
import { KeyboardGrid, KeyboardGridRow, Key } from './styles';

export const Keyboard: FC = () => {
    const { activeKeys, keyboardKeys, isCapitalize, toggleCapitalize } = useKeyboard();

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
                                backgroundColor: `${activeKeys.includes(key.keyCode) || (key.keyCode === 'Shift' && isCapitalize) ? 'rgba(25, 118, 210, 0.04)' : '#57aaff'}`,
                            }}
                            onClick = {
                                () => {
                                    document.dispatchEvent(new KeyboardEvent('keydown', { key: getRequiredKeyCode(key, isCapitalize), bubbles: true }));
                                    document.dispatchEvent(new KeyboardEvent('keyup', { key: getRequiredKeyCode(key, isCapitalize), bubbles: true }));
                                    key.keyCode === 'Shift' && toggleCapitalize();
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
