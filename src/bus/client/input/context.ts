// Core
import { createContext } from 'react';

export type InputState = {
    text: string | null
}

export const initialState: InputState = { text: null };

type SetInputMessageContract = (payload: InputState) => void
type ResetInputMessageContract = () => void

export type InputContextType = {
    inputState: InputState,
    setInputMessage: SetInputMessageContract,
    resetInputMessage: ResetInputMessageContract,
}

export const InputContext = createContext<InputContextType>({
    inputState:        initialState,
    setInputMessage:   () => void 0,
    resetInputMessage: () => void 0,
});
