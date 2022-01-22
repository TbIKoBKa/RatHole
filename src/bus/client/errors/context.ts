// Core
import { createContext } from 'react';

type Error = {
    id: string,
    message: string,
}
type ErrorsState = Array<Error>

export const initialState: ErrorsState = [];

type SetErrorContract = (payload: Omit<Error, 'id'>) => void
type UnsetErrorContract = (payload: Pick<Error, 'id'>) => void

export type ErrorsContextType = {
    errorsState: ErrorsState,
    setError: SetErrorContract,
    unsetError: UnsetErrorContract,
}

export const ErrorsContext = createContext<ErrorsContextType>({
    errorsState: initialState,
    setError:    () => void 0,
    unsetError:  () => void 0,
});
