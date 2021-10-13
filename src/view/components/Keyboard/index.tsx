// Core
import React, { KeyboardEvent } from 'react';

// Hooks
import { useKeys } from '../../../bus/client/keys';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Styles
import { KeyboardGrid, KeyboardGridRow, Key } from './styles';

type TKey = {
    label?: string,
    keyCode: string,
    capitalizedKeyCode: boolean | string,
}

type TKeyRow = {
    gridTemplateColumn?: string
    keys: TKey[]
}

type TLang = TKeyRow[]


const langs: TLang[] = [
    [
        {
            keys: [
                { keyCode: '`', capitalizedKeyCode: '~' },
                { keyCode: '1', capitalizedKeyCode: '!' },
                { keyCode: '2', capitalizedKeyCode: '@' },
                { keyCode: '3', capitalizedKeyCode: '#' },
                { keyCode: '4', capitalizedKeyCode: '$' },
                { keyCode: '5', capitalizedKeyCode: '%' },
                { keyCode: '6', capitalizedKeyCode: '^' },
                { keyCode: '7', capitalizedKeyCode: '&' },
                { keyCode: '8', capitalizedKeyCode: '*' },
                { keyCode: '9', capitalizedKeyCode: '(' },
                { keyCode: '0', capitalizedKeyCode: ')' },
                { keyCode: '-', capitalizedKeyCode: '_' },
                { keyCode: '=', capitalizedKeyCode: '+' },
                { keyCode: 'Backspace', capitalizedKeyCode: false, label: '← Backspace' },
            ],
        },
        {
            keys: [
                { keyCode: 'q', capitalizedKeyCode: true },
                { keyCode: 'w', capitalizedKeyCode: true },
                { keyCode: 'e', capitalizedKeyCode: true },
                { keyCode: 'r', capitalizedKeyCode: true },
                { keyCode: 'r', capitalizedKeyCode: true },
                { keyCode: 't', capitalizedKeyCode: true },
                { keyCode: 'y', capitalizedKeyCode: true },
                { keyCode: 'u', capitalizedKeyCode: true },
                { keyCode: 'i', capitalizedKeyCode: true },
                { keyCode: 'o', capitalizedKeyCode: true },
                { keyCode: 'p', capitalizedKeyCode: true },
                { keyCode: '[', capitalizedKeyCode: '{' },
                { keyCode: ']', capitalizedKeyCode: '}' },
                { keyCode: '\\', capitalizedKeyCode: '|' },
            ],
        },
        {
            keys: [
                { keyCode: 'a', capitalizedKeyCode: true },
                { keyCode: 's', capitalizedKeyCode: true },
                { keyCode: 'd', capitalizedKeyCode: true },
                { keyCode: 'f', capitalizedKeyCode: true },
                { keyCode: 'g', capitalizedKeyCode: true },
                { keyCode: 'h', capitalizedKeyCode: true },
                { keyCode: 'j', capitalizedKeyCode: true },
                { keyCode: 'k', capitalizedKeyCode: true },
                { keyCode: 'l', capitalizedKeyCode: true },
                { keyCode: ';', capitalizedKeyCode: ':' },
                { keyCode: '\'', capitalizedKeyCode: '"' },
                { keyCode: '[', capitalizedKeyCode: false, label: '← ENTER' },
            ],
        },
        {
            keys: [
                { keyCode: 'Shift', capitalizedKeyCode: false, label: 'Shift ↑' },
                { keyCode: 'z', capitalizedKeyCode: true },
                { keyCode: 'x', capitalizedKeyCode: true },
                { keyCode: 'c', capitalizedKeyCode: true },
                { keyCode: 'v', capitalizedKeyCode: true },
                { keyCode: 'b', capitalizedKeyCode: true },
                { keyCode: 'n', capitalizedKeyCode: true },
                { keyCode: 'm', capitalizedKeyCode: true },
                { keyCode: ',', capitalizedKeyCode: '<' },
                { keyCode: '.', capitalizedKeyCode: '>' },
                { keyCode: '/', capitalizedKeyCode: '?' },
                { keyCode: 'Shift', capitalizedKeyCode: false, label: 'Shift ↑' },
            ],
        },
        {
            gridTemplateColumn: 'repeat(2, 1fr) 50% repeat(2, 1fr)',
            keys:               [
                { keyCode: '', capitalizedKeyCode: false, label: 'Eng' },
                { keyCode: 'Alt', capitalizedKeyCode: false, label: 'ALT' },
                { keyCode: ' ', capitalizedKeyCode: false, label: 'Spacebar' },
                { keyCode: 'Alt', capitalizedKeyCode: false, label: 'ALT' },
                { keyCode: 'Control', capitalizedKeyCode: false, label: 'CTRL' },
            ],
        },
    ],
];

export const Keyboard = () => {
    const { togglersRedux: { isCapitalize, keyboardLang }, setTogglerAction } = useTogglersRedux();
    const { activeKeys, toggleKey } = useKeys();

    const getRequiredKeyCode = ({ keyCode, capitalizedKeyCode }: TKey) => {
        if (typeof capitalizedKeyCode === 'boolean') {
            if (!capitalizedKeyCode || !isCapitalize) {
                return keyCode;
            }

            return keyCode.toUpperCase();
        }
        if (isCapitalize) {
            return capitalizedKeyCode;
        }

        return keyCode;
    };

    return (
        <KeyboardGrid>
            {langs[ keyboardLang ].map(({ keys, gridTemplateColumn }, indexRow) => (
                <KeyboardGridRow
                    gridTemplateColumn = { gridTemplateColumn }
                    key = { indexRow }
                    keyAmount = { keys.length }>
                    {keys.map((key, index) => (
                        <Key
                            key = { `key-${index}` }
                            sx = {{
                                backgroundColor: `${activeKeys.includes(key.keyCode) ? 'rgba(25, 118, 210, 0.04)' : '#57aaff'}`,
                            }}
                            onClick = {
                                () => {
                                    document.dispatchEvent(new KeyboardEvent('keypress', { key: getRequiredKeyCode(key), bubbles: true }));
                                    key.keyCode === 'Shift' && setTogglerAction({ type: 'isCapitalize', value: !isCapitalize });
                                }
                            }>
                            { key.capitalizedKeyCode ? getRequiredKeyCode(key) : key.label}
                        </Key>
                    ))}
                </KeyboardGridRow>
            ))}
        </KeyboardGrid>
    );
};
