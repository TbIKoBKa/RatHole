// Core
import React, { FC, ReactNode, useState } from 'react';

// Context
import { TogglersContext, initialState, TogglersContextType } from './context';

// Interfaces
interface TogglersProviderProps {
    children: ReactNode
}

export const TogglersProvider: FC<TogglersProviderProps> = ({ children }) => {
    const [ state, setState ] = useState<TogglersContextType['togglersState']>(initialState);

    const setToggler: TogglersContextType['setToggler'] = ({ type, value }) => {
        setState((prev) => ({ ...prev, [ type ]: value }));
    };

    const contextValue: TogglersContextType = {
        togglersState: state,
        setToggler,
    };

    return <TogglersContext.Provider value = { contextValue }>{children}</TogglersContext.Provider>;
};

export { TogglersContext };

