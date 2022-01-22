// Core
import React, { useContext, ReactNode, FC, useState } from 'react';

// Context
import { KeyboardContext, KeyboardContextType, initialState, keyboardLangs } from './context';
import { TogglersContext } from '../togglers';

interface KeyboardProviderProps {
    children: ReactNode
}

export const KeyboardProvider: FC<KeyboardProviderProps> = ({ children }) => {
    const [ state, setState ] = useState<KeyboardContextType['keyboardState']>(initialState);
    const { togglersState: { isCapitalize, isKeyboardVisible }, setToggler } = useContext(TogglersContext);

    const toggleKeyboard: KeyboardContextType['toggleKeyboard'] = () => {
        setToggler({ type: 'isKeyboardVisible', value: !isKeyboardVisible });
    };

    const toggleActiveKey: KeyboardContextType['toggleActiveKey'] = ({ keyCode, value }) => {
        if (!value) {
            setState((prev) => ({ ...prev, activeKeyCodes: prev.activeKeyCodes.filter((key) => key !== keyCode) }));
        } else if (!state.activeKeyCodes.includes(keyCode)) {
            setState((prev) => {
                prev.activeKeyCodes = [ ...state.activeKeyCodes, keyCode ];

                return prev;
            });
        }
    };

    const toggleKeyboardLang: KeyboardContextType['toggleKeyboardLang'] = () => {
        setState((prev) => {
            if (prev.keyboardLang + 1 > keyboardLangs.length - 1) {
                prev.keyboardLang = 0;
            } else {
                prev.keyboardLang += 1;
            }

            prev.keyboardKeys = keyboardLangs[ prev.keyboardLang ];

            return prev;
        });
    };

    const toggleCapitalize: KeyboardContextType['toggleCapitalize'] = (value) => {
        setToggler({ type: 'isCapitalize', value: typeof value === 'boolean' ? value : !isCapitalize });
    };

    const resetKeyboard: KeyboardContextType['resetKeyboard'] = () => {
        setState(initialState);
    };

    const value: KeyboardContextType = {
        keyboardState: state,
        toggleKeyboard,
        toggleActiveKey,
        toggleKeyboardLang,
        toggleCapitalize,
        resetKeyboard,
    };

    return <KeyboardContext.Provider value = { value }>{ children }</KeyboardContext.Provider>;
};

export { KeyboardContext };
