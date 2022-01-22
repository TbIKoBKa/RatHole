// Core
import React, { FC, ReactNode, useState } from 'react';

// Context
import { InputContext, InputContextType, initialState } from './context';

interface InputProviderProps {
    children: ReactNode
}

export const InputProvider: FC<InputProviderProps> = ({ children }) => {
    const [ state, setState ] = useState<InputContextType['inputState']>(initialState);

    const setInputMessage: InputContextType['setInputMessage'] = ({ text }) => {
        setState(() => ({ text }));
    };

    const resetInputMessage: InputContextType['resetInputMessage'] = () => setState(initialState);

    const value: InputContextType = {
        inputState: state,
        setInputMessage,
        resetInputMessage,
    };

    return <InputContext.Provider value = { value }>{children}</InputContext.Provider>;
};

export { InputContext };
