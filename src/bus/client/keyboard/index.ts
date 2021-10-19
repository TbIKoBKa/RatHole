// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Hooks
import { useSelector } from '../../../tools/hooks';
import { useTogglersRedux } from '../togglers';

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

const keyboardLangs: KeyboardKeys[] = [
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

const initialState: {
    keyboardLang: number,
    keyboardKeys: KeyboardKeys,
    activeKeyCodes: string[]
} = {
    keyboardLang:   0,
    keyboardKeys:   keyboardLangs[ 0 ],
    activeKeyCodes: [],
};

type ToggleActionKeyPayload = {
    keyCode: string,
    value: boolean,
}

type ToggleActiveKey = PayloadAction<ToggleActionKeyPayload>

// Slice
export const keyboardSlice = createSlice({
    name:     'keyboard',
    initialState,
    reducers: {
        toggleActiveKey: (state, action: ToggleActiveKey) => {
            if (!action.payload.value) {
                state.activeKeyCodes = state.activeKeyCodes.filter((key) => key !== action.payload.keyCode);
            } else if (!state.activeKeyCodes.includes(action.payload.keyCode)) {
                state.activeKeyCodes = [ ...state.activeKeyCodes, action.payload.keyCode ];
            }
        },
        toggleKeyboardLang: (state) => {
            if (state.keyboardLang + 1 > keyboardLangs.length - 1) {
                state.keyboardLang = 0;
            } else {
                state.keyboardLang += 1;
            }

            state.keyboardKeys = keyboardLangs[ state.keyboardLang ];
        },
        resetKeyboard: () => initialState,
    },
});

// Interfaces
export const keyboardActions = keyboardSlice.actions;
export default keyboardSlice.reducer;

export const useKeyboard = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => ({
        activeKeys:   state.keyboard.activeKeyCodes,
        keyboardKeys: state.keyboard.keyboardKeys,
    }));
    const { togglersRedux: { isKeyboardVisible, isCapitalize }, setTogglerAction } = useTogglersRedux();

    return {
        ...selector,
        isKeyboardVisible,
        toggleKeyboard:   () => setTogglerAction({ type: 'isKeyboardVisible', value: !isKeyboardVisible }),
        isCapitalize,
        toggleCapitalize: (value?: boolean) => setTogglerAction({ type: 'isCapitalize', value: typeof value === 'boolean' ? value : !isCapitalize }),
        toggleActiveKey:  (payload: ToggleActionKeyPayload) => {
            dispatch(keyboardActions.toggleActiveKey(payload));
        },
        toggleKeyboardLang: () => dispatch(keyboardActions.toggleKeyboardLang()),
        resetKeyboard:      () => {
            dispatch(keyboardActions.resetKeyboard());
            setTogglerAction({ type: 'isKeyboardVisible', value: false });
        },
    };
};
