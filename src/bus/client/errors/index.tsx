// Core
import React, { FC, ReactNode, useState } from 'react';
import { v4 } from 'uuid';

// Context
import { ErrorsContext, ErrorsContextType, initialState } from './context';

interface ErrorsProviderProps {
    children: ReactNode
}

export const ErrorsProvider: FC<ErrorsProviderProps> = ({ children }) => {
    const [ state, setState ] = useState<ErrorsContextType['errorsState']>(initialState);

    const setError: ErrorsContextType['setError'] = ({ message }) => {
        setState((prev) => [ ...prev, { id: v4(), message }]);
    };

    const unsetError: ErrorsContextType['unsetError'] = ({ id }) => {
        setState((prev) => prev.filter(({ id: errorId }) => id !== errorId));
    };

    const value: ErrorsContextType = {
        errorsState: state,
        setError,
        unsetError,
    };

    return <ErrorsContext.Provider value = { value }>{ children }</ErrorsContext.Provider>;
};

export { ErrorsContext };
