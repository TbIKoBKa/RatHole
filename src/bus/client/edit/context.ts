// Core
import { createContext } from 'react';

type EditState = {
    id?: string | null
    text: string | null
}

export const initialState: EditState = { id: null, text: null };

type SetEditMessageContract = (payload: EditState) => void;
type ResetEditMessageContract = () => void;

export type EditContextType = {
    editState: EditState,
    setEditMessage: SetEditMessageContract,
    resetEditMessage: ResetEditMessageContract,
}

export const EditContext = createContext<EditContextType>({
    editState:        initialState,
    setEditMessage:   () => void 0,
    resetEditMessage: () => void 0,
});
