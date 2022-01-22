// Core
import React, { FC, useState, useContext, ReactNode } from 'react';

// Contexts
import { DeleteContext, DeleteContextType, initialState } from './context';
import { TogglersContext } from '../togglers';

interface DeleteProviderProps {
    children: ReactNode
}

export const DeleteProvider: FC<DeleteProviderProps> = ({ children }) => {
    const [ state, setState ] = useState<DeleteContextType['deleteState']>(initialState);
    const togglers = useContext(TogglersContext);

    const setDeleteMessage: DeleteContextType['setDeleteMessage'] = (payload) => {
        togglers.setToggler({ type: 'isDeletingMessage', value: true });
        setState(payload);
    };

    const resetDeleteMessage: DeleteContextType['resetDeleteMessage'] = () => {
        setState(initialState);
        togglers.setToggler({ type: 'isDeletingMessage', value: false });
    };

    const value: DeleteContextType = {
        deleteState: state,
        setDeleteMessage,
        resetDeleteMessage,
    };

    return <DeleteContext.Provider value = { value }>{children}</DeleteContext.Provider>;
};

export { DeleteContext };
