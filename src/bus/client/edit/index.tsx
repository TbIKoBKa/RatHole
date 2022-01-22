// Core
import React, { FC, useState, useContext, ReactNode } from 'react';

// Contexts
import { EditContext, EditContextType, initialState } from './context';
import { TogglersContext } from '../togglers';

interface EditProviderProps {
    children: ReactNode
}

export const EditProvider: FC<EditProviderProps> = ({ children }) => {
    const [ state, setState ] = useState(initialState);
    const togglers = useContext(TogglersContext);

    const setEditMessage: EditContextType['setEditMessage'] = (payload) => {
        togglers.setToggler({ type: 'isEditingMessage', value: true });
        setState(payload);
    };

    const resetEditMessage: EditContextType['resetEditMessage'] = () => {
        setState(initialState);
        togglers.setToggler({ type: 'isEditingMessage', value: false });
    };

    const value: EditContextType = {
        editState: state,
        setEditMessage,
        resetEditMessage,
    };

    return <EditContext.Provider value = { value }>{children}</EditContext.Provider>;
};

export { EditContext };
