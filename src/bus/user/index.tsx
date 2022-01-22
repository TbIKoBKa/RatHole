/* eslint-disable no-empty-function */
// Core
import React, { FC, useState, useContext, createContext, ReactNode } from 'react';
import localStorage from 'store';

// Contexts
import { TogglersContext } from '../client/togglers';
import { ErrorsContext } from '../client/errors';

// Types
import { UserContextType } from './types';

// Interfaces
interface UserProviderProps {
    children: ReactNode,
}

// Api
import * as api from './api';

const initialState: UserContextType['userState'] = {
    _id:      null,
    username: null,
};

export const UserContext = createContext<UserContextType>({
    userState:    initialState,
    setUser:      () => void 0,
    refreshUser:  () => new Promise(() => {}),
    registerUser: () => new Promise(() => {}),
    resetUser:    () => void 0,
});

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
    const [ state, setState ] = useState<UserContextType['userState']>(initialState);
    const { setToggler } = useContext(TogglersContext);
    const { setError } = useContext(ErrorsContext);

    const setUser: UserContextType['setUser'] = (payload) => setState(payload);

    const refreshUser: UserContextType['refreshUser'] = async () => {
        const localstorageId = await localStorage.get('userId');

        if (localstorageId) {
            try {
                setToggler({ type: 'isUserFetching', value: true });
                const result = await api.fetchUser(localstorageId);
                localStorage.set('userId', result._id);
                setToggler({ type: 'isLogged', value: true });
                setUser(result);
            } catch (error: any) {
                setError({ message: error.message });
            } finally {
                setToggler({ type: 'isUserFetching', value: false });
            }
        }
    };

    const registerUser: UserContextType['registerUser'] = async (username) => {
        try {
            setToggler({ type: 'isUserFetching', value: true });
            const result = await api.registerUser(username);
            localStorage.set('userId', result._id);
            setUser(result);
            setToggler({ type: 'isLogged', value: true });
        } catch (error: any) {
            setError({ message: error.message });
        } finally {
            setToggler({ type: 'isUserFetching', value: false });
        }
    };

    const resetUser: UserContextType['resetUser'] = () => {
        localStorage.remove('userId');
        setToggler({ type: 'isLogged', value: false });
        setState(initialState);
    };

    const value: UserContextType = {
        userState: state,
        setUser,
        refreshUser,
        registerUser,
        resetUser,
    };

    return <UserContext.Provider value = { value }>{children}</UserContext.Provider>;
};
