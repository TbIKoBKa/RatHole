// Core
import { createContext } from 'react';

export type Key = {
    label?: string,
    keyCode: string,
    capitalizedKeyCode: boolean | string,
}

type KeyRow = {
    gridTemplateColumn?: string
    keys: Key[]
}

type KeyboardKeys = KeyRow[]

export const keyboardLangs: KeyboardKeys[] = [
    [
        {
            gridTemplateColumn: 'repeat(13, 1fr) 1.5fr',
            keys:               [
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
                { keyCode: 'Backspace', capitalizedKeyCode: false, label: '←' },
            ],
        },
        {
            gridTemplateColumn: '8% repeat(13, 1fr)',
            keys:               [
                { keyCode: 'Tab', capitalizedKeyCode: false, label: 'Tab' },
                { keyCode: 'q', capitalizedKeyCode: true },
                { keyCode: 'w', capitalizedKeyCode: true },
                { keyCode: 'e', capitalizedKeyCode: true },
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
            gridTemplateColumn: '10% repeat(11, 1fr) 12%',
            keys:               [
                { keyCode: 'CapsLock', capitalizedKeyCode: false, label: 'CapsLock' },
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
                { keyCode: 'Enter', capitalizedKeyCode: false, label: 'ENTER' },
            ],
        },
        {
            gridTemplateColumn: '13% repeat(10, 1fr) 13%',
            keys:               [
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
            gridTemplateColumn: 'repeat(3, 1fr) 40% repeat(3, 1fr)',
            keys:               [
                { keyCode: 'Control', capitalizedKeyCode: false, label: 'CTRL' },
                { keyCode: 'Meta', capitalizedKeyCode: false, label: 'WIN' },
                { keyCode: 'Alt', capitalizedKeyCode: false, label: 'ALT' },
                { keyCode: ' ', capitalizedKeyCode: false, label: 'Spacebar' },
                { keyCode: 'Alt', capitalizedKeyCode: false, label: 'ALT' },
                { keyCode: 'Language', capitalizedKeyCode: false, label: 'Eng' },
                { keyCode: 'Control', capitalizedKeyCode: false, label: 'CTRL' },
            ],
        },
    ],
    [
        {
            gridTemplateColumn: 'repeat(13, 1fr) 1.5fr',
            keys:               [
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
                { keyCode: 'Backspace', capitalizedKeyCode: false, label: '←' },
            ],
        },
        {
            gridTemplateColumn: '8% repeat(13, 1fr)',
            keys:               [
                { keyCode: 'Tab', capitalizedKeyCode: false, label: 'Tab' },
                { keyCode: 'й', capitalizedKeyCode: true },
                { keyCode: 'ц', capitalizedKeyCode: true },
                { keyCode: 'у', capitalizedKeyCode: true },
                { keyCode: 'к', capitalizedKeyCode: true },
                { keyCode: 'е', capitalizedKeyCode: true },
                { keyCode: 'н', capitalizedKeyCode: true },
                { keyCode: 'г', capitalizedKeyCode: true },
                { keyCode: 'ш', capitalizedKeyCode: true },
                { keyCode: 'щ', capitalizedKeyCode: true },
                { keyCode: 'з', capitalizedKeyCode: true },
                { keyCode: 'х', capitalizedKeyCode: true },
                { keyCode: 'ъ', capitalizedKeyCode: true },
                { keyCode: '\\', capitalizedKeyCode: '|' },
            ],
        },
        {
            gridTemplateColumn: '12% repeat(11, 1fr) 12%',
            keys:               [
                { keyCode: 'CapsLock', capitalizedKeyCode: false, label: 'CapsLock' },
                { keyCode: 'ф', capitalizedKeyCode: true },
                { keyCode: 'ы', capitalizedKeyCode: true },
                { keyCode: 'в', capitalizedKeyCode: true },
                { keyCode: 'а', capitalizedKeyCode: true },
                { keyCode: 'п', capitalizedKeyCode: true },
                { keyCode: 'р', capitalizedKeyCode: true },
                { keyCode: 'о', capitalizedKeyCode: true },
                { keyCode: 'л', capitalizedKeyCode: true },
                { keyCode: 'д', capitalizedKeyCode: true },
                { keyCode: 'ж', capitalizedKeyCode: true },
                { keyCode: 'э', capitalizedKeyCode: true },
                { keyCode: 'Enter', capitalizedKeyCode: false, label: 'ENTER' },
            ],
        },
        {
            gridTemplateColumn: '13% repeat(10, 1fr) 13%',
            keys:               [
                { keyCode: 'Shift', capitalizedKeyCode: false, label: 'Shift ↑' },
                { keyCode: 'я', capitalizedKeyCode: true },
                { keyCode: 'ч', capitalizedKeyCode: true },
                { keyCode: 'с', capitalizedKeyCode: true },
                { keyCode: 'м', capitalizedKeyCode: true },
                { keyCode: 'и', capitalizedKeyCode: true },
                { keyCode: 'т', capitalizedKeyCode: true },
                { keyCode: 'ь', capitalizedKeyCode: true },
                { keyCode: 'б', capitalizedKeyCode: true },
                { keyCode: 'ю', capitalizedKeyCode: true },
                { keyCode: '.', capitalizedKeyCode: ',' },
                { keyCode: 'Shift', capitalizedKeyCode: false, label: 'Shift ↑' },
            ],
        },
        {
            gridTemplateColumn: 'repeat(3, 1fr) 40% repeat(3, 1fr)',
            keys:               [
                { keyCode: 'Control', capitalizedKeyCode: false, label: 'CTRL' },
                { keyCode: 'Meta', capitalizedKeyCode: false, label: 'WIN' },
                { keyCode: 'Alt', capitalizedKeyCode: false, label: 'ALT' },
                { keyCode: ' ', capitalizedKeyCode: false, label: 'Spacebar' },
                { keyCode: 'Alt', capitalizedKeyCode: false, label: 'ALT' },
                { keyCode: 'Language', capitalizedKeyCode: false, label: 'Ru' },
                { keyCode: 'Control', capitalizedKeyCode: false, label: 'CTRL' },
            ],
        },
    ],
];

type StateType = {
    keyboardLang: number,
    keyboardKeys: KeyboardKeys,
    activeKeyCodes: string[]
}

export const initialState: StateType = {
    keyboardLang:   0,
    keyboardKeys:   keyboardLangs[ 0 ],
    activeKeyCodes: [],
};

type ToggleActionKeyPayload = {
    keyCode: string,
    value: boolean,
}

type KeyboardStateType = typeof initialState

// Contracts
type ToggleKeyboardContract = () => void
type ToggleActiveKeyContract = (payload: ToggleActionKeyPayload) => void
type ToggleKeyboardLangContract = () => void
type ToggleCapitalizeContract = (value?: boolean) => void
type ResetKeyboardContract = () => void

export type KeyboardContextType = {
    keyboardState: KeyboardStateType,
    toggleKeyboard: ToggleKeyboardContract,
    toggleActiveKey: ToggleActiveKeyContract,
    toggleKeyboardLang: ToggleKeyboardLangContract,
    toggleCapitalize: ToggleCapitalizeContract,
    resetKeyboard: ResetKeyboardContract,
}

export const KeyboardContext = createContext<KeyboardContextType>({
    keyboardState:      initialState,
    toggleKeyboard:     () => void 0,
    toggleActiveKey:    () => void 0,
    toggleKeyboardLang: () => void 0,
    toggleCapitalize:   () => void 0,
    resetKeyboard:      () => void 0,
});
