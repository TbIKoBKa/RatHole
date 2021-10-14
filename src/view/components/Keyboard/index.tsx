// Core
import React, { FC } from 'react';

// Hooks
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useKeyboard } from '../../../bus/client/keyboard';

// Helpers
import { getRequiredKeyCode } from '../../../tools/helpers';

// Styles
import { KeyboardGrid, KeyboardGridRow, Key } from './styles';

export const Keyboard: FC = () => {
    const { togglersRedux: { isCapitalize }, setTogglerAction } = useTogglersRedux();
    const { activeKeys, keyboardKeys } = useKeyboard();

    return (
        <KeyboardGrid>
            {keyboardKeys.map(({ keys, gridTemplateColumn }, indexRow) => (
                <KeyboardGridRow
                    gridTemplateColumn = { gridTemplateColumn }
                    key = { indexRow }
                    keyAmount = { keys.length }>
                    {keys.map((key, index) => (
                        <Key
                            key = { `key-${index}` }
                            sx = {{
                                backgroundColor: `${activeKeys.includes(key.keyCode) || (key.keyCode === 'Shift' && isCapitalize) ? 'rgba(25, 118, 210, 0.04)' : '#57aaff'}`,
                            }}
                            onClick = {
                                () => {
                                    document.dispatchEvent(new KeyboardEvent('keydown', { key: getRequiredKeyCode(key, isCapitalize), bubbles: true }));
                                    document.dispatchEvent(new KeyboardEvent('keyup', { key: getRequiredKeyCode(key, isCapitalize), bubbles: true }));
                                    key.keyCode === 'Shift' && setTogglerAction({ type: 'isCapitalize', value: !isCapitalize });
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
