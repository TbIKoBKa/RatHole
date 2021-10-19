// Core
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';

// Tools
import { useSelector } from '../../../tools/hooks';

type Error = {
    id: string,
    message: string,
}
type ErrorsState = Array<Error>
type SetError = PayloadAction<Omit<Error, 'id'>>
type UnsetError = PayloadAction<{ id: string }>

const initialState: ErrorsState = [];

// Slice
export const errorsSlice = createSlice({
    name:     'errors',
    initialState,
    reducers: {
        setControlledError:   (state, action: SetError) => [ ...state, { id: v4(), message: action.payload.message  }],
        unsetControlledError: (state, action: UnsetError) => state.filter(
            ({ id }) => id !== action.payload.id,
        ),
    },
});

// Interfaces
export const errorsActions = errorsSlice.actions;
export default errorsSlice.reducer;

export const useErrors = () => {
    const dispatch = useDispatch();

    return {
        errors:                     useSelector(({ errors }) => errors),
        setControlledErrorAction:   (error: Omit<Error, 'id'>) => void dispatch(errorsActions.setControlledError({ message: error.message })),
        unsetControlledErrorAction: ({ id }: Omit<Error, 'message'>) => dispatch(errorsActions.unsetControlledError({ id })),
    };
};
