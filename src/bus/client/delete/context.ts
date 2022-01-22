// Core
import { createContext } from 'react';

type DeleteState = {
    id: string | null
}

export const initialState: DeleteState = { id: null };

type setDeleteMessageContract = (payload: DeleteState) => void;
type resetDeleteMessageContract = () => void;

export type DeleteContextType = {
    deleteState: DeleteState,
    setDeleteMessage: setDeleteMessageContract,
    resetDeleteMessage: resetDeleteMessageContract,
}

export const DeleteContext = createContext<DeleteContextType>({
    deleteState:        initialState,
    setDeleteMessage:   () => void 0,
    resetDeleteMessage: () => void 0,
});
