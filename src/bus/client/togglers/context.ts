// Core
import { createContext } from 'react';

export const initialState = {
    isOnline:           navigator.onLine,
    isMessagesFetching: false,
    isTodosFetching:    false,
    isUserFetching:     false,
    isUserRegistrating: false,
    isLogged:           false,
    isEditingMessage:   false,
    isKeyboardVisible:  false,
    isCapitalize:       false,
    isDeletingMessage:  false,
};

// Types
type TogglersKeys = keyof typeof initialState;
type Options = { type: TogglersKeys, value: boolean };
export type TogglersStateType = typeof initialState;

// Contracts
export type setTogglerContract = (opts: Options) => void

export type TogglersContextType = {
    togglersState: TogglersStateType,
    setToggler: setTogglerContract,
};

export const TogglersContext = createContext<TogglersContextType>({
    togglersState: initialState,
    setToggler:    () => void 0,
});
